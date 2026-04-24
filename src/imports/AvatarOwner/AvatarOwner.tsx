import imgRectangle1445 from "./5010372e929991642259b55408cee3961ac270f0.png";

interface AvatarOwnerProps {
  name?: string;
  username?: string;
  avatarColor?: string;
}

function Frame1({ name, username }: { name: string; username: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <div className="flex flex-col font-general-sans font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white">
        <p className="leading-[14px]">{name}</p>
      </div>
      <div className="flex h-[32px] items-center justify-center relative shrink-0">
        <div className="-rotate-8 flex-none">
          <div className="h-[24px] relative px-3" data-name="Username">
            <div className="absolute bg-black inset-0 rounded-[6px]" />
            <p className="relative font-general-sans font-semibold leading-[24px] not-italic text-[12px] text-center text-white whitespace-nowrap">{username}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame({ name, username, avatarColor }: { name: string; username: string; avatarColor: string }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[54px]" data-name="Avatar with profile picture">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-full size-[54px] top-1/2" style={{ backgroundColor: avatarColor }}>
          <div className="absolute inset-0 rounded-full flex items-center justify-center text-white font-['General_Sans'] font-bold text-[20px]">
            {name.charAt(0).toUpperCase()}
          </div>
        </div>
      </div>
      <Frame1 name={name} username={username} />
    </div>
  );
}

export default function AvatarOwner({ name = "Danny Noway", username = "@dannynoway", avatarColor = "#667eea" }: AvatarOwnerProps) {
  return (
    <div className="content-stretch flex flex-col items-center relative" data-name="avatar_owner">
      <Frame name={name} username={username} avatarColor={avatarColor} />
    </div>
  );
}
