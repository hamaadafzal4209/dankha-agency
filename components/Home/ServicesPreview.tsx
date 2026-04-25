import React from "react";
import {
  ComputerDesktopIcon,
  ShoppingBagIcon,
  PresentationChartBarIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/outline";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { SectionHeading } from "../SectionHeading";

export function ServicesPreview() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <SectionHeading
        eyebrow="Our Services"
        title="Crafted for impact, built for growth."
      />
      <BentoGrid className="mx-auto mt-12 w-full md:auto-rows-[19rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            icon={item.icon}
            watermarkIcon={item.watermarkIcon}
            href={item.href}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const items = [
  {
    title: "IT Solutions",
    description:
      "Reliable infrastructure, scalable web systems, and technical support built for growing businesses.",
    className: "md:col-span-2",
    href: "/services/it",
    icon: (
      <div className="inline-flex items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
        <ComputerDesktopIcon className="h-5 w-5" />
      </div>
    ),
    watermarkIcon: <ComputerDesktopIcon className="h-40 w-40" strokeWidth={1} />,
  },
  {
    title: "Ecommerce",
    description:
      "Conversion-focused storefronts, smooth checkout journeys, and catalog experiences that sell.",
    className: "md:col-span-1",
    href: "/services/ecommerce",
    icon: (
      <div className="inline-flex items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 p-3 text-sky-300">
        <ShoppingBagIcon className="h-5 w-5" />
      </div>
    ),
    watermarkIcon: <ShoppingBagIcon className="h-40 w-40" strokeWidth={1} />,
  },
  {
    title: "Marketing",
    description:
      "Campaign strategy, brand messaging, and growth tactics designed to attract qualified leads.",
    className: "md:col-span-1",
    href: "/services/marketing",
    icon: (
      <div className="inline-flex items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/10 p-3 text-violet-300">
        <PresentationChartBarIcon className="h-5 w-5" />
      </div>
    ),
    watermarkIcon: <PresentationChartBarIcon className="h-40 w-40" strokeWidth={1} />,
  },
  {
    title: "Designing",
    description:
      "Brand identity, interface design, and polished visuals that make every interaction feel intentional.",
    className: "md:col-span-2",
    href: "/services/designing",
    icon: (
      <div className="inline-flex items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
        <PaintBrushIcon className="h-5 w-5" />
      </div>
    ),
    watermarkIcon: <PaintBrushIcon className="h-40 w-40" strokeWidth={1} />,
  },
];
