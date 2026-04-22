"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowUpRight, X } from "lucide-react";

type Cat = "All" | "Web" | "Ecommerce" | "Marketing";

const projects = [
  { id: 1, title: "Lumen Commerce", cat: "Ecommerce", year: "2024", color: "from-[#39587b] to-[#3fa1ad]", desc: "Headless Shopify rebuild that lifted conversion 187% in 90 days." },
  { id: 2, title: "NovaBank SaaS", cat: "Web", year: "2024", color: "from-[#3fa1ad] to-[#2a4263]", desc: "B2B financial platform serving 12,000+ teams worldwide." },
  { id: 3, title: "Atlas Travel", cat: "Marketing", year: "2023", color: "from-[#2a4263] to-[#3fa1ad]", desc: "Full funnel growth engine: SEO, paid and content." },
  { id: 4, title: "Verde Living", cat: "Ecommerce", year: "2024", color: "from-[#3fa1ad] to-[#39587b]", desc: "Sustainable furniture brand storefront and brand system." },
  { id: 5, title: "Pulse Health", cat: "Web", year: "2023", color: "from-[#39587b] to-[#5fb3bf]", desc: "HIPAA-compliant patient platform with native mobile app." },
  { id: 6, title: "Halo Cosmetics", cat: "Marketing", year: "2024", color: "from-[#4a6f95] to-[#3fa1ad]", desc: "Launch campaign that hit $1M in first quarter." },
] as const;

const cats: Cat[] = ["All", "Web", "Ecommerce", "Marketing"];

function PortfolioPage() {
  const [filter, setFilter] = useState<Cat>("All");
  const [active, setActive] = useState<typeof projects[number] | null>(null);

  const filtered = projects.filter((p) => filter === "All" || p.cat === filter);

  return (
    <div className="px-6 pb-32">
      <section className="mx-auto max-w-5xl pt-10 text-center">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected work from the studio."
          description="A snapshot of the products, brands and growth engines we've shipped."
        />
      </section>

      <div className="mx-auto max-w-7xl mt-14">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition ${
                filter === c ? "text-white" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {filter === c && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full gradient-primary -z-10"
                />
              )}
              {c}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.button
                key={p.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onClick={() => setActive(p)}
                className="group relative aspect-[4/5] rounded-3xl overflow-hidden glass-strong text-left"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-80 transition group-hover:opacity-100`} />
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center transition duration-500 group-hover:scale-110">
                  <div className="font-display text-7xl font-black text-white/10">
                    {String(p.id).padStart(2, "0")}
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-white/70">
                    <span>{p.cat}</span>
                    <span className="h-1 w-1 rounded-full bg-white/40" />
                    <span>{p.year}</span>
                  </div>
                  <h3 className="mt-1 font-display text-2xl font-bold text-white">{p.title}</h3>
                </div>
                <div className="absolute top-4 right-4 h-10 w-10 rounded-full glass-strong flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <ArrowUpRight size={16} className="text-white" />
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ y: 30, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 30, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl rounded-3xl glass-strong overflow-hidden shadow-elegant"
            >
              <div className={`relative h-56 bg-gradient-to-br ${active.color}`}>
                <div className="absolute inset-0 grid-bg opacity-30" />
                <button
                  onClick={() => setActive(null)}
                  className="absolute top-4 right-4 h-10 w-10 rounded-full glass-strong flex items-center justify-center text-white"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-secondary">
                  <span>{active.cat}</span>
                  <span className="h-1 w-1 rounded-full bg-secondary/60" />
                  <span>{active.year}</span>
                </div>
                <h3 className="mt-2 font-display text-3xl font-bold">{active.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{active.desc}</p>
                <button className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white gradient-primary">
                  View case study <ArrowUpRight size={14} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Reveal>
        <div className="h-px" />
      </Reveal>
    </div>
  );
}

export default PortfolioPage;
