import { Reveal } from "@/components/Reveal";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  EyeIcon,
  SparklesIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export function MissionVisionValues() {
  return (
    <section className="mx-auto mt-24 max-w-6xl">
      <div className="grid gap-4 md:grid-cols-2 md:grid-rows-2">
        <Reveal delay={0} className="md:row-span-2">
          <div className="group relative flex h-full min-h-72 flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-card/60 p-8 backdrop-blur-sm transition duration-300 hover:border-secondary/30">
            <span
              aria-hidden
              className="pointer-events-none absolute -right-4 -top-6 select-none font-display text-[9rem] font-black leading-none text-white/3"
            >
              01
            </span>

            <div>
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-secondary/25 bg-secondary/10 text-secondary">
                <MapPinIcon className="h-5 w-5" />
              </div>

              <h3 className="mt-6 font-display text-3xl font-semibold leading-tight">
                Mission
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Help ambitious companies turn complex ideas into elegant,
                scalable products — without the overhead of a bloated agency.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Outcomes over deliverables",
                  "Execution with intention",
                  "Speed without sacrificing quality",
                  "Long-term partnerships over one-off projects",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    {point}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Every engagement starts with understanding your business, not
                just your brief. We build toward outcomes that compound — not
                outputs that expire.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-card/60 p-7 backdrop-blur-sm transition duration-300 hover:border-secondary/30">
            <span
              aria-hidden
              className="pointer-events-none absolute -right-3 -top-4 select-none font-display text-[7rem] font-black leading-none text-white/3"
            >
              02
            </span>

            <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-secondary/25 bg-secondary/10 text-secondary">
              <EyeIcon className="h-5 w-5" />
            </div>
            <div className="mt-5">
              <h3 className="font-display text-2xl font-semibold">Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                A web that is faster, more useful, and more delightful — built
                by teams who care about the craft behind every pixel.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-card/60 p-7 backdrop-blur-sm transition duration-300 hover:border-secondary/30">
            <span
              aria-hidden
              className="pointer-events-none absolute -right-3 -top-4 select-none font-display text-[7rem] font-black leading-none text-white/3"
            >
              03
            </span>

            <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-secondary/25 bg-secondary/10 text-secondary">
              <SparklesIcon className="h-5 w-5" />
            </div>
            <div className="mt-5">
              <h3 className="font-display text-2xl font-semibold">Values</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Craft, candor, curiosity. We say what we mean, ship what we
                promise, and never stop improving.
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Craft", "Candor", "Curiosity"].map((v) => (
                <span
                  key={v}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
