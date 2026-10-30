import { cache } from "react";
import { defineQuery } from "next-sanity";
import { SERVICES, type ServiceCategory, type ServiceSubcategory } from "@/data/services";
import { SERVICE_ICON_MAP, type ServiceIconName } from "@/data/service-icons";
import { client } from "./client";
import { isSanityConfigured } from "./env";

/** How often (in seconds) service pages check Sanity for edited services */
export const SERVICES_REVALIDATE_SECONDS = 60;

type Titled = { title: string; description: string };
type Faq = { question: string; answer: string };

type SanityService = {
  slug: string;
  title: string;
  description: string;
  icon?: string;
  overview?: string;
  services?: Titled[];
  process?: Titled[];
  outcomes?: string[];
  keyBenefits?: string[];
  faqs?: Faq[];
};

type SanityCategory = {
  slug: string;
  name: string;
  headline?: string;
  subtitle?: string;
  description?: string;
  heroPoints?: string[];
  approach?: Titled[];
  outcomes?: string[];
  faqs?: Faq[];
  subcategories?: SanityService[];
};

const servicesQuery = defineQuery(`*[_type == "serviceCategory" && defined(slug.current)]
  | order(coalesce(order, 999) asc, _createdAt asc) {
  "slug": slug.current, name, headline, subtitle, description, heroPoints, outcomes,
  approach[]{ title, description },
  faqs[]{ question, answer },
  "subcategories": *[_type == "service" && category._ref == ^._id && defined(slug.current)]
    | order(coalesce(order, 999) asc, _createdAt asc) {
    "slug": slug.current, title, description, icon, overview, outcomes, keyBenefits,
    services[]{ title, description },
    process[]{ title, description },
    faqs[]{ question, answer }
  }
}`);

const iconOf = (icon: string | undefined): ServiceIconName =>
  icon && icon in SERVICE_ICON_MAP ? (icon as ServiceIconName) : "globe";

function toSubcategory(service: SanityService): ServiceSubcategory {
  return {
    slug: service.slug,
    title: service.title,
    description: service.description ?? "",
    icon: iconOf(service.icon),
    overview: service.overview ?? service.description ?? "",
    services: service.services ?? [],
    process: service.process ?? [],
    outcomes: service.outcomes ?? [],
    keyBenefits: service.keyBenefits ?? [],
    faqs: service.faqs ?? [],
  };
}

function toCategory(category: SanityCategory): ServiceCategory {
  return {
    slug: category.slug,
    eyebrow: category.name,
    title: category.headline ?? category.name,
    subtitle: category.subtitle ?? category.description ?? "",
    description: category.description ?? category.subtitle ?? "",
    heroPoints: category.heroPoints ?? [],
    approach: category.approach ?? [],
    outcomes: category.outcomes ?? [],
    faqs: category.faqs ?? [],
    subcategories: (category.subcategories ?? []).map(toSubcategory),
  };
}

/** Service categories with their sub-services from Sanity, or the built-in ones in data/services.ts until Sanity has any */
export const getServices = cache(async (): Promise<ServiceCategory[]> => {
  if (!isSanityConfigured) {
    return SERVICES;
  }
  try {
    const categories = await client.fetch<SanityCategory[]>(
      servicesQuery,
      {},
      { next: { revalidate: SERVICES_REVALIDATE_SECONDS } },
    );
    return categories.length > 0 ? categories.map(toCategory) : SERVICES;
  } catch (error) {
    console.error("Could not load services from Sanity, using built-in services instead", error);
    return SERVICES;
  }
});

export async function getServiceCategory(slug: string): Promise<ServiceCategory | undefined> {
  return (await getServices()).find((category) => category.slug === slug);
}

export async function getServiceSubcategory(
  categorySlug: string,
  subcategorySlug: string,
): Promise<{ category: ServiceCategory; subcategory: ServiceSubcategory } | undefined> {
  const category = await getServiceCategory(categorySlug);
  const subcategory = category?.subcategories.find((item) => item.slug === subcategorySlug);
  return category && subcategory ? { category, subcategory } : undefined;
}
