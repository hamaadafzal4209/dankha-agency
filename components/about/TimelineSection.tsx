import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const timeline = [
  {
    year: "2019",
    title: "Founded in a garage",
    desc: "Three friends, one laptop, big ambitions.",
  },
  {
    year: "2020",
    title: "First million in revenue",
    desc: "Shipped 18 products across 4 industries.",
  },
  {
    year: "2022",
    title: "Global team",
    desc: "Opened studios in Lisbon, Singapore and Toronto.",
  },
  {
    year: "2024",
    title: "AI practice launched",
    desc: "Helping clients ship intelligent products responsibly.",
  },
  {
    year: "2025",
    title: "120+ projects shipped",
    desc: "And we're just getting started.",
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
                    <div className="font-mono text-xs tracking-wider text-secondary">
                      {item.year}
                    </div>
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
