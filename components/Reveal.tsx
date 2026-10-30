"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  delay = 0,
  y = 16,
  x = 0,
  immediate = false,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  /**
   * For content at the top of the page: slides in with CSS as soon as it is painted instead of waiting for JavaScript,
   * and never starts transparent, because Chrome doesn't count invisible text towards Largest Contentful Paint.
   */
  immediate?: boolean;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (immediate) {
    return (
      <div
        className={cn(
          "animate-in slide-in-from-bottom-4 fill-mode-both duration-500 motion-reduce:animate-none",
          className,
        )}
        style={delay ? { animationDelay: `${delay}s` } : undefined}
      >
        {children}
      </div>
    );
  }

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants: Variants = {
    hidden: { opacity: 0, x, y },
    show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
