import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Quote } from "./data";
import { testimonials } from "./data";

export function Testimonials() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Kind words" title="Trusted by ambitious teams." />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="group h-full rounded-3xl glass-strong p-8 transition hover:-translate-y-1">
                <Quote className="text-secondary" size={28} />
                <p className="mt-4 text-sm md:text-base text-foreground/90 leading-relaxed">"{t.quote}"</p>
                <div className="mt-6 pt-6 border-t border-glass-border">
                  <div className="font-display font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
