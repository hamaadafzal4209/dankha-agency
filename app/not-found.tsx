import { ButtonLink } from "@/app/_components/ButtonLink";
import { AnimatedHeading } from "@/app/_components/AnimatedHeading";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32 lg:px-8">
      <p className="font-display text-sm font-semibold text-link">404</p>
      <AnimatedHeading as="h1" immediate text="This page doesn't exist." className="mt-3 font-display text-4xl font-semibold text-foreground sm:text-5xl lg:text-6xl" />
      <p className="mt-6 max-w-xl text-lg text-muted-foreground">It may have moved, or the link may be wrong.</p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/">Go to the home page</ButtonLink>
        <ButtonLink href="/portfolio" variant="secondary">
          See our work
        </ButtonLink>
      </div>
    </section>
  );
}
