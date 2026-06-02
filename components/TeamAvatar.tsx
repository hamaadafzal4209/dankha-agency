"use client";

import Image from "next/image";
import type { TeamMember } from "@/data/team";

type TeamAvatarProps = {
  member: TeamMember;
};

export function TeamAvatar({ member }: TeamAvatarProps) {
  return (
    <div className="relative h-28 w-28 md:h-36 md:w-36">
      <Image
        src={member.avatar}
        alt={member.name}
        fill
        className="rounded-2xl object-cover border border-white/10 shadow-2xl"
        priority
        onError={(e) => {
          // Hide the image on error and show fallback
          (e.target as HTMLImageElement).style.display = "none";
          const fallback = (e.target as HTMLImageElement).parentElement?.querySelector(".avatar-fallback");
          if (fallback) {
            (fallback as HTMLElement).style.display = "flex";
          }
        }}
      />
      {/* Fallback initials */}
      <div className="avatar-fallback absolute inset-0 hidden items-center justify-center rounded-2xl gradient-primary border border-white/10 shadow-2xl">
        <span className="font-display text-3xl md:text-4xl font-bold text-white">
          {member.initials}
        </span>
      </div>
      {/* Available badge — overlaps corner */}
      {member.available && (
        <span className="absolute -bottom-2 -right-2 flex items-center gap-1.5 rounded-full border border-green-400/30 bg-[#0a0a0a] px-2.5 py-1 text-[10px] font-semibold tracking-wide text-green-300 shadow-lg z-10">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
          Available
        </span>
      )}
    </div>
  );
}
