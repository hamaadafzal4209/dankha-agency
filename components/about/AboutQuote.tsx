import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { ScrollText } from "@/app/_components/ScrollText";

export function AboutQuote() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
      <Reveal>
        <figure className="relative isolate overflow-hidden rounded-lg">
          <Image
            src="/assets/about/wireframes-wall.jpg"
            alt=""
            fill
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="-z-10 object-cover"
          />
          <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-r from-[#0b1626]/95 via-[#0b1626]/85 to-[#0b1626]/60" />
          <div className="px-6 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24">
            <blockquote className="max-w-3xl border-l-2 border-primary pl-6 font-display text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-5xl">
              <ScrollText text="“We don’t chase trends. We build things that age well.”" offset={["start 90%", "end 55%"]} />
            </blockquote>
            <figcaption className="mt-6 pl-6 text-[#c7d1dc]">The Dankha team</figcaption>
          </div>
        </figure>
      </Reveal>
    </section>
  );
}
