import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { portfolioProjects } from "@/data/portfolio-projects";

const featuredProjects = [...portfolioProjects]
  .sort(() => Math.random() - 0.5)
  .slice(0, 3);

export function Portfolio() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Selected work" title="A few projects we're proud of." />
        <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.1}>
              <ProjectCard
                title={project.title}
                description={project.impact}
                image={project.heroImage}
                techStack={project.techStack}
                href={`/portfolio/${project.slug}`}
              />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex justify-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-white/10"
            >
              View all projects
              <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
