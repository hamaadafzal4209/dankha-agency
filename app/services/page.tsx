import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import {
  Code2,
  Smartphone,
  Cloud,
  Brain,
  ShoppingBag,
  CreditCard,
  Package,
  Megaphone,
  Search,
  Share2,
  BarChart3,
  Globe,
} from "lucide-react";

const groups = [
  {
    eyebrow: "01 / IT & Engineering",
    title: "Software that works, scales, and lasts.",
    items: [
      { icon: Code2, title: "Web Applications", desc: "Modern, fast, accessible apps built on React, Next and TanStack." },
      { icon: Smartphone, title: "Mobile", desc: "Native and cross-platform apps for iOS and Android." },
      { icon: Cloud, title: "SaaS Platforms", desc: "Multi-tenant architecture, billing, auth and infrastructure." },
      { icon: Brain, title: "AI Tools", desc: "LLM integrations, agents and intelligent automation." },
    ],
  },
  {
    eyebrow: "02 / Ecommerce",
    title: "Storefronts that convert.",
    items: [
      { icon: ShoppingBag, title: "Shopify", desc: "Custom themes and apps for high-volume Shopify stores." },
      { icon: Package, title: "WooCommerce", desc: "WordPress + Woo builds with bespoke extensions." },
      { icon: CreditCard, title: "Custom Stores", desc: "Headless commerce with Medusa, Saleor or Stripe." },
      { icon: Globe, title: "Internationalization", desc: "Multi-region, multi-currency, multi-language." },
    ],
  },
  {
    eyebrow: "03 / Digital Marketing",
    title: "Growth that compounds.",
    items: [
      { icon: Search, title: "SEO", desc: "Technical, content and link strategies that move the needle." },
      { icon: BarChart3, title: "Paid Ads", desc: "Google, Meta and TikTok ads run by senior strategists." },
      { icon: Share2, title: "Social Media", desc: "Brand strategy, content production and community." },
      { icon: Megaphone, title: "Brand & Content", desc: "Positioning, narrative and creative production." },
    ],
  },
];

function ServicesPage() {
  return (
    <div className="px-6 pb-32">
      <section className="mx-auto max-w-5xl pt-10 text-center">
        <SectionHeading
          eyebrow="Services"
          title="One team. Three disciplines. Endless leverage."
          description="Whether you need a product built, a store optimised, or a growth engine wired up — we've done it before, and we'll do it well."
        />
      </section>

      {groups.map((g, gi) => (
        <section key={g.eyebrow} className="mx-auto max-w-7xl mt-32">
          <Reveal>
            <div className="text-xs font-mono tracking-wider uppercase text-secondary">{g.eyebrow}</div>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-tight text-balance max-w-2xl">
              <span className="gradient-text-bright">{g.title}</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {g.items.map((it, i) => (
              <Reveal key={it.title} delay={(gi * 4 + i) * 0.04}>
                <div className="group relative h-full rounded-3xl glass-strong p-6 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-secondary/40">
                  <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 gradient-primary blur-2xl -z-10" />
                  <div className="relative h-12 w-12 rounded-xl gradient-primary flex items-center justify-center text-white shadow-elegant">
                    <it.icon size={20} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">{it.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ServicesPage;
