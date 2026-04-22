import { motion } from "framer-motion";
import { Code2, ShoppingBag, Megaphone, Sparkles } from "lucide-react";

export function FloatingHeroVisual() {
  return (
    <div className="relative mt-24 mx-auto h-[340px] md:h-[420px] max-w-5xl">
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full blur-3xl gradient-primary opacity-50 animate-glow-pulse" />
          <div className="relative h-56 w-56 md:h-72 md:w-72 rounded-full glass-strong border border-glass-border flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 gradient-primary opacity-30" />
            <div className="absolute inset-4 rounded-full border border-secondary/30 animate-spin-slow" />
            <div className="absolute inset-10 rounded-full border border-primary-glow/30" />
            <span className="relative font-display text-6xl md:text-7xl font-black gradient-text-bright">
              D
            </span>
          </div>
        </div>
      </motion.div>

      {[
        { icon: Code2, label: "Web Apps", x: "8%", y: "10%", delay: 0.7 },
        { icon: ShoppingBag, label: "Ecommerce", x: "78%", y: "15%", delay: 0.85 },
        { icon: Megaphone, label: "Marketing", x: "10%", y: "70%", delay: 1.0 },
        { icon: Sparkles, label: "AI Tools", x: "75%", y: "68%", delay: 1.15 },
      ].map((c, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: c.delay }}
          style={{ left: c.x, top: c.y }}
          className="absolute"
        >
          <div className="animate-float" style={{ animationDelay: `-${i}s` }}>
            <div className="glass-strong rounded-2xl px-4 py-3 flex items-center gap-2.5 shadow-elegant">
              <div className="h-9 w-9 rounded-lg gradient-primary flex items-center justify-center text-white">
                <c.icon size={16} />
              </div>
              <span className="font-display text-sm font-semibold whitespace-nowrap">{c.label}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
