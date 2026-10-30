import Link from "next/link";
import { ArrowRight, ArrowUpRight, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import { CardSlider } from "./CardSlider";

export type ServiceCardItem = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  tags?: string[];
  /** Longer list shown only on the large featured card */
  covers?: string[];
};

function ServiceCard({ service, index, featured }: { service: ServiceCardItem; index: number; featured: boolean }) {
  const Icon = service.icon;
  return (
    <Link
      href={service.href}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 sm:p-8",
        "transition-[transform,border-color,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "hover:-translate-y-0.5 hover:border-primary/50 hover:bg-[color-mix(in_oklab,var(--primary)_6%,var(--surface))]",
        "motion-reduce:transition-none motion-reduce:hover:translate-y-0",
      )}
    >
      <div className="flex items-start justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12 text-link ring-1 ring-inset ring-primary/20 transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:ring-primary">
          <Icon size={20} strokeWidth={1.75} aria-hidden />
        </span>
        <span className="font-display text-sm text-muted-foreground tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3
        className={cn(
          "mt-8 font-display font-semibold text-foreground",
          featured ? "text-2xl sm:text-3xl lg:text-4xl" : "text-xl sm:text-2xl",
        )}
      >
        {service.title}
      </h3>
      <p className={cn("mt-3 text-muted-foreground", featured && "max-w-md sm:text-lg")}>{service.description}</p>

      {featured && service.covers && service.covers.length > 0 && (
        <ul className="mt-8 hidden divide-y divide-border border-y border-border lg:block">
          {service.covers.map((item) => (
            <li key={item} className="flex items-center justify-between gap-4 py-3 text-sm text-foreground">
              {item}
              <ArrowRight size={14} aria-hidden className="shrink-0 text-muted-foreground transition-colors group-hover:text-link" />
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto flex items-end justify-between gap-4 pt-8">
        {service.tags && service.tags.length > 0 ? (
          <ul className="flex flex-wrap gap-1.5" aria-label={`${service.title} includes`}>
            {service.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-border bg-background/40 px-2.5 py-1 text-xs font-medium text-muted-foreground"
              >
                {tag}
              </li>
            ))}
          </ul>
        ) : (
          <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-link">
            Learn more
          </span>
        )}
        <span
          aria-hidden
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-45 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
        >
          <ArrowUpRight size={18} />
        </span>
      </div>
    </Link>
  );
}

/**
 * Service cards in a grid on larger screens and a swipeable slider on phones. With an odd number of cards
 * the first one is shown large; an even number sits in an even grid so no row is left with a gap.
 */
export function ServiceCardGrid({ items, label }: { items: ServiceCardItem[]; label: string }) {
  const featureFirst = items.length % 2 === 1 && items.length > 1;
  const columns = !featureFirst && items.length % 3 !== 0 ? "lg:grid-cols-2" : "lg:grid-cols-3";

  return (
    <CardSlider
      label={label}
      gridClassName={cn("sm:grid sm:grid-cols-2 sm:gap-4 lg:gap-5", columns)}
      itemClassNames={items.map((_, index) =>
        featureFirst && index === 0 ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : undefined,
      )}
      items={items.map((service, index) => (
        <Reveal key={service.href} delay={index * 0.05} className="h-full">
          <ServiceCard service={service} index={index} featured={featureFirst && index === 0} />
        </Reveal>
      ))}
    />
  );
}
