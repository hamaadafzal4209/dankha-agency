import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { ServicesPreview } from "@/components/Home/ServicesPreview";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our comprehensive services including IT Solutions, Ecommerce, Marketing, and Designing.",
};

export default function ServicesPage() {
  return (
    <div className="px-6 pb-28 pt-24">
      <section className="mx-auto max-w-7xl">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-secondary">
            Our Services
          </div>
        </Reveal>
        <Reveal delay={0.04}>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold tracking-tight md:text-6xl">
            Comprehensive{" "}
            <span className="gradient-text-bright">Solutions</span> for Your
            Business
          </h1>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            From IT solutions to ecommerce, marketing, and design — we offer
            end-to-end services to help your business grow and succeed online.
          </p>
        </Reveal>

        <div className="mt-16">
          <ServicesPreview />
        </div>
      </section>
    </div>
  );
}
