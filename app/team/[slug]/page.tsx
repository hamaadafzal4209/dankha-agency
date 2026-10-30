import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { seoMetadata } from "@/sanity/seo";
import { ArrowRight, MapPin, Clock, Briefcase } from "lucide-react";
import { CTA } from "@/components/Home/CTA";
import { Reveal } from "@/components/Reveal";
import { TeamAvatar } from "@/components/TeamAvatar";
import { getMemberBySlug, teamMembers } from "@/data/team";
import { OrganizationId } from "@/data/commonConstants";
import { AnimatedHeading } from "@/app/_components/AnimatedHeading";

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
  return seoMetadata(`/team/${member.slug}`, {
    title: `${member.name}, ${member.role}`,
    description: `${member.name} is ${member.role} at Dankha in Lahore, with ${member.yearsOfExperience} years in ${listOf(member.expertise.slice(0, 3))}.`,
    alternates: { canonical: `https://www.dankha.co/team/${member.slug}` },
  });
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

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: member.name,
    jobTitle: member.role,
    description: member.tagline,
    image: member.avatar.startsWith("http") ? member.avatar : `https://www.dankha.co${member.avatar}`,
    url: `https://www.dankha.co/team/${member.slug}`,
    knowsAbout: member.expertise,
    worksFor: { "@type": "ProfessionalService", "@id": OrganizationId, name: "Dankha", url: "https://www.dankha.co" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.dankha.co" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://www.dankha.co/about" },
      { "@type": "ListItem", position: 3, name: member.name, item: `https://www.dankha.co/team/${member.slug}` },
    ],
  };

  return (
    <div className="px-4 pb-8 pt-12 sm:px-6 md:pt-20 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="mx-auto max-w-7xl space-y-24">

        {/* ── HERO ── */}
        <section>
          <Reveal immediate>
            <div className="grid gap-12 md:grid-cols-[auto_1fr] md:items-start">

              {/* Avatar */}
              <div className="relative mx-auto md:mx-0">
                <TeamAvatar member={member} />
              </div>

              {/* Identity */}
              <div className="space-y-4">
                <div>
                  <p className="mb-2 text-sm font-medium text-link">
                    {member.role}
                  </p>
                  <AnimatedHeading as="h1" immediate text={member.name} className="font-display text-4xl font-semibold text-foreground sm:text-5xl lg:text-6xl" />
                </div>

                <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                  {member.tagline}
                </p>

                {/* Meta row */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground pt-1">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-link" />
                    {member.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-link" />
                    {member.timezone}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Briefcase className="h-3.5 w-3.5 text-link" />
                    {member.yearsOfExperience} yrs experience
                  </span>
                </div>

                {/* Expertise chips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {member.expertise.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-md border border-border px-3 py-1 text-sm text-foreground"
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
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-4">
              {member.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col gap-1.5 bg-surface px-6 py-8"
                >
                  <span className="font-display text-3xl font-semibold text-foreground md:text-4xl">
                    {stat.value}
                  </span>
                  <span className="text-sm text-muted-foreground">
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
              <p className="text-sm font-medium text-link">
                About
              </p>
              <AnimatedHeading text={`Who is ${firstName}?`} className="font-display text-3xl font-semibold text-foreground" />
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
              <p className="text-sm font-medium text-link">
                Expertise
              </p>
              <AnimatedHeading text="Skills" className="font-display text-3xl font-semibold text-foreground" />
            </div>
          </Reveal>

          <div className="space-y-4">
            {Object.entries(member.skills).map(([category, skills], i) => (
              <Reveal key={category} delay={i * 0.04}>
                <div>
                  <h3 className="mb-4 font-display text-lg font-semibold text-foreground">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center rounded-md border border-border px-3 py-1.5 text-sm text-foreground"
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
              <p className="text-sm font-medium text-link">
                Work
              </p>
              <AnimatedHeading text="Selected projects" className="font-display text-3xl font-semibold text-foreground" />
            </div>
          </Reveal>

          <div className="space-y-4">
            {member.projects.map((project, i) => (
              <Reveal key={project.title} delay={i * 0.04}>
                <article className="space-y-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm text-muted-foreground"
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
                  <div className="flex items-start gap-3 border-l-2 border-primary pl-4">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-link" />
                    <p className="text-sm font-medium text-foreground">
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
              <p className="text-sm font-medium text-link">
                Journey
              </p>
              <AnimatedHeading text="Experience" className="font-display text-3xl font-semibold text-foreground" />
            </div>
          </Reveal>

          <div className="space-y-0">
            {member.experience.map((exp, i) => (
              <Reveal key={exp.title} delay={i * 0.04}>
                <div className="relative flex gap-8 pb-10 last:pb-0">
                  {/* Timeline line */}
                  {i < member.experience.length - 1 && (
                    <div className="absolute bottom-0 left-[7px] top-6 w-px bg-border" />
                  )}

                  {/* Dot */}
                  <div className="relative z-10 mt-1.5 h-[15px] w-[15px] shrink-0 rounded-full border-2 border-primary bg-background" />

                  {/* Content */}
                  <div className="flex-1 space-y-1.5 -mt-0.5">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="font-display text-lg font-semibold">
                        {exp.title}
                      </h3>
                      <span className="text-sm font-medium text-link">
                        {exp.company}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
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
              <p className="text-sm font-medium text-link">
                Stack
              </p>
              <AnimatedHeading text="Tools" className="font-display text-3xl font-semibold text-foreground" />
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="flex flex-wrap gap-2">
              {member.tools.map((tool) => (
                <span
                  key={tool}
                  className="inline-flex items-center rounded-md border border-border px-3 py-1.5 text-sm text-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
          </Reveal>
        </section>

      </div>
      <div className="mt-14 -mx-4 sm:-mx-6 lg:mt-18 lg:-mx-8">
        <CTA title={`Want to work with ${firstName}?`} />
      </div>
    </div>
  );
}

export default TeamMemberPage;

/** ["a", "b", "c"] -> "a, b and c" */
function listOf(items: string[]): string {
  return items.length > 1 ? `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}` : (items[0] ?? "");
}
