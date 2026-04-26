import { Reveal } from "@/components/Reveal";
import { Sparkles } from "lucide-react";

export function AboutQuote() {
  return (
    <section className="mx-auto mt-32 max-w-3xl text-center">
      <Reveal>
        <Sparkles className="mx-auto text-secondary" size={28} />
        <blockquote className="mt-6 text-balance font-display text-2xl font-medium leading-relaxed md:text-3xl">
          &ldquo;We don&rsquo;t chase trends. We build things that age well.&rdquo;
          <footer className="mt-4 text-sm text-muted-foreground">
            <cite>— The DANKHA team</cite>
          </footer>
        </blockquote>
      </Reveal>
    </section>
  );
}
