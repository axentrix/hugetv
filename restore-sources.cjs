const fs = require("fs");
const path = require("path");

const exts = new Set([".tsx", ".ts", ".jsx", ".js", ".css"]);

function walk(dir) {
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);

    if (stat.isDirectory()) {
      walk(full);
      continue;
    }

    if (!exts.has(path.extname(full))) continue;

    const text = fs.readFileSync(full, "utf8");

    const match = text.match(/sourceMappingURL=data:application\/json;base64,([A-Za-z0-9+/=]+)/);
    if (!match) continue;

    try {
      const json = JSON.parse(Buffer.from(match[1], "base64").toString("utf8"));

      if (json.sourcesContent && json.sourcesContent[0]) {
        fs.writeFileSync(full, json.sourcesContent[0], "utf8");
        console.log("Restored:", full);
      }
    } catch (err) {
      console.warn("Could not restore:", full, err.message);
    }
  }
}

walk(path.join(process.cwd(), "src"));