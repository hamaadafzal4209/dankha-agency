import Link from "next/link";
import { ArrowRight, Megaphone, MonitorSmartphone, PenTool, ShoppingBag, Store } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCardGrid, type ServiceCardItem } from "./ServiceCardGrid";

const services: ServiceCardItem[] = [
  {
    title: "Websites and apps",
    description:
      "Business websites, dashboards and mobile apps, designed around how your team and customers actually work.",
    href: "/services/it",
    icon: MonitorSmartphone,
    tags: ["Next.js", "React Native", "Vue", "Dashboards"],
    covers: ["Business websites", "Admin dashboards and portals", "iOS and Android apps", "Custom internal software"],
  },
  {
    title: "Shopify stores",
    description: "Custom builds and migrations, set up with tracking, email flows and subscriptions.",
    href: "/services/ecommerce/shopify-services",
    icon: ShoppingBag,
    tags: ["Themes", "Migrations", "Klaviyo"],
  },
  {
    title: "Marketplace management",
    description: "Listings, ads and account health across every major marketplace.",
    href: "/services/ecommerce",
    icon: Store,
    tags: ["Amazon", "eBay", "Walmart", "Etsy", "TikTok Shop"],
  },
  {
    title: "Ads, SEO and email",
    description: "Paid campaigns, technical SEO and email flows that keep customers coming back.",
    href: "/services/marketing",
    icon: Megaphone,
    tags: ["Meta", "Google", "TikTok", "SEO"],
  },
  {
    title: "Brand and design",
    description: "Logos, brand guidelines and interface design for stores and apps.",
    href: "/services/designing",
    icon: PenTool,
    tags: ["Identity", "UI/UX", "Creative"],
  },
];

export function ServicesList() {
  return (
    <section aria-labelledby="services-heading" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          id="services-heading"
          eyebrow="What we do"
          title="Five things, done properly."
          description="Most clients start with one project, a website, an app or a store, then hand us the ads and design once it's live."
        />
        <Reveal className="shrink-0">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-link hover:underline"
          >
            All services <ArrowRight size={14} />
          </Link>
        </Reveal>
      </div>

      <div className="mt-10 lg:mt-14">
        <ServiceCardGrid label="Our services" items={services} />
      </div>
    </section>
  );
}
