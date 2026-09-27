"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { portfolioCategories, portfolioProjects, type PortfolioCategory } from "@/data/portfolio-projects";

type Cat = "All" | PortfolioCategory;

function PortfolioPage() {
  const [filter, setFilter] = useState<Cat>("All");

  const filtered = portfolioProjects.filter((project) => filter === "All" || project.cat === filter);

  return (
    <div className="px-6 pb-32">
      <section className="mx-auto max-w-5xl pt-10 text-center">
        <h1 className="sr-only">Our Work &amp; Case Studies</h1>
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected work from the studio."
          description="A snapshot of the products, brands and growth engines we've shipped."
        />
      </section>

      <div className="mx-auto max-w-7xl mt-14">
        <div role="group" aria-label="Filter by category" className="flex flex-wrap items-center justify-center gap-2">
          {portfolioCategories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition ${
                filter === c ? "text-white" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {filter === c && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full gradient-primary -z-10"
                />
              )}
              {c}
            </button>
          ))}
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div
            key="project-cards"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-12 grid gap-12 md:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Reveal>
                  <ProjectCard
                    title={p.title}
                    description={p.impact}
                    image={p.heroImage}
                    techStack={p.techStack}
                    href={`/portfolio/${p.slug}`}
                  />
                </Reveal>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <Reveal>
        <div className="h-px" />
      </Reveal>
    </div>
  );
}

export default PortfolioPage;
