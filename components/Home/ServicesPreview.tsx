import Link from "next/link";
import { ArrowRight, Code2, Megaphone, ShoppingBag } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const services = [
  {
    icon: Code2,
    title: "IT & Engineering",
    desc: "Web, mobile, SaaS and AI-powered platforms built on a solid foundation.",
  },
  {
    icon: ShoppingBag,
    title: "Ecommerce",
    desc: "Shopify, WooCommerce and bespoke storefronts that convert and scale.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "SEO, paid media and content strategy to grow your reach with precision.",
  },
];

export function ServicesPreview() {
  return (
    <section className="px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What we do"
          title="Three disciplines, one obsession with quality."
          description="We blend engineering, commerce and growth into a single seamless practice."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="group relative h-full rounded-3xl glass-strong p-8 transition-all duration-500 hover:-translate-y-2 hover:border-secondary/40">
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 gradient-primary -z-10 blur-2xl" />
                <div className="relative h-14 w-14 rounded-2xl gradient-primary flex items-center justify-center text-white shadow-elegant">
                  <s.icon size={22} />
                  <div className="absolute inset-0 rounded-2xl gradient-primary blur-xl opacity-60 -z-10 group-hover:opacity-100 transition" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <Link
                  href="/services"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-secondary hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
