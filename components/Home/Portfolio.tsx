import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { portfolioProjects } from "@/data/portfolio-projects";

const featuredProjects = [...portfolioProjects]
  .sort(() => Math.random() - 0.5)
  .slice(0, 3);

export function Portfolio() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Selected work" title="A few projects we're proud of." />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.1}>
              <Link
                href={`/portfolio/${project.slug}`}
                className="group relative block aspect-4/5 rounded-3xl overflow-hidden glass-strong"
              >
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-black/25" />
                <div className={`absolute inset-0 bg-linear-to-br ${project.color} opacity-50`} />
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute inset-0 transition duration-500 group-hover:scale-110 flex items-center justify-center">
                  <div className="font-display text-7xl font-black text-white/10">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 bg-linear-to-t from-black/60 to-transparent">
                  <div className="text-xs uppercase tracking-wider text-white/70">{project.cat}</div>
                  <h3 className="mt-1 font-display text-2xl font-bold text-white">{project.title}</h3>
                </div>
                <div className="absolute top-4 right-4 h-10 w-10 rounded-full glass-strong flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <ArrowRight size={16} className="text-white" />
                </div>
              </Link>
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
