import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import Image from "next/image";

export function AboutIntro() {
  return (
    <section className="px-6 py-20 pt-8">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
        <Reveal>
          <div className="relative aspect-5/4 md:aspect-6/4 w-full overflow-hidden rounded-3xl">
            <Image
              src="/assets/about.jpg"
              alt="About us"
              fill
              className="object-cover"
            />
          </div>
        </Reveal>
        <div>
          <SectionHeading
            eyebrow="About DANKHA"
            title="Your Partner for Digital Growth."
            description="Dankha is a growth-focused agency helping businesses establish, scale, and optimize their digital presence. Through eCommerce solutions, technology services, digital marketing, and social media management, we empower brands to increase visibility, drive revenue, and achieve sustainable growth."
            align="left"
          />
          <Reveal delay={0.3}>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold gradient-primary transition"
            >
              Our Story <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
