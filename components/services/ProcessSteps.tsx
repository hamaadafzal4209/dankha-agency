"use client";

import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  type MotionValue,
} from "framer-motion";
import { useEffect, useRef, useState, type RefObject } from "react";
import { cn } from "@/lib/utils";
import { springIn, springSnappy } from "./springs";

type Step = { title: string; description: string };

/**
 * Steps down a rail whose teal line fills on a spring as the reader scrolls through them. Each step's marker
 * fills in as the line reaches it.
 */
export function ProcessSteps({ steps }: { steps: Step[] }) {
  const listRef = useRef<HTMLOListElement>(null);
  const prefersReducedMotion = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 70%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 26, mass: 0.6 });

  return (
    <ol ref={listRef} className="relative">
      <span aria-hidden className="absolute bottom-0 left-[1.375rem] top-0 w-px bg-border sm:left-7" />
      <motion.span
        aria-hidden
        style={{ scaleY: prefersReducedMotion ? 1 : progress }}
        className="absolute bottom-0 left-[1.375rem] top-0 w-px origin-top bg-primary sm:left-7"
      />

      {steps.map((step, index) => (
        <li
          key={step.title}
          className="relative grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-6 pb-14 last:pb-0 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:gap-x-10 sm:pb-20 lg:grid-cols-[3.5rem_minmax(0,22rem)_minmax(0,1fr)] lg:gap-x-14"
        >
          <StepMarker index={index} progress={progress} listRef={listRef} always={prefersReducedMotion} />
          <motion.h3
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ ...springIn, opacity: { duration: 0.4 } }}
            className="pt-2 font-display text-xl font-semibold text-foreground sm:pt-3 sm:text-2xl"
          >
            {step.title}
          </motion.h3>
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ ...springIn, delay: 0.06, opacity: { duration: 0.4, delay: 0.06 } }}
            className="col-start-2 mt-3 max-w-2xl leading-relaxed text-muted-foreground lg:col-start-3 lg:mt-0 lg:pt-3"
          >
            {step.description}
          </motion.p>
        </li>
      ))}
    </ol>
  );
}

/** Numbered circle on the rail that fills with teal once the scroll line passes its centre */
function StepMarker({
  index,
  progress,
  listRef,
  always,
}: {
  index: number;
  progress: MotionValue<number>;
  listRef: RefObject<HTMLOListElement | null>;
  always: boolean;
}) {
  const markerRef = useRef<HTMLSpanElement>(null);
  const [threshold, setThreshold] = useState(index === 0 ? 0 : 1);
  const [reached, setReached] = useState(false);

  useEffect(() => {
    const measure = () => {
      const list = listRef.current?.getBoundingClientRect();
      const marker = markerRef.current?.getBoundingClientRect();
      if (list && marker && list.height > 0) {
        setThreshold((marker.top + marker.height / 2 - list.top) / list.height);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [listRef]);

  useMotionValueEvent(progress, "change", (value) => setReached(value >= threshold - 0.005));

  const lit = always || reached;

  return (
    <span
      ref={markerRef}
      className="relative z-10 flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-background ring-1 ring-border sm:h-14 sm:w-14"
    >
      <motion.span
        aria-hidden
        initial={false}
        animate={{ scale: lit ? 1 : 0 }}
        transition={always ? { duration: 0 } : springSnappy}
        className="absolute inset-0 rounded-full bg-primary"
      />
      <span
        className={cn(
          "relative font-display text-sm font-semibold tabular-nums transition-colors duration-300",
          lit ? "text-primary-foreground" : "text-muted-foreground",
        )}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
    </span>
  );
}
