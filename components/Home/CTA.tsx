import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/app/_components/ButtonLink";
import { ContactEmail, PhoneNumber } from "@/data/commonConstants";
import { AnimatedHeading } from "@/app/_components/AnimatedHeading";

export function CTA({
  title = "Have a project in mind?",
  description = "A website, an app, a store or a campaign. Tell us about it and we'll reply within one business day.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section aria-label="Contact us" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Reveal>
        <div className="grid gap-10 pt-14 lg:grid-cols-12 lg:items-end lg:gap-16 lg:pt-18">
          <div className="lg:col-span-7">
            <AnimatedHeading text={title} className="font-display text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl" />
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">{description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">
                Book a call <ArrowRight size={16} />
              </ButtonLink>
              <ButtonLink href="/portfolio" variant="secondary">
                See our work
              </ButtonLink>
            </div>
          </div>
          <dl className="space-y-4 lg:col-span-5 lg:border-l lg:border-border lg:pl-12">
            <div>
              <dt className="text-sm text-muted-foreground">Email</dt>
              <dd>
                <a href={`mailto:${ContactEmail}`} className="font-display text-xl font-semibold text-foreground hover:text-link">
                  {ContactEmail}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground">Phone and WhatsApp</dt>
              <dd>
                <a
                  href={`tel:${PhoneNumber.replace(/\s/g, "")}`}
                  className="font-display text-xl font-semibold text-foreground hover:text-link"
                >
                  {PhoneNumber}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </Reveal>
    </section>
  );
}
