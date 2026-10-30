import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { AnimatedHeading } from "@/app/_components/AnimatedHeading";

const timeline = [
  {
    year: "2020",
    title: "Started as a freelance team",
    desc: "Set up online stores, websites and ad accounts for early-stage businesses.",
  },
  {
    year: "2021",
    title: "Became an agency",
    desc: "Moved from one-off freelance work to repeatable processes for Amazon, Shopify and web projects.",
  },
  {
    year: "2022",
    title: "Added ads and branding",
    desc: "Took on paid ads, email automation and brand design so clients could hand over the whole funnel.",
  },
  {
    year: "2023",
    title: "First enterprise apps",
    desc: "Built a partner app for a home-services marketplace and a government services app in the UAE, and Healup Pharma's corporate site.",
  },
  {
    year: "2024",
    title: "In-house engineering",
    desc: "Grew the development team and shipped websites for AMF in Saudi Arabia and RISE Premier in Pakistan.",
  },
  {
    year: "2025",
    title: "Six sales channels",
    desc: "Running stores on Shopify, Amazon, eBay, Walmart, Etsy and TikTok Shop, and a booking platform for a client in Sweden.",
  },
];

export function TimelineSection() {
  return (
    <section aria-labelledby="history-heading">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-18">
        <div className="lg:col-span-5">
          <Reveal className="lg:sticky lg:top-28">
            <p className="text-sm font-medium text-link">History</p>
            <AnimatedHeading text="How we got here." id="history-heading" className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl" />
            <div className="relative mt-10 aspect-4/3 overflow-hidden rounded-lg bg-surface-2">
              <Image
                src="/assets/about/whiteboard-review.jpg"
                alt="A team discussing ideas around a whiteboard"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <ol className="lg:col-span-7">
          {timeline.map((item, i) => (
            <li key={item.year} className="grid grid-cols-[4.5rem_1fr] gap-4 border-t border-border py-6 sm:grid-cols-[6rem_1fr]">
              <Reveal delay={i * 0.04}>
                <time dateTime={item.year} className="font-display text-lg font-semibold text-link">
                  {item.year}
                </time>
              </Reveal>
              <Reveal delay={i * 0.04 + 0.02}>
                <h3 className="font-display text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1.5 text-muted-foreground">{item.desc}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
