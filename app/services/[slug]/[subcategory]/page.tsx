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
import { SERVICE_ICON_MAP } from "@/data/service-icons";
import { SERVICES, getSubcategoryBySlugs } from "@/data/services";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

export function generateStaticParams() {
  return SERVICES.flatMap((category) =>
    category.subcategories.map((subcategory) => ({
      slug: category.slug,
      subcategory: subcategory.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; subcategory: string }>;
}): Promise<Metadata> {
  const { slug: category, subcategory } = await params;
  const subcategoryData = getSubcategoryBySlugs(category, subcategory);
  if (!subcategoryData) return {};
  return {
    title: subcategoryData.title,
    description: subcategoryData.description,
    alternates: {
      canonical: `https://www.dankha.co/services/${category}/${subcategory}`,
    },
    openGraph: {
      title: `${subcategoryData.title} — Dankha Agency`,
      description: subcategoryData.description,
      url: `https://www.dankha.co/services/${category}/${subcategory}`,
    },
  };
}

async function SubcategoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string; subcategory: string }>;
}) {
  const { slug: category, subcategory } = await params;
  const subcategoryData = getSubcategoryBySlugs(category, subcategory);
  const categoryData = SERVICES.find((c) => c.slug === category);

  if (!subcategoryData || !categoryData) {
    notFound();
  }

  const Icon = SERVICE_ICON_MAP[subcategoryData.icon];

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
        name: categoryData.eyebrow,
        item: `https://www.dankha.co/services/${category}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: subcategoryData.title,
        item: `https://www.dankha.co/services/${category}/${subcategory}`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: subcategoryData.title,
    description: subcategoryData.description,
    provider: {
      "@type": "Organization",
      name: "Dankha Agency",
      url: "https://www.dankha.co",
    },
    url: `https://www.dankha.co/services/${category}/${subcategory}`,
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
              <Link
                href={`/services/${category}`}
                className="hover:text-foreground transition-colors"
              >
                {categoryData.eyebrow}
              </Link>
              <span className="text-white/30">
                <ArrowBigRight size={16} />
              </span>
              {subcategoryData.title}
            </div>
          </Reveal>

          <Reveal delay={0.04}>
            <div className="mt-5 flex items-center gap-4">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/25 bg-cyan-400/12 text-cyan-300">
                <Icon size={32} />
              </div>
              <h1 className="max-w-4xl font-display text-4xl font-bold tracking-tight md:text-5xl">
                <span className="gradient-text-bright">
                  {subcategoryData.title}
                </span>
              </h1>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {subcategoryData.description}
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-7 flex flex-wrap gap-3">
              {subcategoryData.keyBenefits.map((benefit) => (
                <span
                  key={benefit}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-foreground/85"
                >
                  {benefit}
                </span>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="mx-auto mt-16 max-w-7xl">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl text-secondary text-secondary">
              Overview
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-5 max-w-4xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {subcategoryData.overview}
            </p>
          </Reveal>
        </section>

        <section className="mx-auto mt-16 max-w-7xl">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl text-secondary">
              Included Services
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Everything you get with this service, all in one place.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {subcategoryData.services.map((serviceItem, index) => (
              <Reveal key={serviceItem.title} delay={index * 0.04}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 glass p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20">
                  <div className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-400/12 text-cyan-300">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <h3 className="relative mt-4 font-display text-lg font-semibold">
                    {serviceItem.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground flex-1">
                    {serviceItem.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-7xl">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl text-secondary">
              Our Process
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              A clear, step-by-step approach to deliver results.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {subcategoryData.process.map((step, index) => (
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
                {subcategoryData.outcomes.map((outcome, i) => (
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
                {subcategoryData.faqs.map((faq, index) => (
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
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl text-secondary">
              Related Services
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Explore other services from {categoryData.eyebrow} that might
              interest you.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categoryData.subcategories
              .filter((sc) => sc.slug !== subcategory)
              .map((subcategoryItem, index) => (
                <ServiceCard
                  key={subcategoryItem.slug}
                  subcategory={subcategoryItem}
                  href={`/services/${category}/${subcategoryItem.slug}`}
                  index={index}
                />
              ))}
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-7xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-8 md:p-12">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl" />
              <div className="absolute -bottom-20 left-1/3 h-56 w-56 rounded-full bg-sky-300/10 blur-3xl" />

              <h2 className="relative max-w-3xl font-display text-3xl font-semibold tracking-tight md:text-5xl">
                Ready to get started with {subcategoryData.title.toLowerCase()}?
              </h2>
              <p className="relative mt-4 max-w-2xl text-muted-foreground md:text-lg">
                Let's discuss your goals and create a plan to achieve them.
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

export default SubcategoryDetailPage;
