"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { FilterTabs } from "@/app/_components/FilterTabs";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { CTA } from "@/components/Home/CTA";
import { portfolioCategories, portfolioProjects, type PortfolioCategory } from "@/data/portfolio-projects";

type Cat = "All" | PortfolioCategory;

function PortfolioPage() {
  const [filter, setFilter] = useState<Cat>("All");

  const filtered = portfolioProjects.filter((project) => filter === "All" || project.cat === filter);
  const countFor = (c: Cat) =>
    c === "All" ? portfolioProjects.length : portfolioProjects.filter((project) => project.cat === c).length;

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 md:pt-20 lg:px-8">
        <SectionHeading
          as="h1"
          eyebrow="Portfolio"
          title="Work we've shipped."
          description="Stores on six sales channels, plus websites, dashboards and mobile apps for clients in the UAE, Sweden, Saudi Arabia, the US and Pakistan."
          className="max-w-3xl"
        />

        <FilterTabs
          label="Filter projects by category"
          options={portfolioCategories}
          value={filter}
          onChange={setFilter}
          countFor={countFor}
          className="mt-12"
        />
      </section>

      <section aria-labelledby="projects-heading" className="mx-auto max-w-7xl px-4 pb-14 pt-12 sm:px-6 lg:px-8 lg:pb-18">
        <h2 id="projects-heading" className="sr-only">
          {filter === "All" ? "All projects" : `${filter} projects`}
        </h2>
        <div className="grid gap-16 md:grid-cols-2 md:gap-x-8 lg:gap-x-12 lg:gap-y-20">
          {filtered.map((project, i) => (
            <Reveal
              key={`${filter}-${project.slug}`}
              immediate={i === 0}
              className={i === 0 ? "md:col-span-2" : undefined}
            >
              <ProjectCard project={project} featured={i === 0} priority={i === 0} />
            </Reveal>
          ))}
        </div>
      </section>

      <CTA title="Want results like these?" />
    </>
  );
}

export default PortfolioPage;
