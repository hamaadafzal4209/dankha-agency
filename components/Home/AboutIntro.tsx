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
          <div className="relative aspect-square md:aspect-6/4 w-full overflow-hidden rounded-3xl">
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
            title="A studio built for the next decade of the internet."
            description="We are a small senior team obsessed with craft. We work shoulder-to-shoulder with founders and product leaders to ship work that performs in the real world."
            align="left"
          />
          <Reveal delay={0.3}>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold gradient-primary transition"
            >
              Our story <ArrowRight size={14} />    
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
