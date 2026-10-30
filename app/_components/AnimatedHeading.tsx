"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Fragment } from "react";

const wordSpring = { type: "spring", stiffness: 210, damping: 24, mass: 0.9 } as const;
const stagger = 0.045;

const wordVariants: Variants = {
  hidden: { y: "110%" },
  show: (delay: number) => ({ y: 0, transition: { ...wordSpring, delay } }),
};

/**
 * The words of a heading, each rising out of its own clipped box one after another. With `immediate` the rise runs on a
 * CSS spring at first paint; otherwise each word waits for an ancestor motion element to switch to its "show" variant.
 */
export function AnimatedWords({
  text,
  immediate = false,
  delay = 0,
}: {
  text: string;
  immediate?: boolean;
  delay?: number;
}) {
  const words = text.split(" ");

  return (
    <>
      {words.map((word, index) => {
        const wordDelay = delay + Math.min(index, 12) * stagger;
        return (
          <Fragment key={index}>
            <span className="-mb-[0.12em] inline-block overflow-hidden pb-[0.12em] align-bottom">
              {immediate ? (
                <span
                  className="inline-block animate-word-rise motion-reduce:animate-none"
                  style={{ animationDelay: `${wordDelay}s` }}
                >
                  {word}
                </span>
              ) : (
                <motion.span custom={wordDelay} variants={wordVariants} className="inline-block">
                  {word}
                </motion.span>
              )}
            </span>
            {index < words.length - 1 && " "}
          </Fragment>
        );
      })}
    </>
  );
}

/**
 * Heading whose words spring up into place in turn. Use `immediate` for a page's main heading so it animates on first
 * paint without waiting for JavaScript; other headings animate the first time they scroll into view.
 */
export function AnimatedHeading({
  text,
  as = "h2",
  id,
  immediate = false,
  delay = 0,
  className,
}: {
  text: string;
  as?: "h1" | "h2" | "h3";
  id?: string;
  immediate?: boolean;
  delay?: number;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  const Heading = as;

  if (immediate) {
    return (
      <Heading id={id} aria-label={text} className={className}>
        <span aria-hidden>
          <AnimatedWords text={text} immediate delay={delay} />
        </span>
      </Heading>
    );
  }

  if (prefersReducedMotion) {
    return (
      <Heading id={id} className={className}>
        {text}
      </Heading>
    );
  }

  const MotionHeading = as === "h1" ? motion.h1 : as === "h3" ? motion.h3 : motion.h2;

  return (
    <MotionHeading
      id={id}
      aria-label={text}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className={className}
    >
      <span aria-hidden>
        <AnimatedWords text={text} delay={delay} />
      </span>
    </MotionHeading>
  );
}
