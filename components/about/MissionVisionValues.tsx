import { Reveal } from "@/components/Reveal";
import { Compass, Eye, Heart } from "lucide-react";

const pillars = [
  {
    icon: Compass,
    title: "Mission",
    text: "Help ambitious companies turn complex ideas into elegant, scalable products.",
  },
  {
    icon: Eye,
    title: "Vision",
    text: "A web that is faster, more useful, and more delightful for everyone.",
  },
  {
    icon: Heart,
    title: "Values",
    text: "Craft, candor, curiosity. We say what we mean and ship what we promise.",
  },
];

export function MissionVisionValues() {
  return (
    <section className="mx-auto mt-24 grid max-w-6xl gap-6 md:grid-cols-3">
      {pillars.map((pillar, i) => (
        <Reveal key={pillar.title} delay={i * 0.1}>
          <div className="h-full rounded-3xl glass-strong p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-primary text-white">
              <pillar.icon size={20} />
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold">{pillar.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pillar.text}</p>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
