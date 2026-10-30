"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, useSyncExternalStore } from "react";

const WORD_INTERVAL_MS = 2200;

/** The last word of the hero headline, cycling through what we build */
export function RotatingWord({ words }: { words: readonly string[] }) {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), WORD_INTERVAL_MS);
    return () => clearInterval(id);
  }, [prefersReducedMotion, words.length]);

  return (
    <span className="relative inline-flex overflow-hidden pb-[0.12em] align-bottom">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[index]}
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block text-link"
        >
          {words[index]}.
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const formatLahoreTime = () =>
  new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Karachi", hour: "2-digit", minute: "2-digit" }).format(
    new Date(),
  );

const subscribeToClock = (onChange: () => void) => {
  const id = setInterval(onChange, 15000);
  return () => clearInterval(id);
};

/** Current time at the Lahore office. Not rendered on the server, so there's no hydration mismatch. */
export function LahoreTime() {
  const time = useSyncExternalStore(subscribeToClock, formatLahoreTime, () => null);

  return (
    <p className="flex items-center gap-2 text-sm text-muted-foreground">
      <span aria-hidden className="h-2 w-2 rounded-full bg-primary" />
      Lahore, Pakistan
      {time && (
        <>
          <span aria-hidden>·</span>
          <time className="tabular-nums text-foreground">{time} PKT</time>
        </>
      )}
    </p>
  );
}
