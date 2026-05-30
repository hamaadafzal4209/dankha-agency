import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const timeline = [
  {
    year: "2020",
    title: "The beginning of Dankha",
    desc: "Started as a small freelance collaboration focused on eCommerce setup, website development, and digital marketing for early-stage businesses.",
  },
  {
    year: "2021",
    title: "First structured client systems",
    desc: "Transitioned from freelance work to structured agency services, building repeatable systems for Amazon, Shopify, and web development projects.",
  },
  {
    year: "2022",
    title: "Expanding service capabilities",
    desc: "Scaled into full-service digital solutions including performance marketing, automation systems, and brand development for growing businesses.",
  },
  {
    year: "2023",
    title: "Strategic growth phase",
    desc: "Partnered with multiple brands across eCommerce and SaaS, focusing on long-term growth strategies and data-driven marketing systems.",
  },
  {
    year: "2024",
    title: "Technology & scaling focus",
    desc: "Strengthened in-house development capabilities, building scalable web platforms, automation workflows, and performance-focused digital products.",
  },
  {
    year: "2025",
    title: "Established growth partner",
    desc: "Evolved into a full-scale digital growth agency helping brands expand globally through technology, eCommerce, and marketing systems.",
  },
];

export function TimelineSection() {
  return (
    <section className="mx-auto mt-32 max-w-4xl">
      <SectionHeading eyebrow="Our journey" title="Six years, one obsession." />
      <div className="relative mt-16">
        <div className="absolute bottom-0 left-4 top-0 w-px bg-linear-to-b from-transparent via-secondary/40 to-transparent md:left-1/2" />
        <div className="space-y-12">
          {timeline.map((item, i) => (
            <Reveal key={item.year} delay={i * 0.1}>
              <div
                className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                  i % 2 === 0 ? "" : "md:[direction:rtl]"
                }`}
              >
                <div
                  className={`pl-12 md:pl-0 ${
                    i % 2 === 0
                      ? "md:pr-12 md:text-right"
                      : "md:pl-12 md:text-left [direction:ltr]"
                  }`}
                >
                  <div className="inline-block rounded-2xl glass-strong p-6 text-left">
                    <time dateTime={item.year} className="font-mono text-xs tracking-wider text-secondary">
                      {item.year}
                    </time>
                    <h3 className="mt-2 font-display text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
                <div className="hidden md:block" />
                <div className="absolute left-4 top-6 -translate-x-1/2 md:left-1/2">
                  <div className="relative h-4 w-4">
                    <div className="absolute inset-0 rounded-full gradient-primary blur-md animate-glow-pulse" />
                    <div className="relative h-4 w-4 rounded-full border-2 border-background gradient-primary" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
