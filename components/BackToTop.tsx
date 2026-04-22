"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const ringProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.2,
  });

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 320);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isVisible && (
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 20, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.85 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onClick={scrollToTop}
            className="group relative h-14 w-14 rounded-full gradient-primary text-white shadow-elegant flex items-center justify-center"
            aria-label="Back to top"
          >
            <span className="absolute inset-0 rounded-full gradient-primary blur-xl opacity-60 animate-glow-pulse" />

            <svg
              className="absolute inset-0"
              viewBox="0 0 56 56"
              aria-hidden="true"
            >
              <circle
                cx="28"
                cy="28"
                r="24"
                className="fill-none stroke-white/20"
                strokeWidth="3"
              />
              <motion.circle
                cx="28"
                cy="28"
                r="24"
                className="fill-none stroke-white"
                strokeWidth="3"
                strokeLinecap="round"
                pathLength={ringProgress}
                transform="rotate(-90 28 28)"
              />
            </svg>

            <span className="relative transition-transform duration-200 group-hover:-translate-y-0.5">
              <ArrowUp size={22} />
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}