import type { Metadata } from "next";
import { AboutIntro } from "@/components/about/AboutIntro";
import { AboutQuote } from "@/components/about/AboutQuote";
import { MissionVisionValues } from "@/components/about/MissionVisionValues";
import { TeamSection } from "@/components/about/TeamSection";
import { TimelineSection } from "@/components/about/TimelineSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Dankha Agency — our mission, values, team, and the story behind how we help brands grow through premium digital experiences.",
  alternates: { canonical: "https://dankha.co/about" },
  openGraph: {
    title: "About Dankha Agency",
    description:
      "Meet the team behind Dankha — a premium digital agency built to help ambitious brands grow with web, ecommerce, marketing, and design.",
    url: "https://dankha.co/about",
  },
};

function AboutPage() {
  return (
    <div className="px-6 pb-32">
      <AboutIntro />
      <MissionVisionValues />
      <TeamSection />
      <TimelineSection />
      <AboutQuote />
    </div>
  );
}

export default AboutPage;
