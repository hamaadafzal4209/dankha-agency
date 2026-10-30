import type { Metadata } from "next";
import { seoMetadata } from "@/sanity/seo";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { midSentence, serviceAreas } from "@/components/services/ServiceSections";
import { Eyebrow, sectionShell } from "@/components/services/ServicePage";
import { ServiceIndex } from "@/components/services/ServiceIndex";
import { AnimatedHeading } from "@/app/_components/AnimatedHeading";
import { SpringIn } from "@/components/services/SpringIn";
import { Process } from "@/components/Home/Process";
import { CTA } from "@/components/Home/CTA";
import { getServices } from "@/sanity/services";
import { cn } from "@/lib/utils";

const fallbackMetadata: Metadata = {
  title: {
    absolute: "Services: ecommerce, websites, ads and design | Dankha",
  },
  description:
    "Marketplace management on Amazon, eBay, Walmart, Etsy and TikTok Shop, custom Shopify stores, websites and apps, ads, SEO, email and brand design.",
  alternates: { canonical: "https://www.dankha.co/services" },
  openGraph: {
    title: "Services: ecommerce, websites, ads and design | Dankha",
    description:
      "Marketplace management on Amazon, eBay, Walmart, Etsy and TikTok Shop, custom Shopify stores, websites and apps, ads, SEO, email and brand design.",
    url: "https://www.dankha.co/services",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return seoMetadata("/services", fallbackMetadata);
}

/** Same as SERVICES_REVALIDATE_SECONDS; Next.js only accepts a literal number here */
export const revalidate = 60;

export default async function ServicesPage() {
  const services = await getServices();
  const serviceCount = services.reduce((total, category) => total + category.subcategories.length, 0);
  const facts = [
    { value: services.length, label: "practice areas" },
    { value: serviceCount, label: "services" },
    { value: serviceAreas.length, label: "countries served" },
  ];

  return (
    <>
      <header className={cn(sectionShell, "pb-16 pt-12 md:pt-20 lg:pb-20")}>
        <Eyebrow className="animate-spring-up motion-reduce:animate-none">Services</Eyebrow>
        <AnimatedHeading
          as="h1"
          immediate
          text="What we can take off your plate."
          delay={0.05}
          className="mt-5 max-w-5xl font-display text-5xl font-semibold leading-[1.02] text-foreground sm:text-7xl lg:text-8xl"
        />

        <div className="relative mt-14 grid gap-12 pt-10 lg:mt-20 lg:grid-cols-12 lg:gap-16">
          <span
            aria-hidden
            className="absolute inset-x-0 top-0 h-px origin-left animate-rule-draw bg-border [animation-delay:0.2s] motion-reduce:animate-none"
          />
          <div className="animate-spring-up [animation-delay:0.3s] motion-reduce:animate-none lg:col-span-6">
            <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {areaCountWords[services.length] ?? services.length} areas, each with a team that does the work day to
              day. Pick one, or hand us the whole project.
            </p>
            <nav aria-label="Service areas" className="mt-8 flex flex-wrap gap-2">
              {services.map((category) => (
                <a
                  key={category.slug}
                  href={`#${category.slug}`}
                  className="rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-primary hover:text-link"
                >
                  {category.eyebrow}
                </a>
              ))}
            </nav>
          </div>

          <dl className="grid animate-spring-up grid-cols-3 gap-6 [animation-delay:0.4s] motion-reduce:animate-none lg:col-span-5 lg:col-start-8">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="sr-only">{fact.label}</dt>
                <dd className="font-display text-4xl font-semibold tabular-nums text-foreground sm:text-5xl">
                  {fact.value}
                </dd>
                <dd aria-hidden className="mt-2 text-sm text-muted-foreground">
                  {fact.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      {services.map((category, index) => (
        <section
          key={category.slug}
          id={category.slug}
          aria-labelledby={`category-${category.slug}`}
          className={cn(sectionShell, "scroll-mt-24 py-14 lg:py-20")}
        >
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SpringIn className="lg:sticky lg:top-32">
                <p className="font-display text-sm tabular-nums text-muted-foreground">
                  <span className="text-link">{String(index + 1).padStart(2, "0")}</span> /{" "}
                  {String(services.length).padStart(2, "0")}
                </p>
                <AnimatedHeading
                  text={category.eyebrow}
                  id={`category-${category.slug}`}
                  className="mt-4 font-display text-3xl font-semibold text-foreground sm:text-5xl"
                />
                <p className="mt-5 max-w-sm text-lg text-muted-foreground">{category.description}</p>
                <Link
                  href={`/services/${category.slug}`}
                  className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-link"
                >
                  Everything in {midSentence(category.eyebrow)}
                  <ArrowRight
                    size={16}
                    aria-hidden
                    className="transition-[translate] duration-700 ease-spring group-hover:translate-x-1.5 motion-reduce:transition-none"
                  />
                </Link>
              </SpringIn>
            </div>

            <div className="lg:col-span-8">
              <ServiceIndex
                size="md"
                label={`${category.eyebrow} services`}
                items={category.subcategories.map((subcategory) => ({
                  href: `/services/${category.slug}/${subcategory.slug}`,
                  title: subcategory.title,
                  description: subcategory.description,
                }))}
              />
            </div>
          </div>
        </section>
      ))}

      <div className="mt-6 lg:mt-10">
        <Process />
      </div>

      <div className="mt-14 lg:mt-18">
        <CTA />
      </div>
    </>
  );
}

/** Sentence-opening counts read better as words */
const areaCountWords: Record<number, string> = { 2: "Two", 3: "Three", 4: "Four", 5: "Five", 6: "Six" };
