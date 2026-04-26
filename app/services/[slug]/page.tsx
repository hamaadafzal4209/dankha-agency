import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { ServiceSubcategoryDrawer } from "@/components/services/ServiceSubcategoryDrawer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SERVICE_ICON_MAP } from "@/data/service-icons";
import { serviceApproach, serviceFaqs, serviceOutcomes, servicePages } from "@/data/service-details";

export function generateStaticParams() {
  return Object.keys(servicePages).map((slug) => ({ slug }));
}

async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicePages[slug];

  if (!service) {
    notFound();
  }

  const approach = serviceApproach[slug] ?? [];
  const outcomes = serviceOutcomes[slug] ?? [];
  const faqs = serviceFaqs[slug] ?? [];

  return (
    <div className="px-6 pb-28 pt-10">
      <section className="mx-auto max-w-7xl rounded-3xl border border-white/10 glass-strong p-8 md:p-12">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-secondary">
            {service.eyebrow}
          </div>
        </Reveal>

        <Reveal delay={0.04}>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold tracking-tight md:text-6xl">
            <span className="gradient-text-bright">{service.title}</span>
          </h1>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {service.subtitle}
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-7 flex flex-wrap gap-3">
            {service.heroPoints.map((point) => (
              <span
                key={point}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-foreground/85"
              >
                {point}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto mt-14 max-w-7xl">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Subcategories & Sub-services
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Explore focused subcategories for this service. Open any card to view its full detailed scope.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {service.subcategories.map((subcategory, index) => {
            const Icon = SERVICE_ICON_MAP[subcategory.icon];

            return (
              <Reveal key={subcategory.title} delay={index * 0.04}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 glass p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20">
                  <div className="absolute -right-6 -top-6 text-white/5 transition group-hover:text-white/10">
                    <Icon size={68} />
                  </div>

                  <div className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-400/12 text-cyan-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="relative mt-4 font-display text-lg font-semibold">{subcategory.title}</h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                    {subcategory.description}
                  </p>

                  <ul className="relative mt-4 space-y-2">
                    {subcategory.subServices.slice(0, 3).map((subService) => (
                      <li key={subService} className="flex items-start gap-2 text-sm text-foreground/80">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                        <span>{subService}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="relative mt-auto">
                    <ServiceSubcategoryDrawer
                      serviceEyebrow={service.eyebrow}
                      subcategory={subcategory}
                    />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl rounded-3xl border border-white/10 glass p-7 md:p-10">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">How We Work</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            A clear, iterative workflow keeps execution fast without sacrificing quality.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {approach.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.05}>
              <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-xs uppercase tracking-[0.18em] text-secondary">Step {index + 1}</div>
                <h3 className="mt-2 font-display text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 grid max-w-7xl gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="rounded-3xl border border-white/10 glass p-7 md:p-9">
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">Expected Outcomes</h2>
            <ul className="mt-6 space-y-4">
              {outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-3xl border border-white/10 glass p-7 md:p-9">
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">FAQs</h2>
            <Accordion type="single" collapsible className="mt-6 rounded-2xl border border-white/10 bg-white/5 px-5">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`faq-${index}`} className="border-white/10">
                  <AccordionTrigger className="text-base font-semibold text-foreground hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto mt-16 max-w-7xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-8 md:p-12">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl" />
            <div className="absolute -bottom-20 left-1/3 h-56 w-56 rounded-full bg-sky-300/10 blur-3xl" />

            <h2 className="relative max-w-3xl font-display text-3xl font-semibold tracking-tight md:text-5xl">
              Ready to scope your {service.eyebrow.toLowerCase()} project?
            </h2>
            <p className="relative mt-4 max-w-2xl text-muted-foreground md:text-lg">
              Tell us your goals, timeline, and constraints. We will send a focused execution plan with clear next steps.
            </p>

            <div className="relative mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full gradient-primary px-5 py-2.5 text-sm font-semibold text-white"
              >
                Start a project
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

export default ServiceDetailPage;
