"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { portfolioCategories, portfolioProjects, type PortfolioCategory } from "@/data/portfolio-projects";

type Cat = "All" | PortfolioCategory;

function PortfolioPage() {
  const [filter, setFilter] = useState<Cat>("All");

  const filtered = portfolioProjects.filter((project) => filter === "All" || project.cat === filter);

  return (
    <div className="px-6 pb-32">
      <section className="mx-auto max-w-5xl pt-10 text-center">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected work from the studio."
          description="A snapshot of the products, brands and growth engines we've shipped."
        />
      </section>

      <div className="mx-auto max-w-7xl mt-14">
        <div className="flex flex-wrap items-center justify-center gap-2">
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

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group"
              >
                <Link
                  href={`/portfolio/${p.slug}`}
                  className="relative block aspect-4/5 overflow-hidden rounded-3xl glass-strong text-left"
                >
                  <Image
                    src={p.heroImage}
                    alt={p.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-black/25" />
                  <div className={`absolute inset-0 bg-linear-to-br ${p.color} opacity-45 transition group-hover:opacity-60`} />
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center transition duration-500 group-hover:scale-110">
                    <div className="font-display text-7xl font-black text-white/10">
                      {String(p.id).padStart(2, "0")}
                    </div>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-linear-to-t from-black/80 via-black/30 to-transparent">
                    <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-white/70">
                      <span>{p.cat}</span>
                      <span className="h-1 w-1 rounded-full bg-white/40" />
                      <span>{p.year}</span>
                    </div>
                    <h3 className="mt-1 font-display text-2xl font-bold text-white">{p.title}</h3>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/80">{p.impact}</p>
                  </div>
                  <div className="absolute top-4 right-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white opacity-0 transition group-hover:opacity-100">
                    View Project
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <Reveal>
        <div className="h-px" />
      </Reveal>
    </div>
  );
}

export default PortfolioPage;
