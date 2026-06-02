import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, MapPin, Clock, Briefcase } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { TeamAvatar } from "@/components/TeamAvatar";
import { getMemberBySlug, teamMembers, type TeamMember } from "@/data/team";

export function generateStaticParams() {
  return teamMembers.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = getMemberBySlug(slug);
  if (!member) return {};
  return {
    title: `${member.name} — Dankha`,
    description: member.tagline,
    alternates: { canonical: `https://dankha.co/team/${member.slug}` },
  };
}

async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = getMemberBySlug(slug);

  if (!member) notFound();

  const firstName = member.name.split(" ")[0];

  // Split about text into paragraphs
  const aboutParagraphs = member.about
    .split("\n\n")
    .filter((p) => p.trim().length > 0);

  return (
    <div className="px-6 pt-12 pb-32">
      <div className="mx-auto max-w-6xl space-y-24">

        {/* ── HERO ── */}
        <section>
          <Reveal>
            <div className="grid gap-12 md:grid-cols-[auto_1fr] md:items-start">

              {/* Avatar */}
              <div className="relative mx-auto md:mx-0">
                <TeamAvatar member={member} />
              </div>

              {/* Identity */}
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-2">
                    {member.role}
                  </p>
                  <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
                    {member.name}
                  </h1>
                </div>

                <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                  {member.tagline}
                </p>

                {/* Meta row */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground pt-1">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-secondary" />
                    {member.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-secondary" />
                    {member.timezone}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Briefcase className="h-3.5 w-3.5 text-secondary" />
                    {member.yearsOfExperience} yrs experience
                  </span>
                </div>

                {/* Expertise chips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {member.expertise.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-full border border-secondary/25 bg-secondary/8 px-3 py-1 text-xs font-medium text-secondary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ── STATS ── */}
        <section>
          <Reveal>
            <div className="grid grid-cols-2 gap-px md:grid-cols-4 rounded-2xl overflow-hidden border border-white/8 bg-white/8">
              {member.stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center gap-1.5 bg-[#0a0a0a] px-6 py-8 text-center"
                >
                  <span className="font-display text-3xl md:text-4xl font-bold tracking-tight gradient-text-bright">
                    {stat.value}
                  </span>
                  <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ── ABOUT ── */}
        <section className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-20">
          <Reveal>
            <div className="md:sticky md:top-24 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                About
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight">
                Who is {firstName}?
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="space-y-5">
              {aboutParagraphs.map((para, i) => (
                <p
                  key={i}
                  className="text-base md:text-[17px] leading-[1.8] text-muted-foreground"
                >
                  {para}
                </p>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ── SKILLS ── */}
        <section className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-20">
          <Reveal>
            <div className="md:sticky md:top-24 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                Expertise
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight">
                Skills &amp; Capabilities
              </h2>
            </div>
          </Reveal>

          <div className="space-y-4">
            {Object.entries(member.skills).map(([category, skills], i) => (
              <Reveal key={category} delay={i * 0.04}>
                <div className="rounded-2xl border border-white/8 bg-white/4 p-6">
                  <h3 className="font-display text-base font-semibold text-foreground/80 mb-4">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm text-foreground/85"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-20">
          <Reveal>
            <div className="md:sticky md:top-24 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                Work
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight">
                Featured Projects
              </h2>
            </div>
          </Reveal>

          <div className="space-y-4">
            {member.projects.map((project, i) => (
              <Reveal key={project.title} delay={i * 0.04}>
                <article className="rounded-2xl border border-white/8 bg-white/4 p-6 md:p-8 space-y-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full border border-white/12 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-foreground/60 uppercase tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-display text-xl font-semibold leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-sm md:text-base leading-[1.8] text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Outcome */}
                  <div className="flex items-start gap-3 rounded-xl border border-secondary/20 bg-secondary/6 px-4 py-3">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    <p className="text-sm font-medium text-secondary/90 leading-relaxed">
                      {project.outcome}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-20">
          <Reveal>
            <div className="md:sticky md:top-24 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                Journey
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight">
                Career History
              </h2>
            </div>
          </Reveal>

          <div className="space-y-0">
            {member.experience.map((exp, i) => (
              <Reveal key={exp.title} delay={i * 0.04}>
                <div className="relative flex gap-8 pb-10 last:pb-0">
                  {/* Timeline line */}
                  {i < member.experience.length - 1 && (
                    <div className="absolute left-[7px] top-6 bottom-0 w-px bg-white/8" />
                  )}

                  {/* Dot */}
                  <div className="relative z-10 mt-1.5 h-[15px] w-[15px] shrink-0 rounded-full border-2 border-secondary bg-[#0a0a0a]" />

                  {/* Content */}
                  <div className="flex-1 space-y-1.5 -mt-0.5">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="font-display text-lg font-semibold">
                        {exp.title}
                      </h3>
                      <span className="text-sm font-medium text-secondary">
                        {exp.company}
                      </span>
                    </div>
                    <p className="text-xs font-medium tracking-wide text-muted-foreground/60 uppercase">
                      {exp.period}
                    </p>
                    <p className="text-sm leading-[1.8] text-muted-foreground pt-1">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── TOOLS ── */}
        <section className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-20">
          <Reveal>
            <div className="md:sticky md:top-24 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                Stack
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight">
                Tools of the Trade
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="flex flex-wrap gap-2">
              {member.tools.map((tool) => (
                <span
                  key={tool}
                  className="inline-flex items-center rounded-xl border border-white/10 bg-white/4 px-4 py-2.5 text-sm font-medium text-foreground/80 hover:border-secondary/30 hover:bg-secondary/6 hover:text-foreground transition-colors duration-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ── CTA ── */}
        <section>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl glass-strong p-10 md:p-14">
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/8 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 left-1/4 h-64 w-64 rounded-full bg-sky-400/8 blur-3xl pointer-events-none" />

              <div className="relative max-w-2xl space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                  Let's work together
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
                  Ready to build something great with {firstName}?
                </h2>
                <p className="text-muted-foreground md:text-lg leading-relaxed">
                  Whether you have a project in mind or just want to explore what's possible — we'd love to hear from you.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-white hover:scale-[1.03] transition-transform duration-200"
                  >
                    Work with {firstName}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-semibold text-foreground hover:bg-white/10 transition-colors duration-200"
                  >
                    Meet the team
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

      </div>
    </div>
  );
}

export default TeamMemberPage;