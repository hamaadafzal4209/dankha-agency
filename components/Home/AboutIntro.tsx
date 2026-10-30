import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { AnimatedHeading } from "@/app/_components/AnimatedHeading";
import { ScrollText } from "@/app/_components/ScrollText";

export function AboutIntro() {
  return (
    <section aria-labelledby="about-heading" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5 lg:col-start-1">
          <div className="relative aspect-4/3 overflow-hidden rounded-lg">
            <Image
              src="/assets/about/team-meeting.jpg"
              alt="A team meeting around a table with laptops"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal>
            <p className="text-sm font-medium text-link">Who we are</p>
            <AnimatedHeading text="One team for your website, app, store and ads." id="about-heading" className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl" />
            <ScrollText
              text="Dankha started in 2020 building websites and online stores for early-stage businesses. Today we design and build web platforms and mobile apps, run marketplace stores and manage the ads, so you don't have to coordinate four different vendors."
              className="mt-6 text-lg leading-relaxed text-foreground sm:text-xl"
            />
          </Reveal>

          <Reveal delay={0.08}>
            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-link hover:underline"
            >
              More about us <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
