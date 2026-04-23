import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Code2, 
  ShoppingBag, 
  Megaphone, 
  Sparkles, 
  Palette, 
  BarChart3, 
  Shield, 
  Zap 
} from "lucide-react";

export function FloatingHeroVisual() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const badges = [
    { icon: Code2, label: "Web Apps", color: "from-blue-500 to-cyan-400" },
    { icon: ShoppingBag, label: "E‑commerce", color: "from-purple-500 to-pink-400" },
    { icon: Megaphone, label: "Marketing", color: "from-orange-500 to-amber-400" },
    { icon: Sparkles, label: "AI Tools", color: "from-emerald-500 to-teal-400" },
    { icon: Palette, label: "Design", color: "from-rose-500 to-red-400" },
    { icon: BarChart3, label: "Analytics", color: "from-indigo-500 to-violet-400" },
    { icon: Shield, label: "Security", color: "from-slate-500 to-gray-400" },
    { icon: Zap, label: "Performance", color: "from-yellow-500 to-orange-400" },
  ];

  return (
    <div ref={containerRef} className="relative mt-8 sm:mt-12 md:mt-16 mx-auto max-w-5xl px-4 sm:px-6">
      <div className="hidden lg:block relative h-130">
        {/* Central Logo Orb */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ 
            duration: 0.8, 
            delay: 0.2,
            type: "spring",
            stiffness: 200,
            damping: 15 
          }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        >
          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-linear-to-r from-primary/30 via-secondary/20 to-primary/30 blur-3xl animate-pulse-slow opacity-70" />
            
            <div className="relative h-64 w-64 rounded-full glass-strong border border-white/20 flex items-center justify-center overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-linear-to-br from-primary/30 via-transparent to-secondary/30 animate-linear-shift" />
              
              <motion.div 
                className="absolute inset-2 rounded-full border border-primary/20"
                animate={isInView ? { rotate: 360 } : {}}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute inset-6 rounded-full border border-secondary/20"
                animate={isInView ? { rotate: -360 } : {}}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute inset-10 rounded-full border border-white/10"
                animate={isInView ? { rotate: 360 } : {}}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
              
              <span className="relative font-display text-7xl font-black gradient-text-bright">
                D
              </span>
            </div>
          </div>
        </motion.div>

        {/* Orbital Badges - Desktop Only */}
        {[
          { ...badges[0], x: "3%", y: "12%", delay: 0.1 },
          { ...badges[1], x: "83%", y: "15%", delay: 0.15 },
          { ...badges[2], x: "5%", y: "78%", delay: 0.2 },
          { ...badges[3], x: "82%", y: "75%", delay: 0.25 },
          { ...badges[4], x: "42%", y: "5%", delay: 0.3 },
          { ...badges[5], x: "90%", y: "45%", delay: 0.35 },
          { ...badges[6], x: "2%", y: "42%", delay: 0.4 },
          { ...badges[7], x: "45%", y: "88%", delay: 0.45 },
        ].map((badge, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0, rotate: -10 }}
            animate={isInView ? { 
              opacity: 1, 
              scale: 1, 
              rotate: 0,
            } : {}}
            transition={{ 
              duration: 0.5, 
              delay: badge.delay,
              type: "spring",
              stiffness: 200,
              damping: 12
            }}
            whileHover={{ scale: 1.08, rotate: 2 }}
            style={{ left: badge.x, top: badge.y }}
            className="absolute z-20"
          >
            <motion.div
              animate={isInView ? { 
                y: [0, -12, 0],
              } : {}}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
            >
              <div className="glass-strong rounded-2xl px-5 py-3 flex items-center gap-3 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`h-9 w-9 rounded-xl bg-linear-to-br ${badge.color} flex items-center justify-center text-white shadow-md`}>
                  <badge.icon size={16} strokeWidth={2.5} />
                </div>
                <span className="font-display text-sm font-semibold whitespace-nowrap text-white/90 tracking-wide">
                  {badge.label}
                </span>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}