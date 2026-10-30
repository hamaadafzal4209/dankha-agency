"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useId, useState } from "react";
import { cn } from "@/lib/utils";
import { springPanel, springSnappy } from "./springs";

type Faq = { question: string; answer: string };

/**
 * Questions that spring open one at a time. Every answer is rendered into the page's HTML even while closed, so it
 * still matches the FAQPage structured data search engines read.
 */
export function ServiceFaq({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="border-t border-border">
      {faqs.map((faq, index) => {
        const isOpen = open === index;
        const panelId = `${baseId}-answer-${index}`;
        return (
          <div key={faq.question} className="border-b border-border">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : index)}
                className="group flex w-full items-center justify-between gap-6 py-6 text-left font-display text-lg font-semibold text-foreground transition-colors hover:text-link sm:text-xl"
              >
                {faq.question}
                <span
                  aria-hidden
                  className={cn(
                    "relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-300",
                    isOpen
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border text-muted-foreground group-hover:border-primary group-hover:text-link",
                  )}
                >
                  <span className="absolute h-px w-3.5 bg-current" />
                  <motion.span
                    initial={false}
                    animate={{ rotate: isOpen ? 90 : 0, opacity: isOpen ? 0 : 1 }}
                    transition={prefersReducedMotion ? { duration: 0 } : springSnappy}
                    className="absolute h-3.5 w-px bg-current"
                  />
                </span>
              </button>
            </h3>
            <motion.div
              id={panelId}
              role="region"
              initial={false}
              animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
              transition={
                prefersReducedMotion ? { duration: 0 } : { height: springPanel, opacity: { duration: isOpen ? 0.3 : 0.15 } }
              }
              inert={!isOpen}
              className="overflow-hidden"
            >
              <p className="max-w-2xl pb-7 leading-relaxed text-muted-foreground">{faq.answer}</p>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
