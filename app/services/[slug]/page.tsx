import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { seoMetadata } from "@/sanity/seo";
import { faqPageSchema, midSentence, serviceAreas } from "@/components/services/ServiceSections";
import {
  OutcomesBand,
  PanelLinks,
  RelatedNav,
  ServiceHero,
  ServiceSection,
} from "@/components/services/ServicePage";
import { ServiceIndex } from "@/components/services/ServiceIndex";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { ProcessSteps } from "@/components/services/ProcessSteps";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { CTA } from "@/components/Home/CTA";
import { getServiceCategory, getServices } from "@/sanity/services";
import { OrganizationId } from "@/data/commonConstants";
import { projectsForService } from "@/data/portfolio-projects";

/** Same as SERVICES_REVALIDATE_SECONDS; Next.js only accepts a literal number here */
export const revalidate = 60;

export async function generateStaticParams() {
  return (await getServices()).map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceCategory(slug);
  if (!service) return {};
  const description = categorySearchDescriptions[service.slug] ?? service.subtitle;
  return seoMetadata(`/services/${slug}`, {
    title: categorySearchTitles[service.slug] ?? service.eyebrow,
    description,
    alternates: { canonical: `https://www.dankha.co/services/${slug}` },
    openGraph: {
      title: `${service.eyebrow} — Dankha Agency`,
      description,
      url: `https://www.dankha.co/services/${slug}`,
    },
  });
}

async function CategoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [category, allCategories] = await Promise.all([getServiceCategory(slug), getServices()]);

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
    serviceType: category.eyebrow,
    areaServed: serviceAreas.map((name) => ({ "@type": "Country", name })),
    provider: {
      "@type": "ProfessionalService",
      "@id": OrganizationId,
      name: "Dankha",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(category.faqs)) }}
      />
      <ServiceHero
        breadcrumbs={<Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: category.eyebrow }]} />}
        eyebrow={category.eyebrow}
        title={category.title}
        intro={category.subtitle}
        panelTitle={`${category.subcategories.length} services in ${midSentence(category.eyebrow)}`}
        panel={
          <PanelLinks
            links={category.subcategories.map((subcategory) => ({
              href: `/services/${category.slug}/${subcategory.slug}`,
              label: subcategory.title,
            }))}
          />
        }
      />

      <ServiceSection
        label="Services"
        title="What we do in this area"
        intro="Pick one service, or combine several. The same team handles each of them day to day."
        stacked
      >
        <ServiceIndex
          label={`${category.eyebrow} services`}
          items={category.subcategories.map((subcategory) => ({
            href: `/services/${category.slug}/${subcategory.slug}`,
            title: subcategory.title,
            description: subcategory.description,
            covers: subcategory.services.slice(0, 4).map((item) => item.title),
          }))}
        />
      </ServiceSection>

      {category.approach.length > 0 && (
        <ServiceSection label="Process" title="How we work" stacked>
          <ProcessSteps steps={category.approach} />
        </ServiceSection>
      )}

      {category.outcomes.length > 0 && (
        <OutcomesBand
          title="What you can expect"
          intro="What clients usually see once the work is live."
          items={category.outcomes}
        />
      )}

      {category.faqs.length > 0 && (
        <ServiceSection label="FAQ" title="Questions">
          <ServiceFaq faqs={category.faqs} />
        </ServiceSection>
      )}

      <RelatedNav
        groups={[
          {
            title: "Case studies",
            links: projectsForService(`/services/${slug}`).map((project) => ({
              href: `/portfolio/${project.slug}`,
              label: project.title,
            })),
          },
          {
            title: "Other services",
            links: allCategories
              .filter((c) => c.slug !== category.slug)
              .map((c) => ({ href: `/services/${c.slug}`, label: c.eyebrow })),
          },
        ]}
      />

      <CTA title={`Want help with ${midSentence(category.eyebrow)}?`} />
    </>
  );
}

export default CategoryDetailPage;

/** Fuller, keyword-led titles for search results; the page itself keeps the short name */
const categorySearchTitles: Record<string, string> = {
  it: "Website and app development",
  ecommerce: "Ecommerce and marketplace management",
  marketing: "Ads, SEO and email marketing",
  designing: "Brand identity and UI/UX design",
};

/** Fuller search snippets for categories whose page subtitle is too short to fill Google's ~155 characters */
const categorySearchDescriptions: Record<string, string> = {
  ecommerce:
    "Shopify builds, plus listings, ads and account management on Amazon, eBay, Walmart, Etsy and TikTok Shop. One team handles setup, listings, ads and reporting.",
  marketing:
    "We run Meta, Google and TikTok ads, fix technical SEO, write content and set up Klaviyo email flows, all managed against your target cost per sale.",
};
