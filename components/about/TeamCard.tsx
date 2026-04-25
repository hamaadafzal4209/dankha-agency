"use client";

import { Reveal } from "@/components/Reveal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DrawerTrigger } from "@/components/ui/drawer";
import type { TeamMember } from "@/data/team";

export function AvailabilityBadge({ availability }: { availability: TeamMember["availability"] }) {
  const cls =
    availability === "Available"
      ? "bg-emerald-500/15 text-emerald-300 border-emerald-400/30"
      : availability === "Busy"
        ? "bg-amber-500/15 text-amber-300 border-amber-400/30"
        : "bg-cyan-500/15 text-cyan-300 border-cyan-400/30";

  return <Badge className={`border ${cls}`}>{availability}</Badge>;
}

type TeamCardProps = {
  member: TeamMember;
  index: number;
};

export function TeamCard({ member, index }: TeamCardProps) {
  return (
    <Reveal delay={index * 0.05}>
      <article className="group flex h-full flex-col rounded-3xl border border-white/10 glass-strong p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-secondary/35">
        <Avatar className="mx-auto h-20 w-20 border border-white/15 shadow-card">
          <AvatarImage src={member.avatar} alt={member.name} />
          <AvatarFallback className="gradient-primary font-display text-lg font-bold text-white">
            {member.initials}
          </AvatarFallback>
        </Avatar>

        <h3 className="mt-4 font-display text-xl font-semibold leading-tight">{member.name}</h3>
        <p className="mt-1 text-sm text-secondary">{member.role}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{member.tagline}</p>

        <div className="mt-4 flex justify-center">
          <AvailabilityBadge availability={member.availability} />
        </div>

        <DrawerTrigger asChild>
          <Button className="mt-5 w-full rounded-full gradient-primary text-white hover:opacity-95">
            Learn more
          </Button>
        </DrawerTrigger>
      </article>
    </Reveal>
  );
}
