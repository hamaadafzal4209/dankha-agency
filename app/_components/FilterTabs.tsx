"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useId } from "react";
import { cn } from "@/lib/utils";

/** Quick spring with no visible overshoot, so the underline settles cleanly under the new tab */
const underlineSpring = { type: "spring", stiffness: 520, damping: 42, mass: 0.9 } as const;

/** A row of filter buttons with an underline that slides to the selected one */
export function FilterTabs<T extends string>({
  options,
  value,
  onChange,
  label,
  countFor,
  className,
}: {
  options: readonly T[];
  value: T;
  onChange: (value: T) => void;
  label: string;
  countFor?: (option: T) => number;
  className?: string;
}) {
  const underlineId = useId();
  const prefersReducedMotion = useReducedMotion();

  return (
    <div role="group" aria-label={label} className={cn("flex flex-wrap gap-x-1 gap-y-2 border-b border-border", className)}>
      {options.map((option) => {
        const isActive = option === value;
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            aria-pressed={isActive}
            className={cn(
              "group relative rounded-md px-3 pb-3.5 pt-2 text-sm first:pl-0 font-medium transition-colors duration-200",
              isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {option}
            {countFor && (
              <span
                className={cn(
                  "ml-1.5 tabular-nums transition-colors duration-200",
                  isActive ? "text-link" : "text-muted-foreground/70",
                )}
              >
                {countFor(option)}
              </span>
            )}
            {isActive && (
              <motion.span
                layoutId={underlineId}
                aria-hidden
                transition={prefersReducedMotion ? { duration: 0 } : underlineSpring}
                className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-primary group-first:left-0"
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
