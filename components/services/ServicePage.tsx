import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/app/_components/ButtonLink";
import { cn } from "@/lib/utils";
import { AnimatedHeading } from "@/app/_components/AnimatedHeading";
import { SpringIn } from "./SpringIn";

type Titled = { title: string; description: string };

export const sectionShell = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

/** Small teal label with a leading rule, used above every heading on the service pages */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("flex items-center gap-3 text-sm font-medium text-link", className)}>
      <span aria-hidden className="h-px w-6 bg-primary" />
      {children}
    </p>
  );
}

/**
 * Page opening: a large headline whose words spring up in turn, then a ruled row with the intro and actions on
 * the left and a summary list on the right. Everything here animates in CSS so it shows on first paint.
 */
export function ServiceHero({
  breadcrumbs,
  eyebrow,
  title,
  intro,
  panelTitle,
  panel,
}: {
  breadcrumbs: ReactNode;
  eyebrow: string;
  title: string;
  intro: string;
  panelTitle: string;
  panel: ReactNode;
}) {
  return (
    <header className={cn(sectionShell, "pb-16 pt-12 md:pt-20 lg:pb-24")}>
      {breadcrumbs}

      <Eyebrow className="mt-12 animate-spring-up motion-reduce:animate-none lg:mt-16">{eyebrow}</Eyebrow>
      <AnimatedHeading
        as="h1"
        immediate
        text={title}
        delay={0.05}
        className="mt-5 max-w-5xl font-display text-4xl font-semibold leading-[1.04] text-foreground sm:text-6xl lg:text-7xl"
      />

      <div className="relative mt-14 grid gap-12 pt-10 lg:mt-20 lg:grid-cols-12 lg:gap-16">
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 h-px origin-left animate-rule-draw bg-border [animation-delay:0.2s] motion-reduce:animate-none"
        />
        <div className="animate-spring-up [animation-delay:0.3s] motion-reduce:animate-none lg:col-span-6">
          <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">{intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact">
              Book a call <ArrowRight size={16} />
            </ButtonLink>
            <ButtonLink href="/portfolio" variant="secondary">
              See our work
            </ButtonLink>
          </div>
        </div>

        <div className="animate-spring-up [animation-delay:0.4s] motion-reduce:animate-none lg:col-span-5 lg:col-start-8">
          <p className="text-sm text-muted-foreground">{panelTitle}</p>
          <div className="mt-4">{panel}</div>
        </div>
      </div>
    </header>
  );
}

/** Short points for the hero's summary, each set off by a teal tick mark */
export function PanelPoints({ items }: { items: string[] }) {
  return (
    <ul className="divide-y divide-border border-y border-border">
      {items.map((item) => (
        <li key={item} className="flex gap-4 py-3.5 text-foreground">
          <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-primary" />
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Links to each sub-service for the hero's summary */
export function PanelLinks({ links }: { links: { href: string; label: string }[] }) {
  return (
    <ul className="divide-y divide-border border-y border-border">
      {links.map((link, index) => (
        <li key={link.href}>
          <Link href={link.href} className="group flex items-center gap-4 py-3 text-foreground">
            <span className="w-5 font-display text-xs tabular-nums text-muted-foreground">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="transition-[color,translate] duration-700 ease-spring group-hover:translate-x-1.5 group-hover:text-link motion-reduce:transition-none">
              {link.label}
            </span>
            <ArrowRight
              size={16}
              aria-hidden
              className="ml-auto shrink-0 -translate-x-2 text-link opacity-0 transition-[opacity,translate] duration-700 ease-spring group-hover:translate-x-0 group-hover:opacity-100 motion-reduce:transition-none"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** A page section: label and heading in a sticky left column with content on the right; `stacked` puts it underneath */
export function ServiceSection({
  label,
  title,
  intro,
  children,
  stacked = false,
}: {
  label: string;
  title: string;
  intro?: string;
  children: ReactNode;
  stacked?: boolean;
}) {
  const heading = (
    <SpringIn>
      <Eyebrow>{label}</Eyebrow>
      <AnimatedHeading text={title} className="mt-4 font-display text-3xl font-semibold text-foreground sm:text-5xl" />
      {intro && <p className="mt-5 max-w-md text-lg text-muted-foreground">{intro}</p>}
    </SpringIn>
  );

  if (stacked) {
    return (
      <section className={cn(sectionShell, "py-16 lg:py-24")}>
        <div className="max-w-2xl">{heading}</div>
        <div className="mt-12 lg:mt-16">{children}</div>
      </section>
    );
  }

  return (
    <section className={cn(sectionShell, "py-16 lg:py-24")}>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">{heading}</div>
        </div>
        <div className="lg:col-span-8">{children}</div>
      </div>
    </section>
  );
}

/** What a service includes: a two-column grid of numbered items, each under a hairline that turns teal on hover */
export function IncludedList({ items }: { items: Titled[] }) {
  return (
    <ul className="grid gap-x-12 gap-y-12 sm:grid-cols-2">
      {items.map((item, index) => (
        <li key={item.title}>
          <SpringIn delay={(index % 2) * 0.07} className="group relative pt-6">
            <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-border" />
            <span
              aria-hidden
              className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-primary transition-transform duration-700 ease-spring group-hover:scale-x-100 motion-reduce:transition-none"
            />
            <span className="font-display text-sm tabular-nums text-link">{String(index + 1).padStart(2, "0")}</span>
            <h3 className="mt-3 font-display text-xl font-semibold text-foreground">{item.title}</h3>
            <p className="mt-2.5 leading-relaxed text-muted-foreground">{item.description}</p>
          </SpringIn>
        </li>
      ))}
    </ul>
  );
}

/** Full-width band in a slightly lifted tone listing what clients can expect, one ruled row per outcome */
export function OutcomesBand({ title, intro, items }: { title: string; intro: string; items: string[] }) {
  return (
    <section className="bg-surface-2/40">
      <div className={cn(sectionShell, "grid gap-12 py-16 lg:grid-cols-12 lg:gap-16 lg:py-24")}>
        <SpringIn className="lg:col-span-4">
          <Eyebrow>Results</Eyebrow>
          <AnimatedHeading text={title} className="mt-4 font-display text-3xl font-semibold text-foreground sm:text-5xl" />
          <p className="mt-5 max-w-md text-lg text-muted-foreground">{intro}</p>
        </SpringIn>
        <ol className="border-t border-border lg:col-span-8">
          {items.map((item, index) => (
            <li key={item} className="border-b border-border">
              <SpringIn delay={index * 0.06} y={20} className="grid grid-cols-[3rem_minmax(0,1fr)] gap-4 py-6 sm:grid-cols-[5rem_minmax(0,1fr)] sm:py-8">
                <span className="font-display text-2xl font-semibold tabular-nums text-link sm:text-3xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-lg leading-snug text-foreground sm:pt-1 sm:text-2xl sm:leading-snug">{item}</span>
              </SpringIn>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** Closing navigation: groups of related links side by side, each row nudging right on a spring when hovered */
export function RelatedNav({ groups }: { groups: { title: string; links: { href: string; label: string }[] }[] }) {
  const filled = groups.filter((group) => group.links.length > 0);
  if (filled.length === 0) {
    return null;
  }
  return (
    <nav aria-label="Related pages" className={cn(sectionShell, "py-16 lg:py-20")}>
      <div className={cn("grid gap-12 lg:gap-16", filled.length > 1 && "md:grid-cols-2")}>
        {filled.map((group, groupIndex) => (
          <SpringIn key={group.title} delay={groupIndex * 0.08}>
            <h2 className="text-sm font-medium text-muted-foreground">{group.title}</h2>
            <ul className="mt-4 border-t border-border">
              {group.links.map((link) => (
                <li key={link.href} className="border-b border-border">
                  <Link href={link.href} className="group flex items-center justify-between gap-4 py-4">
                    <span className="font-display text-lg font-semibold text-foreground transition-[color,translate] duration-700 ease-spring group-hover:translate-x-2 group-hover:text-link motion-reduce:transition-none">
                      {link.label}
                    </span>
                    <ArrowRight
                      size={18}
                      aria-hidden
                      className="shrink-0 text-muted-foreground transition-[color,translate] duration-700 ease-spring group-hover:translate-x-1 group-hover:text-link motion-reduce:transition-none"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </SpringIn>
        ))}
      </div>
    </nav>
  );
}
