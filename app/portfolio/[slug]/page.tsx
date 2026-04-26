import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowRightIcon,
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
  BoltIcon,
  CheckCircleIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";
import { Reveal } from "@/components/Reveal";
import { getPortfolioProject, portfolioProjects } from "@/data/portfolio-projects";

const resultIcons = [ArrowTrendingUpIcon, ArrowTrendingDownIcon, CurrencyDollarIcon, BoltIcon];

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getPortfolioProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.impact,
    alternates: { canonical: `https://dankha.co/portfolio/${slug}` },
    openGraph: {
      title: `${project.title} — Dankha Agency`,
      description: project.impact,
      url: `https://dankha.co/portfolio/${slug}`,
      images: [{ url: project.heroImage, width: 1600, alt: project.title }],
    },
  };
}

async function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getPortfolioProject(slug);

  if (!project) {
    notFound();
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://dankha.co" },
      { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://dankha.co/portfolio" },
      { "@type": "ListItem", position: 3, name: project.title, item: `https://dankha.co/portfolio/${slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    <div className="px-6 pb-28 pt-10">
      <section className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 glass-strong">
        <div className="grid gap-8 p-8 md:p-10 lg:grid-cols-[1.05fr_1.2fr] lg:items-center lg:p-12">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-secondary">
                {project.cat}
                <span className="h-1 w-1 rounded-full bg-secondary/70" />
                {project.year}
              </div>
              <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-6xl">
                <span className="gradient-text-bright">{project.title}</span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground/90">{project.impact}</p>

              <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted-foreground">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  Client: {project.client}
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  Industry: {project.industry}
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-elegant">
              <div className={`absolute inset-0 bg-linear-to-br ${project.color} opacity-30`} />
              <Image
                src={project.heroImage}
                alt={project.title}
                width={1400}
                height={1000}
                className="aspect-4/3 h-full w-full object-cover"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-7xl border-t border-white/10 pt-14">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <div className="max-w-md">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-secondary">Overview</p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                Project Overview
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                A concise breakdown of what the project is, who it serves, and the business problem it was built to solve.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.04}>
            <div className="border-t border-white/10">
              <div className="grid gap-3 border-b border-white/10 py-5 md:grid-cols-[160px_1fr] md:gap-6">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-secondary/80">What</p>
                <p className="text-base leading-relaxed text-foreground/90 md:text-lg">{project.overview.what}</p>
              </div>
              <div className="grid gap-3 border-b border-white/10 py-5 md:grid-cols-[160px_1fr] md:gap-6">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-secondary/80">Who it&apos;s for</p>
                <p className="text-base leading-relaxed text-foreground/90 md:text-lg">{project.overview.who}</p>
              </div>
              <div className="grid gap-3 py-5 md:grid-cols-[160px_1fr] md:gap-6">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-secondary/80">What it solves</p>
                <p className="text-base leading-relaxed text-foreground/90 md:text-lg">{project.overview.problem}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl border-t border-white/10 pt-16">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
          <Reveal>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-secondary">Challenge</p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">Problem / Challenge</h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground md:text-base">
                Before the engagement, these were the main blockers affecting performance, clarity, and growth.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-x-10 gap-y-5 md:grid-cols-2">
            {project.challenges.map((challenge, index) => (
              <Reveal key={challenge} delay={index * 0.04}>
                <div className="border-b border-white/10 pb-5">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-secondary/75">
                    Issue {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-foreground/90">{challenge}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl border-t border-white/10 pt-16">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
          <Reveal>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-secondary">Execution</p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">Solution / What We Did</h2>
            </div>
          </Reveal>

          <div className="space-y-10">
            {project.solution.map((block, index) => (
              <Reveal key={block.title} delay={index * 0.05}>
                <article className="grid gap-4 border-b border-white/10 pb-8 md:grid-cols-[180px_1fr]">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-secondary">{String(index + 1).padStart(2, "0")}</p>
                    <h3 className="mt-2 font-display text-2xl font-semibold">{block.title}</h3>
                  </div>
                  <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <CheckCircleIcon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-secondary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.95fr]">
        <Reveal>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-secondary">Capability</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">Features / Deliverables</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.features.map((feature) => (
                <span key={feature} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-foreground/85">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6 md:p-7">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-secondary">Impact</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">Results</h2>
            <div className="mt-6 space-y-3">
              {project.results.map((result, index) => {
                const Icon = resultIcons[index % resultIcons.length];

                return (
                  <div
                    key={result}
                    className="flex items-start gap-4 border-b border-cyan-200/10 pb-4 text-base font-medium text-foreground"
                  >
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-background/30 text-cyan-200">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <div className="pt-1">{result}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto mt-16 max-w-7xl border-t border-white/10 pt-16">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-secondary">Showcase</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">Visual Showcase</h2>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-5 lg:h-136 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.8fr)] lg:grid-rows-2">
          <Reveal className="h-full lg:row-span-2">
            <div className="h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-card">
              <Image
                src={project.visuals[0]}
                alt={`${project.title} showcase 1`}
                width={1600}
                height={1200}
                className="aspect-16/11 h-full min-h-96 w-full object-cover transition duration-500 hover:scale-105 lg:aspect-auto lg:min-h-0"
              />
            </div>
          </Reveal>

          {project.visuals.slice(1).map((visual, index) => (
            <Reveal key={visual} delay={(index + 1) * 0.05} className="h-full">
              <div className="h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-card">
                <Image
                  src={visual}
                  alt={`${project.title} showcase ${index + 2}`}
                  width={1200}
                  height={900}
                  className="aspect-16/10 h-full min-h-72 w-full object-cover transition duration-500 hover:scale-105 lg:aspect-auto lg:min-h-0"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 grid max-w-7xl gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-secondary">Stack</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">Tech Stack</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.techStack.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-foreground/85">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {project.testimonial ? (
          <Reveal delay={0.06}>
            <div className="border-l border-white/10 pl-0 lg:pl-8">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-secondary">Client Feedback</p>
              <blockquote className="mt-5 text-base leading-relaxed text-foreground/90 md:text-lg">
                “{project.testimonial.quote}”
              </blockquote>
              <p className="mt-4 text-sm font-semibold text-secondary">{project.testimonial.author}</p>
              <p className="text-sm text-muted-foreground">{project.testimonial.role}</p>
            </div>
          </Reveal>
        ) : null}
      </section>

      <section className="mx-auto mt-16 max-w-7xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-8 md:p-12">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl" />
            <div className="absolute -bottom-20 left-1/3 h-56 w-56 rounded-full bg-sky-300/10 blur-3xl" />
            <h2 className="relative max-w-3xl font-display text-3xl font-semibold tracking-tight md:text-5xl">
              Let&apos;s build something similar.
            </h2>
            <p className="relative mt-4 max-w-2xl text-muted-foreground md:text-lg">
              If you want this level of clarity, execution, and polish for your next project, let&apos;s scope it together.
            </p>
            <div className="relative mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full gradient-primary px-5 py-2.5 text-sm font-semibold text-white"
              >
                Start a project
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-white/10"
              >
                Back to portfolio
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
    </>
  );
}

export default PortfolioDetailPage;
