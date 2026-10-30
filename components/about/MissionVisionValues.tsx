import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { AnimatedHeading } from "@/app/_components/AnimatedHeading";

const principles = [
  {
    title: "One team owns the result",
    description:
      "The people who build your site, app or store also run the ads and SEO, so there's no hand-off between vendors when results are flat.",
  },
  {
    title: "Honest about what's working",
    description:
      "We report what's selling and what isn't, and say so when a channel or campaign isn't worth your budget.",
  },
  {
    title: "Built to last",
    description: "We don't chase trends. Stores, code and brand systems are built so your team can keep running them.",
  },
  {
    title: "Long-term partners",
    description:
      "Most of our work continues after launch: managing ads, listings and fixes as your catalogue and channels grow.",
  },
];

export function MissionVisionValues() {
  return (
    <section aria-labelledby="principles-heading" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="text-sm font-medium text-link">How we work</p>
          <AnimatedHeading text="What we care about." id="principles-heading" className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl" />
          <div className="relative mt-10 aspect-4/3 overflow-hidden rounded-lg bg-surface-2 lg:aspect-4/5">
            <Image
              src="/assets/about/team-discussion.jpg"
              alt="Two people discussing a project over a laptop"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <ol className="grid gap-x-12 self-center border-t border-border sm:grid-cols-2 lg:col-span-7 lg:grid-cols-1 xl:grid-cols-2">
          {principles.map((principle, index) => (
            <li key={principle.title} className="border-b border-border py-8">
              <Reveal delay={(index % 2) * 0.06}>
                <span className="font-display text-sm text-link tabular-nums">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-display text-xl font-semibold text-foreground">{principle.title}</h3>
                <p className="mt-2 text-muted-foreground">{principle.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
