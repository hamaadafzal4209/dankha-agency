"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import type { ServiceSubcategory } from "@/data/service-details";
import { SERVICE_ICON_MAP } from "@/data/service-icons";
import { ArrowRight, Sparkles, X } from "lucide-react";

type ServiceSubcategoryDrawerProps = {
  serviceEyebrow: string;
  subcategory: ServiceSubcategory;
};

export function ServiceSubcategoryDrawer({
  serviceEyebrow,
  subcategory,
}: ServiceSubcategoryDrawerProps) {
  const Icon = SERVICE_ICON_MAP[subcategory.icon] ?? Sparkles;

  return (
    <Drawer shouldScaleBackground={false}>
      <DrawerTrigger asChild>
        <Button
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border-white/15 bg-white/5 text-sm font-semibold text-foreground hover:bg-white/10"
          variant="outline"
        >
          Learn More
          <ArrowRight size={16} />
        </Button>
      </DrawerTrigger>

      <DrawerContent className="h-fit max-h-[92vh] rounded-t-3xl border-white/10 bg-background p-0">
        <div className="mx-auto w-full max-w-4xl overflow-y-auto px-6 pb-6 pt-3 md:px-8">
          <DrawerHeader className="border-b border-white/10 px-0 pb-5 pt-2 text-left">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-400/12 text-cyan-300">
                  <Icon size={20} />
                </div>
                <div>
                  <DrawerTitle className="font-display text-2xl md:text-3xl">
                    {subcategory.title}
                  </DrawerTitle>
                  <DrawerDescription className="mt-2 max-w-xl text-sm md:text-base">
                    {subcategory.description}
                  </DrawerDescription>
                  <p className="mt-3 text-xs uppercase tracking-[0.18em] text-secondary">{serviceEyebrow}</p>
                </div>
              </div>
              <DrawerClose asChild>
                <Button variant="ghost" size="icon" aria-label="Close">
                  <X size={18} />
                </Button>
              </DrawerClose>
            </div>
          </DrawerHeader>

          <div className="mt-5 rounded-2xl border border-white/10 glass p-5 md:p-6">
            <h3 className="font-display text-lg font-semibold md:text-xl">Included Sub-services</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Delivery scope for this subcategory.
            </p>

            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {subcategory.subServices.map((serviceItem, index) => (
                <li
                  key={serviceItem}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-3"
                >
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-400/15 text-xs font-semibold text-cyan-300">
                    {index + 1}
                  </span>
                  <span className="text-sm text-foreground/90">{serviceItem}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs leading-relaxed text-muted-foreground">
            Need a custom scope? We can combine this with adjacent subcategories and deliver a tailored execution plan.
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
