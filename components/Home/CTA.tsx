import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function CTA() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl glass-strong p-10 md:p-16 text-center">
            <div className="absolute inset-0 gradient-primary opacity-20" />
            <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full gradient-primary blur-3xl opacity-40" />
            <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-secondary blur-3xl opacity-30" />
            <div className="relative">
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-balance">
                Have an ambitious idea? <br />
                <span className="gradient-text-bright">Let's build it together.</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                Tell us about your project. We'll respond within one business day.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white gradient-primary shadow-elegant hover:scale-105 transition"
              >
                Start a project <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
