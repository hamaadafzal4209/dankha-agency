import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { TeamMember } from "@/data/team";

type TeamCardProps = {
  member: TeamMember;
};

/** A team member as a list row. Render inside a `<ul>`. */
export function TeamCard({ member }: TeamCardProps) {
  return (
    <li className="border-b border-border">
      <Link
        href={`/team/${member.slug}`}
        className="group grid grid-cols-[4rem_1fr_auto] items-center gap-4 py-6 sm:grid-cols-[5rem_1fr_auto] sm:gap-6 md:grid-cols-[5rem_16rem_1fr_auto]"
      >
        <div className="relative h-16 w-16 overflow-hidden rounded-md bg-surface-2 sm:h-20 sm:w-20">
          {member.avatar ? (
            <Image src={member.avatar} alt={member.name} fill sizes="80px" className="object-cover" />
          ) : (
            <span className="flex h-full w-full items-center justify-center font-display text-xl font-semibold text-link">
              {member.initials}
            </span>
          )}
        </div>
        <div>
          <h3 className="font-display text-xl font-semibold text-foreground transition-colors group-hover:text-link">
            {member.name}
          </h3>
          <p className="text-sm text-muted-foreground">{member.role}</p>
        </div>
        <p className="hidden text-muted-foreground md:block">{member.tagline}</p>
        <ArrowRight
          size={18}
          className="text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-link"
        />
      </Link>
    </li>
  );
}
