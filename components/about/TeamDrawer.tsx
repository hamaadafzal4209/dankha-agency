"use client";

import Link from "next/link";
import { AvailabilityBadge, TeamCard } from "@/components/about/TeamCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import type { TeamMember } from "@/data/team";
import { Briefcase, Globe, Mail, MapPin, X } from "lucide-react";

type TeamDrawerProps = {
  member: TeamMember;
  index: number;
};

export function TeamDrawer({ member, index }: TeamDrawerProps) {
  return (
    <Drawer shouldScaleBackground={false}>
      {/* Card — contains DrawerTrigger for the "Learn more" button */}
      <TeamCard member={member} index={index} />

      {/*
        overflow-y-auto lives on DrawerContent so the scrollbar appears
        flush against the right edge of the modal, not inside the content column.
      */}
      {/*
        Scrollable wrapper is a full-width flex child (flex-1 min-h-0) so the
        scrollbar appears flush against the right edge of the modal panel,
        not inset inside the padded content column.
      */}
      <DrawerContent className="max-h-[92dvh] flex flex-col rounded-t-3xl border-white/15 bg-background/95 backdrop-blur-xl">
        <div className="flex-1 overflow-y-auto min-h-0">
        <div className="mx-auto w-full max-w-6xl px-6 pb-8 md:px-8">
          <DrawerHeader className="px-0 pb-2 pt-3 text-left">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20 border border-white/15 shadow-card md:h-24 md:w-24">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback className="gradient-primary font-display text-xl font-bold text-white">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <DrawerTitle className="font-display text-2xl md:text-3xl">{member.name}</DrawerTitle>
                  <p className="mt-1 text-base text-secondary">{member.role}</p>
                  <DrawerDescription className="mt-2 max-w-xl text-sm md:text-base">
                    {member.tagline}
                  </DrawerDescription>
                </div>
              </div>
              <DrawerClose asChild>
                <Button variant="ghost" size="icon" aria-label="Close profile">
                  <X size={18} />
                </Button>
              </DrawerClose>
            </div>
          </DrawerHeader>

          {/* About */}
          <section className="mt-4 rounded-2xl border border-white/10 bg-card/70 p-5">
            <h4 className="font-display text-xl font-semibold">About</h4>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{member.about}</p>
          </section>

          {/* Availability */}
          <section className="mt-6 rounded-2xl border border-white/10 bg-card/70 p-5">
            <h4 className="font-display text-xl font-semibold">Availability</h4>
            <div className="mt-4 space-y-3 text-sm text-muted-foreground md:text-base">
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-2">
                  <Briefcase size={16} /> Status
                </span>
                <AvailabilityBadge availability={member.availability} />
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-2">
                  <MapPin size={16} /> Timezone
                </span>
                <span className="text-foreground/90">{member.timezone}</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-2">
                  <Globe size={16} /> Work preference
                </span>
                <span className="text-foreground/90">{member.workPreference}</span>
              </div>
            </div>
          </section>

          {/* Skills / Tech Stack */}
          <section className="mt-6 rounded-2xl border border-white/10 bg-card/70 p-5">
            <h4 className="font-display text-xl font-semibold">Skills / Tech Stack</h4>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {Object.entries(member.skills).map(([group, items]) => (
                <div key={group}>
                  <h5 className="text-sm font-semibold text-secondary">{group}</h5>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {items.map((item) => (
                      <Badge
                        key={item}
                        variant="outline"
                        className="rounded-full border-white/20 bg-white/5 px-3 py-1 text-xs text-foreground/90"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="mt-6 rounded-2xl border border-white/10 bg-card/70 p-5">
            <h4 className="font-display text-xl font-semibold">Experience</h4>
            <div className="mt-4 space-y-4">
              {member.experience.map((item) => (
                <article key={`${item.company}-${item.role}`} className="relative pl-6">
                  <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-secondary" />
                  <span className="absolute left-1.25 top-5 h-[calc(100%-0.75rem)] w-px bg-white/15" />
                  <p className="text-sm font-semibold text-foreground md:text-base">{item.company}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{item.role}</p>
                  <p className="mt-0.5 text-xs uppercase tracking-[0.16em] text-secondary">{item.duration}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="mt-6 rounded-2xl border border-white/10 bg-card/70 p-5">
            <h4 className="font-display text-xl font-semibold">Projects</h4>
            <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {member.projects.map((project) => (
                <article key={project.name} className="rounded-2xl border border-white/10 bg-background/60 p-4">
                  <h5 className="font-semibold text-foreground">{project.name}</h5>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="rounded-full border-white/20 bg-white/5 px-2.5 py-0.5 text-[11px]"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.impact}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Links */}
          <section className="mt-6 rounded-2xl border border-white/10 bg-card/70 p-5">
            <h4 className="font-display text-xl font-semibold">Links</h4>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <a
                href={member.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-foreground/90 transition hover:bg-white/10"
              >
                <Globe size={16} /> GitHub
              </a>
              <a
                href={member.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-foreground/90 transition hover:bg-white/10"
              >
                <Globe size={16} /> LinkedIn
              </a>
              <a
                href={member.links.portfolio}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-foreground/90 transition hover:bg-white/10"
              >
                <Globe size={16} /> Portfolio
              </a>
              <a
                href={member.links.email}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-foreground/90 transition hover:bg-white/10"
              >
                <Mail size={16} /> Email
              </a>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-6 rounded-2xl border border-white/10 bg-cyan-400/10 p-5">
            <h4 className="font-display text-xl font-semibold">
              Work With {member.name.split(" ")[0]}
            </h4>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground md:text-base">
              Looking for this profile on your next build? Share your scope and timelines for a focused plan.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button asChild className="rounded-full gradient-primary px-5 text-white">
                <Link href="/contact">Start a project with me</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-white/20 bg-white/5 px-5 hover:bg-white/10"
              >
                <a href={member.links.email}>Hire / Contact</a>
              </Button>
            </div>
          </section>
        </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
