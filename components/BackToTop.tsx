"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";

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
    <div className="fixed bottom-4 right-4 z-40 sm:bottom-6 sm:right-6 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isVisible && (
          <>
            <WhatsAppFloatingButton phoneNumber="923361409344" />

            <motion.button
              type="button"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={scrollToTop}
              className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:text-link"
              aria-label="Back to top"
            >

              <svg
                className="absolute inset-0"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <circle
                  cx="24"
                  cy="24"
                  r="22"
                  className="fill-none stroke-transparent"
                  strokeWidth="2"
                />
                <motion.circle
                  cx="24"
                  cy="24"
                  r="22"
                  className="fill-none stroke-primary"
                  strokeWidth="2"
                  strokeLinecap="round"
                  pathLength={ringProgress}
                  transform="rotate(-90 24 24)"
                />
              </svg>

              <span className="relative transition-transform duration-200 group-hover:-translate-y-0.5">
                <ArrowUp size={18} />
              </span>
            </motion.button>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}