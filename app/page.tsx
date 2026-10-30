import { Hero } from "@/components/Home/Hero";
import { TrustedPartners } from "@/components/Home/TrustedPartners";
import { ServicesList } from "@/components/services/ServicesList";
import { Portfolio } from "@/components/Home/Portfolio";
import { Process } from "@/components/Home/Process";
import { AboutIntro } from "@/components/Home/AboutIntro";
import { Testimonials } from "@/components/Home/Testimonials";
import { CTA } from "@/components/Home/CTA";
import type { Metadata } from "next";
import { seoMetadata } from "@/sanity/seo";

/** The home page uses the site-wide title and description unless its own SEO entry fills them in */
export async function generateMetadata(): Promise<Metadata> {
  return seoMetadata("/", { alternates: { canonical: "https://www.dankha.co" } });
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedPartners />
      <ServicesList />
      <Portfolio />
      <Process />
      <AboutIntro />
      <Testimonials />
      <CTA />
    </>
  );
}
