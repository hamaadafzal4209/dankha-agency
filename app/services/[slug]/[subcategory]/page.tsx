import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { clampDescription, seoMetadata } from "@/sanity/seo";
import { faqPageSchema, midSentence, serviceAreas } from "@/components/services/ServiceSections";
import {
  IncludedList,
  OutcomesBand,
  PanelPoints,
  RelatedNav,
  ServiceHero,
  ServiceSection,
} from "@/components/services/ServicePage";
import { ProcessSteps } from "@/components/services/ProcessSteps";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { ScrollText } from "@/app/_components/ScrollText";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { CTA } from "@/components/Home/CTA";
import { getServiceSubcategory, getServices } from "@/sanity/services";
import { OrganizationId } from "@/data/commonConstants";
import { projectsForService } from "@/data/portfolio-projects";

/** Same as SERVICES_REVALIDATE_SECONDS; Next.js only accepts a literal number here */
export const revalidate = 60;

export async function generateStaticParams() {
  return (await getServices()).flatMap((category) =>
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
  const found = await getServiceSubcategory(category, subcategory);
  if (!found) return {};
  const subcategoryData = found.subcategory;
  const categoryName = found.category.eyebrow;
  const description = subcategorySearchDescriptions[subcategory] ?? metaDescriptionFor(subcategoryData);
  return seoMetadata(`/services/${category}/${subcategory}`, {
    title:
      subcategorySearchTitles[subcategory] ??
      (categoryName ? `${subcategoryData.title} | ${categoryName}` : subcategoryData.title),
    description,
    alternates: {
      canonical: `https://www.dankha.co/services/${category}/${subcategory}`,
    },
    openGraph: {
      title: `${subcategoryData.title} — Dankha Agency`,
      description,
      url: `https://www.dankha.co/services/${category}/${subcategory}`,
    },
  });
}

async function SubcategoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string; subcategory: string }>;
}) {
  const { slug: category, subcategory } = await params;
  const found = await getServiceSubcategory(category, subcategory);

  if (!found) {
    notFound();
  }

  const { category: categoryData, subcategory: subcategoryData } = found;

  const otherServices = categoryData.subcategories
    .filter((sc) => sc.slug !== subcategory)
    .map((sc) => ({ href: `/services/${category}/${sc.slug}`, label: sc.title }));

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
    serviceType: subcategoryData.title,
    areaServed: serviceAreas.map((name) => ({ "@type": "Country", name })),
    provider: {
      "@type": "ProfessionalService",
      "@id": OrganizationId,
      name: "Dankha",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(subcategoryData.faqs)) }}
      />
      <ServiceHero
        breadcrumbs={
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: categoryData.eyebrow, href: `/services/${category}` },
              { label: subcategoryData.title },
            ]}
          />
        }
        eyebrow={categoryData.eyebrow}
        title={subcategoryData.title}
        intro={subcategoryData.description}
        panelTitle="Why clients choose it"
        panel={<PanelPoints items={subcategoryData.keyBenefits} />}
      />

      <ServiceSection label="Overview" title={`About ${ctaServiceName(subcategoryData.title)}`}>
        <ScrollText
          text={subcategoryData.overview}
          className="max-w-3xl font-display text-2xl font-medium leading-snug text-foreground sm:text-3xl sm:leading-snug"
        />
      </ServiceSection>

      {subcategoryData.services.length > 0 && (
        <ServiceSection label="Scope" title="What's included">
          <IncludedList items={subcategoryData.services} />
        </ServiceSection>
      )}

      {subcategoryData.process.length > 0 && (
        <ServiceSection label="Process" title="How it works" stacked>
          <ProcessSteps steps={subcategoryData.process} />
        </ServiceSection>
      )}

      {subcategoryData.outcomes.length > 0 && (
        <OutcomesBand
          title="What you can expect"
          intro="What clients usually see once the work is live."
          items={subcategoryData.outcomes}
        />
      )}

      {subcategoryData.faqs.length > 0 && (
        <ServiceSection label="FAQ" title="Questions">
          <ServiceFaq faqs={subcategoryData.faqs} />
        </ServiceSection>
      )}

      <RelatedNav
        groups={[
          {
            title: "Case studies",
            links: projectsForService(`/services/${category}/${subcategory}`).map((project) => ({
              href: `/portfolio/${project.slug}`,
              label: project.title,
            })),
          },
          { title: `More in ${midSentence(categoryData.eyebrow)}`, links: otherServices },
        ]}
      />

      <CTA title={`Want help with ${ctaServiceName(subcategoryData.title)}?`} />
    </>
  );
}

/** "Amazon services" -> "Amazon", "Website development" -> "website development" */
function ctaServiceName(title: string): string {
  const name = title.replace(/ services$/i, "");
  const startsWithBrand = /^(Amazon|Walmart|Etsy|Shopify|TikTok|Google|Facebook|Instagram|eBay)\b/.test(name);
  const startsWithAcronym = /^[A-Z]{2}/.test(name);
  return startsWithBrand || startsWithAcronym ? name : name.charAt(0).toLowerCase() + name.slice(1);
}

export default SubcategoryDetailPage;

/** Short card descriptions make thin search snippets, so those pages use the opening of their overview instead */
function metaDescriptionFor(subcategory: { description: string; overview: string }): string {
  return subcategory.description.length >= 110 ? subcategory.description : clampDescription(subcategory.overview);
}

/** Keyword-led titles for search results (each fits Google's 60 characters with " | Dankha"); the page keeps its short name */
const subcategorySearchTitles: Record<string, string> = {
  "website-development": "Business website development in Next.js",
  "software-solutions": "Custom software, dashboards and CRM development",
  "ui-ux-design": "UI/UX design for websites and mobile apps",
  "amazon-services": "Amazon seller services: listings, PPC, A+ Content",
  "ebay-services": "eBay store management and Promoted Listings",
  "walmart-marketplace": "Walmart Marketplace management and WFS onboarding",
  "tiktok-shop": "TikTok Shop setup, affiliates and Spark Ads",
  "etsy-services": "Etsy shop management, listing SEO and Etsy Ads",
  "shopify-services": "Shopify development, themes and migrations",
  "search-engine-optimization": "SEO services: technical, on-page and local SEO",
  "pay-per-click-advertising": "PPC management for Google, Meta and TikTok ads",
  "content-marketing": "Content marketing: blog posts, guides, landing pages",
  "email-marketing": "Klaviyo email marketing: flows and campaigns",
  "brand-identity": "Brand identity design: logos and brand guidelines",
  "product-ui-ux": "Product UI/UX design for apps and dashboards",
  "creative-design": "Ad creative and social media graphic design",
};

/** Search snippets for pages where neither the card text nor the overview's opening fills Google's ~155 characters */
const subcategorySearchDescriptions: Record<string, string> = {
  "website-development":
    "Business, corporate and landing-page websites built in Next.js to load fast, rank in Google and turn visitors into enquiries.",
};
