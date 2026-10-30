import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { ButtonLink } from "@/app/_components/ButtonLink";
import { portfolioProjects } from "@/data/portfolio-projects";
import { featuredProjectSlugs } from "./data";

const [featured, ...others] = featuredProjectSlugs
  .map((slug) => portfolioProjects.find((project) => project.slug === slug))
  .filter((project) => project !== undefined);

export function Portfolio() {
  return (
    <section aria-labelledby="work-heading">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id="work-heading"
            eyebrow="Selected work"
            title="Websites, apps and stores we've shipped."
          />
          <ButtonLink href="/portfolio" variant="secondary" className="shrink-0 self-start sm:self-auto">
            See our work
          </ButtonLink>
        </div>

        {featured && (
          <Reveal className="mt-16">
            <ProjectCard project={featured} featured />
          </Reveal>
        )}

        <div className="mt-16 grid gap-16 md:grid-cols-2 md:gap-8 lg:gap-12">
          {others.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
