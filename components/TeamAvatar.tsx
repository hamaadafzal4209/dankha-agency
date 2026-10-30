import Image from "next/image";
import type { TeamMember } from "@/data/team";

type TeamAvatarProps = {
  member: TeamMember;
};

export function TeamAvatar({ member }: TeamAvatarProps) {
  return (
    <div className="relative h-32 w-32 overflow-hidden rounded-lg bg-surface-2 md:h-40 md:w-40">
      {member.avatar ? (
        <Image src={member.avatar} alt={member.name} fill sizes="160px" className="object-cover" priority />
      ) : (
        <span className="flex h-full w-full items-center justify-center font-display text-4xl font-semibold text-link">
          {member.initials}
        </span>
      )}
    </div>
  );
}
