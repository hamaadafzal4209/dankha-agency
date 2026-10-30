import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { AnimatedHeading } from "@/app/_components/AnimatedHeading";
import { ScrollText } from "@/app/_components/ScrollText";

const facts = [
  { label: "Founded", value: "2020" },
  { label: "Based in", value: "Lahore, Pakistan" },
  { label: "Clients in", value: "UAE, Sweden, Saudi Arabia, US, Pakistan" },
  { label: "Published case studies", value: "14" },
];

export function AboutIntro() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 md:pt-20 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal immediate className="lg:col-span-8">
          <p className="text-sm font-medium text-link">About us</p>
          <AnimatedHeading as="h1" immediate text="A Lahore team that builds websites, apps and online stores, and keeps them growing." className="mt-3 font-display text-4xl font-semibold text-foreground sm:text-5xl lg:text-6xl" />
          <ScrollText
            text="We design and build websites, dashboards and mobile apps for companies in Sweden, the UAE and Saudi Arabia. We also run stores on Shopify and the big marketplaces, and manage the ads, SEO and email that bring customers in."
            offset={["start 100%", "end 65%"]}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground sm:text-xl"
          />
        </Reveal>

        <Reveal immediate delay={0.08} className="lg:col-span-4 lg:self-end">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-6 lg:grid-cols-1">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-sm text-muted-foreground">{fact.label}</dt>
                <dd className="mt-1 font-display text-lg font-semibold text-foreground">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <Reveal immediate delay={0.1} className="mt-16">
        <div className="relative aspect-21/9 overflow-hidden rounded-lg">
          <Image
            src="/assets/about/team-at-work.jpg"
            alt="Team members working together on laptops around a shared table"
            fill
            priority
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="object-cover"
          />
        </div>
      </Reveal>
    </section>
  );
}
