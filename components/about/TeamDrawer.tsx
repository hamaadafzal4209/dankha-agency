"use client";

import Link from "next/link";
import { TeamCard } from "@/components/about/TeamCard";
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
import { Globe, X } from "lucide-react";
import { LinkedInIcon } from "../icons/icons";

type TeamDrawerProps = {
  member: TeamMember;
  index: number;
};

export function TeamDrawer({ member, index }: TeamDrawerProps) {
  return (
    <Drawer shouldScaleBackground={false}>
      <TeamCard member={member} index={index} />

      <DrawerContent className="max-h-[92dvh] flex flex-col rounded-t-3xl border-white/15 bg-background">
        <div className="flex-1 overflow-y-auto min-h-0">
          <div className="mx-auto w-full max-w-6xl px-6 pb-8 md:px-8">

            <DrawerHeader className="px-0 pb-2 pt-3 text-left">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-24 w-24 border border-white/15 shadow-card md:h-28 md:w-28">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback className="gradient-primary font-display text-xl font-bold text-white">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <DrawerTitle className="font-display text-2xl md:text-3xl">
                      {member.name}
                    </DrawerTitle>
                    <p className="mt-1 text-base text-secondary">
                      {member.role}
                    </p>
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

            <section className="mt-4 rounded-2xl border border-white/10 bg-background p-5">
              <h4 className="font-display text-xl font-semibold">About</h4>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                {member.about}
              </p>
            </section>

            <section className="mt-6 rounded-2xl border border-white/10 bg-background p-5">
              <h4 className="font-display text-xl font-semibold">Expertise</h4>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {Object.entries(member.skills).map(([group, items]) => (
                  <div key={group}>
                    <h5 className="text-sm font-semibold text-secondary">
                      {group}
                    </h5>

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

            <section className="mt-6 rounded-2xl border border-white/10 bg-background p-5">
              <h4 className="font-display text-xl font-semibold">Links</h4>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {member.links?.linkedin && (
                  <a
                    href={member.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-foreground/90 transition hover:bg-white/10"
                  >
                    <LinkedInIcon className="h-5 w-5" /> LinkedIn
                  </a>
                )}

                {member.links?.portfolio && (
                  <a
                    href={member.links.portfolio}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-foreground/90 transition hover:bg-white/10"
                  >
                    <Globe size={16} /> Portfolio
                  </a>
                )}
              </div>
            </section>

            <section className="mt-6 rounded-2xl border border-white/10 bg-cyan-400/10 p-5">
              <h4 className="font-display text-xl font-semibold">
                Work With Our Team
              </h4>

              <p className="mt-2 max-w-2xl text-sm text-muted-foreground md:text-base">
                Let’s collaborate to build scalable digital solutions that help your business grow through technology, marketing, and eCommerce systems.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="rounded-full gradient-primary px-5 text-white"
                >
                  <Link href="/contact">Start a project</Link>
                </Button>
              </div>
            </section>

          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}