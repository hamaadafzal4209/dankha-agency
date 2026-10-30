import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/app/_components/ButtonLink";
import { ContactEmail, PhoneNumber } from "@/data/commonConstants";
import { AnimatedHeading } from "@/app/_components/AnimatedHeading";

/** Lowercase a heading for use mid-sentence, keeping acronyms: "Ads, SEO and email" -> "ads, SEO and email" */
export function midSentence(text: string): string {
  return /^[A-Z]{2}/.test(text) ? text : text.charAt(0).toLowerCase() + text.slice(1);
}

type Step = { title: string; description: string };
type Faq = { question: string; answer: string };

/** Structured data that lets Google show a page's questions and answers in search results */
export function faqPageSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

/** Countries Dankha serves, used in each service's structured data */
export const serviceAreas = ["United Arab Emirates", "Sweden", "Saudi Arabia", "United States", "Pakistan"];

/** Page header shared by service and project detail pages */
export function DetailHeader({
  breadcrumbs,
  eyebrow,
  title,
  intro,
}: {
  breadcrumbs: ReactNode;
  eyebrow?: string;
  title: string;
  intro: string;
}) {
  return (
    <header className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 md:pt-20 lg:px-8">
      {breadcrumbs}
      <Reveal immediate className="mt-10 max-w-4xl">
        {eyebrow && <p className="text-sm font-medium text-link">{eyebrow}</p>}
        <AnimatedHeading
          as="h1"
          immediate
          text={title}
          className={`font-display text-4xl font-semibold text-foreground sm:text-5xl lg:text-6xl ${eyebrow ? "mt-3" : ""}`}
        />
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">{intro}</p>
      </Reveal>
    </header>
  );
}

/** Two-column body: content on the left, a sticky summary on the right */
export function DetailLayout({ children, aside }: { children: ReactNode; aside: ReactNode }) {
  return (
    <div className="mx-auto mt-16 grid max-w-7xl gap-16 px-4 sm:px-6 lg:mt-20 lg:grid-cols-12 lg:gap-12 lg:px-8">
      <div className="lg:col-span-8">{children}</div>
      <aside className="lg:col-span-4">
        <div className="space-y-10 lg:sticky lg:top-28 lg:border-l lg:border-border lg:pl-10">{aside}</div>
      </aside>
    </div>
  );
}

/** A numbered section in the main column */
export function DocSection({ index, title, children }: { index: number; title: string; children: ReactNode }) {
  return (
    <section className="pb-14 last:pb-0 lg:pb-16">
      <Reveal>
        <p className="font-display text-sm font-medium text-link tabular-nums">{String(index).padStart(2, "0")}</p>
        <AnimatedHeading text={title} className="mt-2 font-display text-2xl font-semibold text-foreground sm:text-3xl" />
        <div className="mt-6">{children}</div>
      </Reveal>
    </section>
  );
}

export function StepsList({ steps }: { steps: Step[] }) {
  return (
    <ol className="space-y-8">
      {steps.map((step, index) => (
        <li key={step.title} className="grid grid-cols-[2.5rem_1fr] gap-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border font-display text-sm font-semibold text-link">
            {index + 1}
          </span>
          <div className="pt-1.5">
            <h3 className="font-display text-lg font-semibold text-foreground">{step.title}</h3>
            <p className="mt-1.5 text-muted-foreground">{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function CheckList({ items, columns = 1 }: { items: string[]; columns?: 1 | 2 }) {
  return (
    <ul className={`grid gap-x-10 gap-y-4 ${columns === 2 ? "sm:grid-cols-2 sm:gap-y-5" : ""}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-foreground">
          <Check size={18} className="mt-1 shrink-0 text-link" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Native disclosure widgets rather than a JavaScript accordion, so every answer is in the page's HTML for search engines
 * (matching the FAQPage structured data) and still opens without JavaScript. Sharing a `name` keeps one answer open at a time.
 */
export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="-mx-4 space-y-1">
      {faqs.map((faq) => (
        <details
          key={faq.question}
          name="faq"
          className="group rounded-xl px-4 transition-colors duration-300 open:bg-primary/[0.06]"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-base font-semibold text-foreground hover:text-link group-open:text-link [&::-webkit-details-marker]:hidden">
            {faq.question}
            <ChevronDown
              aria-hidden
              className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
            />
          </summary>
          <p className="pb-4 text-base text-muted-foreground">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}

/** Sidebar block with a small label */
export function AsideBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="text-sm font-medium text-muted-foreground">{title}</h2>
      <div className="mt-4">{children}</div>
    </div>
  );
}

/** "Book a call" block with contact details, used at the bottom of every sidebar */
export function AsideContact({ prompt }: { prompt: string }) {
  return (
    <div>
      <p className="font-display text-xl font-semibold text-foreground">{prompt}</p>
      <ButtonLink href="/contact" className="mt-5 w-full">
        Book a call <ArrowRight size={16} />
      </ButtonLink>
      <div className="mt-5 space-y-1 text-sm">
        <a href={`mailto:${ContactEmail}`} className="block text-foreground hover:text-link">
          {ContactEmail}
        </a>
        <a href={`tel:${PhoneNumber.replace(/\s/g, "")}`} className="block text-muted-foreground hover:text-link">
          {PhoneNumber}
        </a>
      </div>
    </div>
  );
}

export function AsideLinks({ links }: { links: { href: string; label: string }[] }) {
  return (
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.href}>
          <Link href={link.href} className="group flex items-center justify-between gap-3 text-foreground hover:text-link">
            {link.label}
            <ArrowRight size={14} className="shrink-0 text-muted-foreground group-hover:text-link" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
