import { ArrowRight, Check, Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/app/_components/ButtonLink";
import { AnimatedWords } from "@/app/_components/AnimatedHeading";
import { LahoreTime, RotatingWord } from "./HeroDetails";
import { getReviews } from "@/sanity/reviews";
import { clientNames } from "./data";
import { ReviewAvatar } from "./ReviewAvatar";

const offerings = ["websites", "mobile apps", "online stores", "Amazon brands", "ad campaigns"] as const;

const facts = [
  { value: "2020", label: "Founded in Lahore" },
  { value: "14", label: "Published case studies" },
  { value: "5", label: "Client countries" },
  { value: "4", label: "Services under one roof" },
];

export async function Hero() {
  const { reviews, summary } = await getReviews();
  const highlighted = reviews.find((review) => review.highlight) ?? reviews[0];
  const featuredQuote = highlighted && { quote: highlighted.highlight ?? highlighted.body, person: highlighted };

  return (
    <section className="mx-auto max-w-7xl px-4 pb-6 pt-10 sm:px-6 md:pt-16 lg:px-8 lg:pt-20">
      <Reveal immediate>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {reviews.length > 0 && (
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {reviews.slice(0, 4).map((person, index) => (
                  <ReviewAvatar
                    key={`${person.name}-${index}`}
                    name={person.name}
                    img={person.img}
                    size={32}
                    className="border-2 border-background"
                  />
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-x-2 text-sm">
                <span className="flex items-center gap-0.5" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </span>
                <span className="font-semibold text-foreground">{summary.rating}</span>
                <span className="text-muted-foreground">
                  <span className="sr-only">out of 5, </span>from {summary.count} client {summary.count === 1 ? "review" : "reviews"}
                </span>
              </div>
            </div>
          )}
          <LahoreTime />
        </div>
      </Reveal>

      <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:items-end lg:gap-12">
        <Reveal immediate delay={0.05} className="lg:col-span-8">
          <h1 className="font-display text-[2.6rem] font-semibold leading-[1.04] text-foreground sm:text-6xl xl:text-[5.25rem]">
            <span className="sr-only">
              We design, build and grow websites, mobile apps, online stores, Amazon brands and ad campaigns.
            </span>
            <span aria-hidden>
              <AnimatedWords text="We design, build" immediate delay={0.05} />
              <br />
              <AnimatedWords text="and grow your" immediate delay={0.2} />
              <br />
              <RotatingWord words={offerings} />
            </span>
          </h1>
        </Reveal>

        <Reveal immediate delay={0.1} className="lg:col-span-4 lg:pb-3">
          <p className="text-lg text-muted-foreground">
            Websites and apps for teams in Sweden, the UAE and Saudi Arabia, plus stores, listings and ads on Shopify,
            Amazon and four more marketplaces. One team, from design to growth.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <ButtonLink href="/contact">
              Book a call <ArrowRight size={16} />
            </ButtonLink>
            <ButtonLink href="/portfolio" variant="secondary">
              See our work
            </ButtonLink>
          </div>
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
            {["Free first call", "Reply within one business day"].map((item) => (
              <li key={item} className="flex items-center gap-1.5">
                <Check size={14} className="text-link" aria-hidden />
                {item}
              </li>
            ))}
          </ul>

          {featuredQuote && (
            <figure className="mt-10 border-l-2 border-primary pl-4">
              <blockquote className="text-foreground">&ldquo;{featuredQuote.quote}&rdquo;</blockquote>
              <figcaption className="mt-3 flex items-center gap-3">
                <ReviewAvatar name={featuredQuote.person.name} img={featuredQuote.person.img} size={32} />
                <span className="text-sm">
                  <span className="font-semibold text-foreground">{featuredQuote.person.name}</span>
                  <span className="text-muted-foreground"> · {featuredQuote.person.role}</span>
                </span>
              </figcaption>
            </figure>
          )}
        </Reveal>
      </div>

      <Reveal delay={0.12} className="mt-16 lg:mt-20">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 border-y border-border py-8 md:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="flex flex-col-reverse">
              <dt className="mt-1 text-sm text-muted-foreground">{fact.label}</dt>
              <dd className="font-display text-3xl font-semibold text-foreground sm:text-4xl">{fact.value}</dd>
            </div>
          ))}
        </dl>
        <div className="flex flex-col gap-4 py-8 md:flex-row md:items-center md:gap-10">
          <p className="shrink-0 text-sm text-muted-foreground">Trusted by teams at</p>
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {clientNames.map((name) => (
              <li key={name} className="font-display text-lg font-semibold text-foreground/70 sm:text-xl">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
