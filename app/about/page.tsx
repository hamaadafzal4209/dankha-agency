import { AboutIntro } from "@/components/about/AboutIntro";
import { AboutQuote } from "@/components/about/AboutQuote";
import { MissionVisionValues } from "@/components/about/MissionVisionValues";
import { TeamSection } from "@/components/about/TeamSection";
import { TimelineSection } from "@/components/about/TimelineSection";

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
