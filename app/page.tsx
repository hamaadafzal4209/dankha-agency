"use client";

import { Hero } from "@/components/Home/Hero";
import { StatsBar } from "@/components/Home/StatsBar";
import { ServicesPreview } from "@/components/Home/ServicesPreview";
import { AboutIntro } from "@/components/Home/AboutIntro";
import { Portfolio } from "@/components/Home/Portfolio";
import { Testimonials } from "@/components/Home/Testimonials";
import { CTA } from "@/components/Home/CTA";
import { FloatingHeroVisual } from "@/components/Home/FloatingHeroVisual";

const page = () => {
  return (
    <>
      <Hero />
      {/* <FloatingHeroVisual /> */}
      <StatsBar />
      <ServicesPreview />
      <AboutIntro />
      <Portfolio />
      <Testimonials />
      <CTA />
    </>
  );
};

export default page;
