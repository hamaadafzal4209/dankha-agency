import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  BarChart3,
  Briefcase,
  Brush,
  Code2,
  Compass,
  CreditCard,
  Globe,
  Layout,
  Megaphone,
  Paintbrush,
  PenTool,
  Search,
  Server,
  Share2,
  ShoppingBag,
  Smartphone,
  Sparkles,
  SwatchBook,
} from "lucide-react";

type ServicePageContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  heroPoints: string[];
  subServices: { title: string; description: string; icon: React.ComponentType<{ size?: number; className?: string }> }[];
};

const servicePages: Record<string, ServicePageContent> = {
  it: {
    eyebrow: "IT Solutions",
    title: "Build reliable digital products that scale.",
    subtitle:
      "From architecture to deployment, we deliver robust systems designed for performance, security, and long-term growth.",
    heroPoints: ["Product engineering", "Cloud infrastructure", "Security & scalability"],
    subServices: [
      { title: "Web Application Development", description: "Custom platforms built with modern stacks for speed, stability, and maintainability.", icon: Code2 },
      { title: "Mobile App Development", description: "Cross-platform and native mobile experiences built for usability and reliability.", icon: Smartphone },
      { title: "System Architecture", description: "Scalable architecture planning for high traffic, complex workflows, and future growth.", icon: Layout },
      { title: "Backend & API Engineering", description: "Secure, well-structured APIs and backend systems that power modern digital products.", icon: Server },
      { title: "Cloud & DevOps", description: "CI/CD, automated deployment pipelines, and cloud environments tuned for uptime.", icon: Globe },
      { title: "Technical Consulting", description: "Clear technical direction for product roadmaps, migrations, and platform decisions.", icon: Briefcase },
    ],
  },
  ecommerce: {
    eyebrow: "Ecommerce",
    title: "Launch and optimize stores that convert.",
    subtitle:
      "We build ecommerce ecosystems that improve shopper trust, reduce friction, and increase revenue across channels.",
    heroPoints: ["Store strategy", "Conversion optimization", "Growth-ready commerce"],
    subServices: [
      { title: "Store Setup & Launch", description: "End-to-end setup for Shopify, WooCommerce, and custom commerce builds.", icon: ShoppingBag },
      { title: "UX for Conversion", description: "Checkout, product pages, and customer journeys optimized for higher conversion rates.", icon: Compass },
      { title: "Payment Integration", description: "Secure payment gateways, wallets, and subscription billing tailored to your model.", icon: CreditCard },
      { title: "Catalog & Inventory Structure", description: "Smart product structuring and inventory flows for smooth operations at scale.", icon: Layout },
      { title: "Performance Optimization", description: "Faster storefront speed, cleaner UX, and technical fixes that reduce drop-offs.", icon: BarChart3 },
      { title: "International Commerce", description: "Multi-region stores with currency, language, and shipping localization.", icon: Globe },
    ],
  },
  marketing: {
    eyebrow: "Marketing",
    title: "Create marketing engines that compound growth.",
    subtitle:
      "We blend strategy, creative execution, and analytics to generate consistent qualified demand.",
    heroPoints: ["Data-backed campaigns", "Brand growth", "Performance marketing"],
    subServices: [
      { title: "Marketing Strategy", description: "Positioning, offer strategy, and channel planning aligned with business goals.", icon: Compass },
      { title: "SEO & Content Growth", description: "Technical SEO, content plans, and authority building for long-term visibility.", icon: Search },
      { title: "Paid Advertising", description: "High-performance campaigns across Google, Meta, and other paid channels.", icon: BarChart3 },
      { title: "Social Media Management", description: "Content calendars, creative direction, and engagement-focused social execution.", icon: Share2 },
      { title: "Brand Messaging", description: "Clear messaging frameworks that sharpen your value proposition and voice.", icon: Megaphone },
      { title: "Analytics & Reporting", description: "Attribution, dashboards, and reporting systems for confident decision-making.", icon: Sparkles },
    ],
  },
  designing: {
    eyebrow: "Designing",
    title: "Design experiences that feel clear, premium, and memorable.",
    subtitle:
      "We create cohesive design systems and brand experiences that make your product look and feel world-class.",
    heroPoints: ["Brand identity", "UI/UX systems", "Creative direction"],
    subServices: [
      { title: "Brand Identity Design", description: "Logos, typography, color systems, and visual language built for recognition.", icon: Paintbrush },
      { title: "UI/UX Design", description: "User-first interface and experience design for websites, apps, and dashboards.", icon: PenTool },
      { title: "Design Systems", description: "Reusable component systems for consistency, speed, and scalable design operations.", icon: SwatchBook },
      { title: "Website Design", description: "High-impact website layouts balancing storytelling, usability, and conversion.", icon: Layout },
      { title: "Visual Creative Assets", description: "Campaign graphics, social creatives, and launch assets for digital channels.", icon: Brush },
      { title: "Design Direction", description: "Ongoing creative leadership to keep visuals polished and strategically aligned.", icon: Compass },
    ],
  },
};

type ServiceStep = {
  title: string;
  description: string;
};

type ServiceFaq = {
  question: string;
  answer: string;
};

const serviceApproach: Record<string, ServiceStep[]> = {
  it: [
    {
      title: "Discovery & architecture",
      description: "We map business goals to system architecture, define boundaries, and reduce technical risk early.",
    },
    {
      title: "Build & integration",
      description: "Our team ships features in short cycles, integrates with your stack, and keeps quality gates strict.",
    },
    {
      title: "Launch & optimization",
      description: "After launch, we monitor performance, harden security, and iterate against real user behavior.",
    },
  ],
  ecommerce: [
    {
      title: "Store audit",
      description: "We evaluate friction in catalog, cart, and checkout to identify the highest-impact opportunities.",
    },
    {
      title: "UX & conversion execution",
      description: "We redesign critical journeys and implement improvements that increase trust and purchase intent.",
    },
    {
      title: "Growth loop",
      description: "We establish experimentation, reporting, and optimization cycles for compounding performance gains.",
    },
  ],
  marketing: [
    {
      title: "Positioning & strategy",
      description: "We align your offer, audience, and channels into a clear plan with measurable goals.",
    },
    {
      title: "Campaign production",
      description: "Our team launches channel-specific creative and copy tailored to each stage of the funnel.",
    },
    {
      title: "Measurement & scaling",
      description: "We optimize with attribution insights, budget reallocation, and continuous creative iteration.",
    },
  ],
  designing: [
    {
      title: "Brand and UX discovery",
      description: "We capture voice, audience expectations, and product goals before touching visual direction.",
    },
    {
      title: "Design system buildout",
      description: "We craft reusable visual and interaction patterns to ensure consistency across every touchpoint.",
    },
    {
      title: "Delivery & evolution",
      description: "Design assets, handoff files, and iteration loops keep your brand sharp as your business grows.",
    },
  ],
};

const serviceOutcomes: Record<string, string[]> = {
  it: [
    "Faster shipping velocity with clearer engineering workflows",
    "Higher reliability, uptime, and platform resilience",
    "Security-aware architecture ready for scale",
    "Technical decisions aligned with long-term product growth",
  ],
  ecommerce: [
    "Improved conversion rates across product and checkout flows",
    "Lower drop-off through streamlined purchase journeys",
    "Stronger repeat purchase and customer retention",
    "Operational clarity with cleaner commerce integrations",
  ],
  marketing: [
    "More qualified pipeline from better channel targeting",
    "Higher ROAS through data-led campaign optimization",
    "Sharper brand message across all customer touchpoints",
    "Reliable reporting cadence for faster decisions",
  ],
  designing: [
    "A stronger, more recognizable visual identity",
    "Cleaner UX that improves clarity and confidence",
    "Consistent design language across product and marketing",
    "Production-ready assets that speed up execution",
  ],
};

const serviceFaqs: Record<string, ServiceFaq[]> = {
  it: [
    {
      question: "Can you work with our existing codebase?",
      answer: "Yes. We usually begin with a technical audit, then propose a phased plan to improve quality without slowing delivery.",
    },
    {
      question: "Do you handle cloud and DevOps too?",
      answer: "Yes. We support CI/CD, deployment workflows, observability, and cloud architecture decisions.",
    },
  ],
  ecommerce: [
    {
      question: "Do you support Shopify and custom stacks?",
      answer: "Yes. We work across Shopify, WooCommerce, and headless builds depending on your business model.",
    },
    {
      question: "How do you measure ecommerce success?",
      answer: "We track conversion, average order value, checkout completion, and retention indicators tied to revenue.",
    },
  ],
  marketing: [
    {
      question: "Do you only run ads, or full-funnel marketing?",
      answer: "We handle full-funnel strategy including messaging, paid channels, content, and reporting.",
    },
    {
      question: "How quickly can campaigns go live?",
      answer: "Initial campaigns typically launch within 1-3 weeks depending on assets, tracking readiness, and channel scope.",
    },
  ],
  designing: [
    {
      question: "Can you design and hand off to our dev team?",
      answer: "Absolutely. We deliver structured files, design tokens, and implementation notes to make handoff smooth.",
    },
    {
      question: "Do you offer brand and product design together?",
      answer: "Yes. We often combine identity, UX, and design systems so your brand feels consistent across every surface.",
    },
  ],
};

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
            Included Sub-services
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Every engagement is tailored, but these are the most common scopes we deliver under this service.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {service.subServices.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-white/10 glass p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20">
                <div className="absolute -right-6 -top-6 text-white/5 transition group-hover:text-white/10">
                  <item.icon size={68} />
                </div>

                <div className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-400/12 text-cyan-300">
                  <item.icon size={20} />
                </div>
                <h3 className="relative mt-4 font-display text-lg font-semibold">{item.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </article>
            </Reveal>
          ))}
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
