import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Sparkles } from "./data";
import { FloatingHeroVisual } from "./FloatingHeroVisual";

export function Hero() {
  return (
    <section className="relative pt-10 pb-32 px-6">
      <div className="mx-auto max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium tracking-wider uppercase text-secondary"
        >
          <Sparkles size={12} />
          Premium digital agency
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance leading-[1.05]"
        >
          We build <span className="gradient-text-bright">digital experiences</span>
          <br />
          that scale.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed text-balance"
        >
          Engineering, ecommerce and marketing - under one roof. We design, build and
          grow products with the rigor of a studio and the speed of a startup.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white gradient-primary overflow-hidden shadow-elegant"
          >
            <span className="relative z-10">Get started</span>
            <ArrowRight size={16} className="relative z-10 transition-transform group-hover:translate-x-1" />
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition gradient-glow blur-xl" />
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold glass hover:bg-white/10 transition"
          >
            View our work
          </Link>
        </motion.div>

        <FloatingHeroVisual />
      </div>
    </section>
  );
}
