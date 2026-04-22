import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Check, Sparkles } from "lucide-react";

const tiers = [
  {
    name: "Basic",
    price: "$2,400",
    desc: "For startups validating an idea quickly.",
    features: [
      "Landing page or single-product site",
      "Up to 5 pages",
      "Mobile-first responsive design",
      "Basic SEO setup",
      "1 round of revisions",
    ],
    popular: false,
  },
  {
    name: "Standard",
    price: "$6,900",
    desc: "For growing teams ready to scale.",
    features: [
      "Custom web app or full ecommerce store",
      "Up to 20 pages / unlimited products",
      "CMS or admin dashboard",
      "Performance & SEO optimization",
      "Analytics & A/B testing setup",
      "3 rounds of revisions",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "Custom",
    desc: "For ambitious products that need everything.",
    features: [
      "Bespoke architecture & infrastructure",
      "AI / SaaS / multi-tenant features",
      "Native mobile apps",
      "Dedicated growth squad",
      "Ongoing optimization retainer",
      "Unlimited revisions",
    ],
    popular: false,
  },
];

function PricingPage() {
  return (
    <div className="px-6 pb-32">
      <section className="mx-auto max-w-5xl pt-10 text-center">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple plans. Senior team."
          description="No bloated agency overhead. Pick a starting point and we'll tailor the scope to your goals."
        />
      </section>

      <section className="mx-auto max-w-7xl mt-20 grid gap-8 lg:grid-cols-3">
        {tiers.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.1}>
            <div
              className={`group relative h-full rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                t.popular
                  ? "glass-strong border-secondary/40 shadow-elegant lg:scale-105"
                  : "glass-strong"
              }`}
            >
              {t.popular && (
                <>
                  <div className="absolute inset-0 rounded-3xl gradient-primary opacity-10 -z-10" />
                  <div className="absolute -inset-px rounded-3xl gradient-primary opacity-30 blur-2xl -z-10 animate-glow-pulse" />
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="inline-flex items-center gap-1.5 rounded-full gradient-primary px-3 py-1 text-xs font-semibold text-white shadow-elegant">
                      <Sparkles size={12} /> Most popular
                    </div>
                  </div>
                </>
              )}

              <div className="font-display text-sm uppercase tracking-wider text-secondary">
                {t.name}
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-display text-5xl font-bold gradient-text-bright">{t.price}</span>
                {t.price !== "Custom" && <span className="text-sm text-muted-foreground">/ project</span>}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{t.desc}</p>

              <ul className="mt-8 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className={`mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full ${t.popular ? "gradient-primary text-white" : "bg-white/10 text-secondary"}`}>
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`mt-10 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${
                  t.popular
                    ? "gradient-primary text-white hover:scale-[1.02]"
                    : "glass hover:bg-white/10"
                }`}
              >
                Get started
              </Link>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto max-w-4xl mt-32 text-center">
        <Reveal>
          <div className="rounded-3xl glass-strong p-10">
            <h3 className="font-display text-2xl md:text-3xl font-bold">Not sure which plan fits?</h3>
            <p className="mt-3 text-muted-foreground">
              Book a free 30-minute discovery call. We'll scope the right approach together.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white gradient-primary"
            >
              Book a call →
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

export default PricingPage;
