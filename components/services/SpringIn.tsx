"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { springIn } from "./springs";

/** Springs its content up into place the first time it scrolls into view */
export function SpringIn({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ ...springIn, delay, opacity: { duration: 0.45, delay } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
