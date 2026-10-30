import type { Metadata } from "next";
import { seoMetadata } from "@/sanity/seo";
import { AboutIntro } from "@/components/about/AboutIntro";
import { AboutQuote } from "@/components/about/AboutQuote";
import { MissionVisionValues } from "@/components/about/MissionVisionValues";
import { TimelineSection } from "@/components/about/TimelineSection";
import { CTA } from "@/components/Home/CTA";

const fallbackMetadata: Metadata = {
  title: "About Dankha: web, app and ecommerce team",
  description:
    "Dankha is a Lahore team that designs and builds websites, mobile apps and online stores, and runs the ads, SEO and marketplace accounts that grow them.",
  alternates: { canonical: "https://www.dankha.co/about" },
  openGraph: {
    title: "About Dankha",
    description:
      "Meet the Lahore team behind websites, apps and online stores for clients in five countries.",
    url: "https://www.dankha.co/about",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return seoMetadata("/about", fallbackMetadata);
}

function AboutPage() {
  return (
    <>
      <AboutIntro />
      <MissionVisionValues />
      <TimelineSection />
      <AboutQuote />
      <CTA />
    </>
  );
}

export default AboutPage;
