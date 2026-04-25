import React from "react";
import { Code2, Megaphone, Palette, ShoppingCart } from "lucide-react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { SectionHeading } from "../SectionHeading";

export function ServicesPreview() {
  return (
    <div className="mx-auto max-w-7xl px-6">
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
    icon: (
      <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-200">
        <Code2 className="h-5 w-5" />
      </div>
    ),
    watermarkIcon: <Code2 className="h-24 w-24" />,
  },
  {
    title: "Ecommerce",
    description:
      "Conversion-focused storefronts, smooth checkout journeys, and catalog experiences that sell clearly.",
    className: "md:col-span-1",
    icon: (
      <div className="rounded-xl border border-sky-300/20 bg-sky-300/10 p-3 text-sky-100">
        <ShoppingCart className="h-5 w-5" />
      </div>
    ),
    watermarkIcon: <ShoppingCart className="h-24 w-24" />,
  },
  {
    title: "Marketing",
    description:
      "Campaign planning, brand messaging, and digital growth tactics designed to attract qualified leads.",
    className: "md:col-span-1",
    icon: (
      <div className="rounded-xl border border-blue-300/20 bg-blue-300/10 p-3 text-blue-100">
        <Megaphone className="h-5 w-5" />
      </div>
    ),
    watermarkIcon: <Megaphone className="h-24 w-24" />,
  },
  {
    title: "Designing",
    description:
      "Brand identity, interface design, and polished visuals that make every interaction feel intentional.",
    className: "md:col-span-2",
    icon: (
      <div className="rounded-xl border border-teal-300/20 bg-teal-300/10 p-3 text-teal-100">
        <Palette className="h-5 w-5" />
      </div>
    ),
    watermarkIcon: <Palette className="h-24 w-24" />,
  },
];
