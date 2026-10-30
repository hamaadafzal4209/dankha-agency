"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

type ScrollOffset = NonNullable<Parameters<typeof useScroll>[0]>["offset"];

/** Words start this bright, so the whole paragraph stays readable before it lights up */
const dimOpacity = 0.22;

/**
 * Paragraph whose words brighten in reading order as it scrolls through the viewport. `offset` sets where in the
 * viewport the brightening starts and finishes; text near the top of a page should finish early so it isn't left dim.
 */
export function ScrollText({
  text,
  offset = ["start 85%", "end 45%"],
  className,
}: {
  text: string;
  offset?: ScrollOffset;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset });
  const progress = useSpring(scrollYProgress, { stiffness: 160, damping: 30 });
  const words = text.split(" ");

  if (prefersReducedMotion) {
    return (
      <p ref={ref} className={className}>
        {text}
      </p>
    );
  }

  return (
    <p ref={ref} className={className}>
      {words.map((word, index) => (
        <Word key={index} progress={progress} range={[index / words.length, (index + 1) / words.length]}>
          {word}
        </Word>
      ))}
    </p>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [dimOpacity, 1]);
  return (
    <>
      <motion.span style={{ opacity }}>{children}</motion.span>{" "}
    </>
  );
}
