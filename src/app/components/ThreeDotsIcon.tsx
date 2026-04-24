export function ThreeDotsIcon() {
  return (
    <div className="relative w-10 h-10 flex items-center justify-center">
      {/* Outline circle */}
      <div className="absolute inset-0 border-2 border-white/40 rounded-full" />

      {/* Three dots SVG - centered */}
      <svg width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative">
        <circle cx="2" cy="2" r="2" fill="white" />
        <circle cx="9" cy="2" r="2" fill="white" />
        <circle cx="16" cy="2" r="2" fill="white" />
      </svg>
    </div>
  );
}
