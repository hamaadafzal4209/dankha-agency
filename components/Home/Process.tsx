"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/app/_components/ButtonLink";
import { AnimatedHeading } from "@/app/_components/AnimatedHeading";

const steps = [
  {
    title: "Call",
    description: "Tell us what you're building or selling, and what isn't working.",
    deliverable: "A straight answer on whether we can help",
  },
  {
    title: "Audit and plan",
    description: "We review your site, app, store or ads and write down what's holding it back.",
    deliverable: "A written plan with priorities and a quote",
  },
  {
    title: "Build or fix",
    description: "We design and build the site or app, set up the store, or rebuild the campaigns. You review each milestone.",
    deliverable: "Your site, app, store or campaigns live",
  },
  {
    title: "Run and report",
    description: "We keep improving the product, ads and listings after launch.",
    deliverable: "Reports on traffic, sales and ad spend",
  },
];

export function Process() {
  const listRef = useRef<HTMLOListElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 70%", "end 60%"] });

  return (
    <section aria-labelledby="process-heading">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-18">
        <div className="lg:col-span-4">
          <Reveal className="lg:sticky lg:top-32">
            <p className="text-sm font-medium text-link">How we work</p>
            <AnimatedHeading text="From first call to launch." id="process-heading" className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl" />
            <p className="mt-5 text-lg text-muted-foreground">
              The same four steps for a new website, a mobile app or an Amazon account that&apos;s stopped growing.
            </p>
            <ButtonLink href="/contact" className="mt-8">
              Start with a call <ArrowRight size={16} />
            </ButtonLink>
          </Reveal>
        </div>

        <ol ref={listRef} className="relative lg:col-span-8">
          <span aria-hidden className="absolute bottom-0 left-0 top-0 w-px bg-border" />
          <motion.span
            aria-hidden
            style={{ scaleY: prefersReducedMotion ? 1 : scrollYProgress }}
            className="absolute bottom-0 left-0 top-0 w-px origin-top bg-primary"
          />

          {steps.map((step, index) => (
            <li key={step.title} className="pl-8 sm:pl-12">
              <Reveal delay={0.05} className="grid gap-4 py-10 sm:grid-cols-[6rem_1fr] sm:gap-8 lg:py-12">
                <span className="font-display text-5xl font-semibold leading-none text-muted-foreground/40 tabular-nums sm:text-6xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">{step.title}</h3>
                  <p className="mt-3 max-w-xl text-lg text-muted-foreground">{step.description}</p>
                  <p className="mt-5 flex items-center gap-2 text-sm font-medium text-foreground">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Check size={12} strokeWidth={3} aria-hidden />
                    </span>
                    <span>
                      <span className="text-muted-foreground">You get: </span>
                      {step.deliverable}
                    </span>
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
