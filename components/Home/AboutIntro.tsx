import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function AboutIntro() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 rounded-3xl gradient-primary opacity-30 blur-3xl" />
            <div className="relative h-full w-full rounded-3xl glass-strong overflow-hidden p-8 grid grid-cols-2 gap-4">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="rounded-2xl gradient-primary opacity-80 animate-float"
                  style={{ animationDelay: `-${i}s`, opacity: 0.4 + i * 0.15 }}
                />
              ))}
            </div>
          </div>
        </Reveal>
        <div>
          <SectionHeading
            eyebrow="About DANKHA"
            title="A studio built for the next decade of the internet."
            description="We are a small senior team obsessed with craft. We work shoulder-to-shoulder with founders and product leaders to ship work that performs in the real world."
            align="left"
          />
          <Reveal delay={0.3}>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold glass hover:bg-white/10 transition"
            >
              Our story <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
