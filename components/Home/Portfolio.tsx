import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "./data";

export function Portfolio() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Selected work" title="A few projects we're proud of." />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <Link
                href="/portfolio"
                className="group relative block aspect-4/5 rounded-3xl overflow-hidden glass-strong"
              >
                <div className={`absolute inset-0 bg-linear-to-br ${p.color} opacity-80`} />
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute inset-0 transition duration-500 group-hover:scale-110 flex items-center justify-center">
                  <div className="font-display text-7xl font-black text-white/10">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 bg-linear-to-t from-black/60 to-transparent">
                  <div className="text-xs uppercase tracking-wider text-white/70">{p.tag}</div>
                  <h3 className="mt-1 font-display text-2xl font-bold text-white">{p.title}</h3>
                </div>
                <div className="absolute top-4 right-4 h-10 w-10 rounded-full glass-strong flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <ArrowRight size={16} className="text-white" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
