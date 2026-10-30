"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useId, useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { springIn, springSnappy } from "./springs";

export type ServiceIndexItem = {
  href: string;
  title: string;
  description: string;
  /** A few things the service covers, shown as a quiet line under the description */
  covers?: string[];
};

/**
 * Numbered list of services as full-width rows. A soft highlight springs from row to row under the pointer
 * (or keyboard focus), and each row's arrow turns to point at its page.
 */
export function ServiceIndex({
  items,
  label,
  size = "lg",
}: {
  items: ServiceIndexItem[];
  label: string;
  size?: "md" | "lg";
}) {
  const [active, setActive] = useState<number | null>(null);
  const highlightId = useId();
  const prefersReducedMotion = useReducedMotion();

  return (
    <ul aria-label={label} onMouseLeave={() => setActive(null)} className="border-t border-border">
      {items.map((item, index) => (
        <motion.li
          key={item.href}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ ...springIn, delay: Math.min(index, 6) * 0.05, opacity: { duration: 0.4 } }}
          className="relative isolate border-b border-border"
        >
          {active === index && (
            <motion.span
              aria-hidden
              layoutId={highlightId}
              transition={prefersReducedMotion ? { duration: 0 } : springSnappy}
              className="absolute inset-x-0 inset-y-1.5 -z-10 rounded-xl bg-surface-2/70"
            />
          )}
          <Link
            href={item.href}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            onBlur={() => setActive(null)}
            className={cn(
              "group grid grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-x-4 px-2 focus-visible:outline-none sm:gap-x-8 sm:px-5",
              size === "lg" ? "py-7 sm:py-9" : "py-6 sm:py-7",
            )}
          >
            <span
              className={cn(
                "font-display text-sm tabular-nums text-muted-foreground transition-colors group-hover:text-link",
                size === "lg" ? "pt-2 sm:pt-3" : "pt-1.5",
              )}
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="min-w-0">
              <span
                className={cn(
                  "block font-display font-semibold text-foreground transition-colors duration-300 group-hover:text-link",
                  size === "lg" ? "text-2xl sm:text-4xl" : "text-xl sm:text-2xl",
                )}
              >
                {item.title}
              </span>
              <span className={cn("mt-2 block max-w-xl text-muted-foreground", size === "lg" && "sm:mt-3 sm:text-lg")}>
                {item.description}
              </span>
              {item.covers && item.covers.length > 0 && (
                <span className="mt-4 hidden flex-wrap gap-x-2 text-sm text-muted-foreground/80 sm:flex">
                  {item.covers.map((cover, coverIndex) => (
                    <span key={cover} className="flex items-center gap-2">
                      {coverIndex > 0 && <span aria-hidden className="h-1 w-1 rounded-full bg-border" />}
                      {cover}
                    </span>
                  ))}
                </span>
              )}
            </span>

            <span
              aria-hidden
              className={cn(
                "flex shrink-0 -rotate-45 items-center justify-center rounded-full border border-border text-muted-foreground",
                "transition-[rotate,background-color,border-color,color] duration-700 ease-spring",
                "group-hover:rotate-0 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground",
                "group-focus-visible:rotate-0 group-focus-visible:border-primary group-focus-visible:bg-primary group-focus-visible:text-primary-foreground",
                "motion-reduce:transition-none",
                size === "lg" ? "mt-1 h-11 w-11 sm:h-12 sm:w-12" : "h-10 w-10",
              )}
            >
              <ArrowRight size={18} />
            </span>
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}
