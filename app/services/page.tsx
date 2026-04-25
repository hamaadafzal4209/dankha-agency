import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import {
  BarChart3,
  Brain,
  Code2,
  Compass,
  CreditCard,
  Globe,
  Layout,
  Megaphone,
  Package,
  Paintbrush,
  PenTool,
  Search,
  Share2,
  ShoppingBag,
  Smartphone,
  SwatchBook,
} from "lucide-react";

type ServiceItem = {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  desc: string;
};

type ServiceGroup = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: ServiceItem[];
  subServices: string[];
};

const groups: ServiceGroup[] = [
  {
    id: "it",
    eyebrow: "01 / IT & Engineering",
    title: "Software that works, scales, and lasts.",
    description:
      "From product strategy to production delivery, we build reliable systems that support real business growth.",
    items: [
      { icon: Code2, title: "Web Applications", desc: "Modern, fast, accessible apps built on React, Next and TanStack." },
      { icon: Smartphone, title: "Mobile", desc: "Native and cross-platform apps for iOS and Android." },
      { icon: Layout, title: "SaaS Platforms", desc: "Multi-tenant architecture, billing, auth and infrastructure." },
      { icon: Brain, title: "AI Tools", desc: "LLM integrations, agents and intelligent automation." },
    ],
    subServices: [
      "Product discovery and technical consulting",
      "API architecture and backend systems",
      "Cloud deployment and CI/CD pipelines",
      "Performance optimization and scaling",
      "Security hardening and access control",
      "Maintenance, monitoring, and support",
    ],
  },
  {
    id: "ecommerce",
    eyebrow: "02 / Ecommerce",
    title: "Storefronts that convert.",
    description:
      "We design and engineer ecommerce experiences that reduce friction, improve trust, and increase conversion.",
    items: [
      { icon: ShoppingBag, title: "Shopify", desc: "Custom themes and apps for high-volume Shopify stores." },
      { icon: Package, title: "WooCommerce", desc: "WordPress + Woo builds with bespoke extensions." },
      { icon: CreditCard, title: "Custom Stores", desc: "Headless commerce with Medusa, Saleor or Stripe." },
      { icon: Globe, title: "Internationalization", desc: "Multi-region, multi-currency, multi-language." },
    ],
    subServices: [
      "Store setup, migration, and replatforming",
      "Product catalog and inventory structure",
      "Checkout and payment optimization",
      "Subscription and recurring billing flows",
      "CRM, ERP, and shipping integrations",
      "Conversion rate optimization and analytics",
    ],
  },
  {
    id: "marketing",
    eyebrow: "03 / Digital Marketing",
    title: "Growth that compounds.",
    description:
      "Our marketing work combines strategy, creativity, and performance data to drive measurable growth.",
    items: [
      { icon: Search, title: "SEO", desc: "Technical, content and link strategies that move the needle." },
      { icon: BarChart3, title: "Paid Ads", desc: "Google, Meta and TikTok ads run by senior strategists." },
      { icon: Share2, title: "Social Media", desc: "Brand strategy, content production and community." },
      { icon: Megaphone, title: "Brand & Content", desc: "Positioning, narrative and creative production." },
    ],
    subServices: [
      "Brand positioning and messaging framework",
      "SEO audits and content strategy",
      "Paid media planning and campaign execution",
      "Funnel tracking and attribution setup",
      "Lifecycle email and retention campaigns",
      "Weekly reporting and optimization cycles",
    ],
  },
  {
    id: "design",
    eyebrow: "04 / Designing",
    title: "Design systems that make brands unforgettable.",
    description:
      "From identity to interfaces, we create visuals and experiences that feel intentional, cohesive, and premium.",
    items: [
      { icon: Paintbrush, title: "Brand Identity", desc: "Logos, typography, color systems and visual language." },
      { icon: PenTool, title: "UI/UX Design", desc: "User-centered interface design for web and mobile products." },
      { icon: SwatchBook, title: "Design Systems", desc: "Scalable component libraries with clear visual rules." },
      { icon: Compass, title: "Creative Direction", desc: "Art direction that keeps every touchpoint on-brand." },
    ],
    subServices: [
      "Logo and full visual identity design",
      "Website and product interface design",
      "Wireframes, prototypes, and usability testing",
      "Design systems and component documentation",
      "Marketing creatives and social assets",
      "Ongoing design support and iteration",
    ],
  },
];

function ServicesPage() {
  return (
    <div className="px-6 pb-32">
      <section className="mx-auto max-w-5xl pt-10 text-center">
        <SectionHeading
          eyebrow="Services"
          title="One team. Four disciplines. Endless leverage."
          description="Whether you need a product built, a store optimised, or a growth engine wired up — we've done it before, and we'll do it well."
        />
      </section>

      {groups.map((g, gi) => (
        <section id={g.id} key={g.eyebrow} className="mx-auto mt-32 max-w-7xl scroll-mt-32">
          <Reveal>
            <div className="text-xs font-mono tracking-wider uppercase text-secondary">{g.eyebrow}</div>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-tight text-balance max-w-2xl">
              <span className="gradient-text-bright">{g.title}</span>
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {g.description}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-[2.2fr_1fr]">
            <div className="grid gap-6 sm:grid-cols-2">
              {g.items.map((it, i) => (
                <Reveal key={it.title} delay={(gi * 4 + i) * 0.04}>
                  <div className="group relative h-full overflow-hidden rounded-3xl glass-strong p-6 transition-all duration-500 hover:-translate-y-2 hover:border-secondary/40">
                    <div className="absolute -inset-px -z-10 rounded-3xl opacity-0 blur-2xl transition duration-500 gradient-primary group-hover:opacity-100" />
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-xl gradient-primary text-white shadow-elegant">
                      <it.icon size={20} />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-semibold">{it.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.08}>
              <aside className="rounded-3xl glass-strong p-6 lg:sticky lg:top-24">
                <h3 className="font-display text-xl font-semibold">Sub-services</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Popular tasks we deliver inside this service area.
                </p>
                <ul className="mt-5 space-y-3">
                  {g.subServices.map((sub) => (
                    <li key={sub} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                      <span>{sub}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            </Reveal>
          </div>
        </section>
      ))}
    </div>
  );
}

export default ServicesPage;
