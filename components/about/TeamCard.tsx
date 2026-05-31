"use client";

import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import type { TeamMember } from "@/data/team";
import { Badge } from "../ui/badge";

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

        <h3 className="mt-4 font-display text-xl font-semibold leading-tight">
          {member.name}
        </h3>
        <div className="mt-4 flex justify-center">
          <Badge className="bg-cyan-500/15 text-cyan-300 border-cyan-400/30">
            {member.role}
          </Badge>
        </div>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {member.tagline}
        </p>

        <Link href={`/team/${member.slug}`}>
          <Button className="mt-5 w-full rounded-full gradient-primary text-white hover:opacity-95">
            View Profile
          </Button>
        </Link>
      </article>
    </Reveal>
  );
}
