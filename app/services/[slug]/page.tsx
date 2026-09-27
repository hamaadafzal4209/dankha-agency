import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ServiceCard } from "@/components/services/ServiceCard";
import { SERVICES, getCategoryBySlug } from "@/data/services";

export function generateStaticParams() {
  return SERVICES.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getCategoryBySlug(slug);
  if (!service) return {};
  return {
    title: service.eyebrow,
    description: service.subtitle,
    alternates: { canonical: `https://www.dankha.co/services/${slug}` },
    openGraph: {
      title: `${service.eyebrow} — Dankha Agency`,
      description: service.subtitle,
      url: `https://www.dankha.co/services/${slug}`,
    },
  };
}

async function CategoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.dankha.co",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://www.dankha.co/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: category.eyebrow,
        item: `https://www.dankha.co/services/${slug}`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: category.eyebrow,
    description: category.subtitle,
    provider: {
      "@type": "Organization",
      name: "Dankha Agency",
      url: "https://www.dankha.co",
    },
    url: `https://www.dankha.co/services/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="px-6 pb-28 pt-10">
        <section className="mx-auto max-w-7xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-secondary">
              {category.eyebrow}
            </div>
          </Reveal>

          <Reveal delay={0.04}>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold tracking-tight md:text-6xl">
              <span className="gradient-text-bright">{category.title}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {category.subtitle}
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-7 flex flex-wrap gap-3">
              {category.heroPoints.map((point) => (
                <span
                  key={point}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-foreground/85"
                >
                  {point}
                </span>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="mx-auto mt-14 max-w-7xl">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl text-secondary">
              Our Services
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Explore our specialized services and find the perfect solution for
              your business needs.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {category.subcategories.map((subcategory, index) => (
              <ServiceCard
                key={subcategory.slug}
                subcategory={subcategory}
                href={`/services/${category.slug}/${subcategory.slug}`}
                index={index}
              />
            ))}
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-7xl">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl text-secondary">
              How We Work
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              A clear, iterative workflow keeps execution fast without
              sacrificing quality.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {category.approach.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.05}>
                <article className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden transition-colors duration-300 hover:bg-white/8 hover:border-white/20">
                  <span className="pointer-events-none absolute -right-2 -top-4 select-none font-display text-[7rem] font-bold leading-none text-white/4 transition-all duration-500 group-hover:text-white/[0.07]">
                    {index + 1}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-secondary/15 text-[10px] font-bold text-secondary ring-1 ring-secondary/30">
                      {index + 1}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-secondary/80">
                      Step {index + 1}
                    </span>
                  </div>
                  <div className="mt-4 h-px w-8 bg-linear-to-r from-secondary/60 to-transparent transition-all duration-300 group-hover:w-14" />
                  <h3 className="mt-4 font-display text-lg font-semibold leading-snug tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-16 grid max-w-7xl gap-6 lg:grid-cols-2">
          <Reveal>
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl text-secondary">
                Expected Outcomes
              </h2>
              <ul className="mt-6 space-y-4">
                {category.outcomes.map((outcome, i) => (
                  <li
                    key={outcome}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground md:text-base"
                  >
                     <span className="mt-0.5 sm:mt-1 text-xs font-bold tabular-nums text-secondary/50 shrink-0 w-5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl text-secondary">
                FAQs
              </h2>
              <Accordion
                type="single"
                collapsible
                className="mt-6 rounded-2xl border border-white/10 bg-white/5 px-5"
              >
                {category.faqs.map((faq, index) => (
                  <AccordionItem
                    key={faq.question}
                    value={`faq-${index}`}
                    className="border-white/10"
                  >
                    <AccordionTrigger className="text-base font-semibold text-foreground hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Reveal>
        </section>

        <section className="mx-auto mt-16 max-w-7xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-8 md:p-12">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl" />
              <div className="absolute -bottom-20 left-1/3 h-56 w-56 rounded-full bg-sky-300/10 blur-3xl" />

              <h2 className="relative max-w-3xl font-display text-3xl font-semibold tracking-tight md:text-5xl">
                Ready to start your {category.eyebrow.toLowerCase()} project?
              </h2>
              <p className="relative mt-4 max-w-2xl text-muted-foreground md:text-lg">
                Tell us your goals, timeline, and constraints. We will send a
                focused execution plan with clear next steps.
              </p>

              <div className="relative mt-7 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full gradient-primary px-5 py-2.5 text-sm font-semibold text-white"
                >
                  Start a project
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </>
  );
}

export default CategoryDetailPage;
