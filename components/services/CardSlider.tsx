"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const dotSpring = { type: "spring", stiffness: 500, damping: 40 } as const;

/**
 * Swipeable, snapping row of cards on phones; from the `sm` breakpoint up the same cards sit in the grid
 * described by `gridClassName`. Dots under the row, between previous and next arrows, show and change the current card.
 */
export function CardSlider({
  items,
  label,
  gridClassName,
  itemClassNames = [],
}: {
  items: ReactNode[];
  label: string;
  gridClassName: string;
  itemClassNames?: (string | undefined)[];
}) {
  const listRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const dotId = useId();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const list = listRef.current;
    if (!list) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(Number((entry.target as HTMLElement).dataset.index));
          }
        }
      },
      { root: list, threshold: 0.6 },
    );
    list.querySelectorAll<HTMLElement>("[data-index]").forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [items.length]);

  const goTo = (index: number) => {
    const item = listRef.current?.querySelector<HTMLElement>(`[data-index="${index}"]`);
    item?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "nearest", inline: "start" });
  };

  return (
    <div>
      <ul
        ref={listRef}
        aria-label={label}
        className={cn(
          "-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-4 px-4 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          "sm:mx-0 sm:overflow-visible sm:px-0 sm:pb-0",
          gridClassName,
        )}
      >
        {items.map((item, index) => (
          <li
            key={index}
            data-index={index}
            className={cn("w-[85%] shrink-0 snap-start sm:w-auto", itemClassNames[index])}
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-center gap-3 sm:hidden">
        <SliderArrow direction="previous" disabled={active === 0} onClick={() => goTo(active - 1)} />
        <div className="flex items-center gap-1">
          {items.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Show card ${index + 1} of ${items.length}`}
              aria-current={index === active ? "true" : undefined}
              className="relative flex h-6 min-w-6 items-center justify-center px-1"
            >
              <span
                className={cn(
                  "block h-1.5 rounded-full bg-border transition-[width] duration-300 ease-out",
                  index === active ? "w-6" : "w-1.5",
                )}
              />
              {index === active && (
                <motion.span
                  layoutId={dotId}
                  aria-hidden
                  transition={prefersReducedMotion ? { duration: 0 } : dotSpring}
                  className="absolute inset-x-1 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-primary"
                />
              )}
            </button>
          ))}
        </div>
        <SliderArrow direction="next" disabled={active === items.length - 1} onClick={() => goTo(active + 1)} />
      </div>
    </div>
  );
}

function SliderArrow({
  direction,
  disabled,
  onClick,
}: {
  direction: "previous" | "next";
  disabled: boolean;
  onClick: () => void;
}) {
  const Icon = direction === "previous" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "previous" ? "Previous card" : "Next card"}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-[opacity,border-color,color] duration-300 hover:border-primary hover:text-link disabled:pointer-events-none disabled:opacity-30"
    >
      <Icon size={18} aria-hidden />
    </button>
  );
}
