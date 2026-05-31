import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SERVICE_ICON_MAP } from "@/data/service-icons";
import type { ServiceSubcategory } from "@/data/services";

interface ServiceCardProps {
  subcategory: ServiceSubcategory;
  href: string;
  index?: number;
}

export function ServiceCard({
  subcategory,
  href,
  index = 0,
}: ServiceCardProps) {
  const Icon = SERVICE_ICON_MAP[subcategory.icon];

  return (
    <Reveal key={subcategory.slug} delay={index * 0.04}>
      <Link href={href}>
        <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 glass p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20">
          <div className="absolute -right-6 -top-6 text-white/5 transition group-hover:text-white/10">
            <Icon size={68} />
          </div>

          <div className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-400/12 text-cyan-300">
            <Icon size={20} />
          </div>
          <h3 className="relative mt-4 font-display text-lg font-semibold">
            {subcategory.title}
          </h3>
          <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
            {subcategory.description}
          </p>

          <ul className="relative mt-4 space-y-3">
            {subcategory.services.slice(0, 3).map((serviceItem) => (
              <li
                key={serviceItem.title}
                className="flex items-start gap-2 text-sm"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/60" />
                <div className="flex-1">
                  <span className="font-medium text-foreground/90">{serviceItem.title}</span>
                  <p className="text-xs text-muted-foreground/80 mt-1 leading-relaxed">
                    {serviceItem.description.length > 80
                      ? `${serviceItem.description.slice(0, 80)}...`
                      : serviceItem.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="relative mt-auto pt-4">
            <span className="group/btn mt-1 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 transition duration-200 hover:border-white/25 hover:bg-white/10 hover:text-white">
              Learn more
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </div>
        </article>
      </Link>
    </Reveal>
  );
}
