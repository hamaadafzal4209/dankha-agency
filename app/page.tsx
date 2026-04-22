"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  ShoppingBag,
  Megaphone,
  Sparkles,
  Star,
  Quote,
  Zap,
  TrendingUp,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const services = [
  {
    icon: Code2,
    title: "IT & Engineering",
    desc: "Web, mobile, SaaS and AI-powered platforms built on a solid foundation.",
  },
  {
    icon: ShoppingBag,
    title: "Ecommerce",
    desc: "Shopify, WooCommerce and bespoke storefronts that convert and scale.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "SEO, paid media and content strategy to grow your reach with precision.",
  },
];

const stats = [
  { value: "120+", label: "Projects shipped", icon: Zap },
  { value: "48", label: "Happy clients", icon: Users },
  { value: "9.4×", label: "Avg. ROI", icon: TrendingUp },
  { value: "12", label: "Industry awards", icon: Star },
];

const projects = [
  { title: "Lumen Commerce", tag: "Ecommerce", color: "from-[#39587b] to-[#3fa1ad]" },
  { title: "NovaBank SaaS", tag: "IT Platform", color: "from-[#3fa1ad] to-[#39587b]" },
  { title: "Atlas Travel", tag: "Marketing", color: "from-[#2a4263] to-[#3fa1ad]" },
];

const testimonials = [
  {
    quote:
      "DANKHA rebuilt our entire commerce stack and our conversion jumped 187% in three months.",
    name: "Elena Marchetti",
    role: "CEO · Lumen",
  },
  {
    quote:
      "A rare team that gets engineering, design and growth. They feel like an extension of our company.",
    name: "Marcus Chen",
    role: "Head of Product · NovaBank",
  },
  {
    quote: "From strategy to launch they were sharp, calm and obsessed with quality.",
    name: "Priya Anand",
    role: "Founder · Atlas",
  },
];

function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesPreview />
      <AboutIntro />
      <Portfolio />
      <Testimonials />
      <CTA />
    </>
  );
}

export default HomePage;

function Hero() {
  return (
    <section className="relative pt-10 pb-32 px-6">
      <div className="mx-auto max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium tracking-wider uppercase text-secondary"
        >
          <Sparkles size={12} />
          Premium digital agency
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance leading-[1.05]"
        >
          We build{" "}
          <span className="gradient-text-bright">digital experiences</span>
          <br />
          that scale.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed text-balance"
        >
          Engineering, ecommerce and marketing — under one roof. We design, build and
          grow products with the rigor of a studio and the speed of a startup.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white gradient-primary overflow-hidden shadow-elegant"
          >
            <span className="relative z-10">Get started</span>
            <ArrowRight size={16} className="relative z-10 transition-transform group-hover:translate-x-1" />
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition gradient-glow blur-xl" />
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold glass hover:bg-white/10 transition"
          >
            View our work
          </Link>
        </motion.div>

        <FloatingHeroVisual />
      </div>
    </section>
  );
}

function FloatingHeroVisual() {
  return (
    <div className="relative mt-24 mx-auto h-[340px] md:h-[420px] max-w-5xl">
      {/* Center orb */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full blur-3xl gradient-primary opacity-50 animate-glow-pulse" />
          <div className="relative h-56 w-56 md:h-72 md:w-72 rounded-full glass-strong border border-glass-border flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 gradient-primary opacity-30" />
            <div className="absolute inset-4 rounded-full border border-secondary/30 animate-spin-slow" />
            <div className="absolute inset-10 rounded-full border border-primary-glow/30" />
            <span className="relative font-display text-6xl md:text-7xl font-black gradient-text-bright">
              D
            </span>
          </div>
        </div>
      </motion.div>

      {/* Floating cards */}
      {[
        { icon: Code2, label: "Web Apps", x: "8%", y: "10%", delay: 0.7 },
        { icon: ShoppingBag, label: "Ecommerce", x: "78%", y: "15%", delay: 0.85 },
        { icon: Megaphone, label: "Marketing", x: "10%", y: "70%", delay: 1.0 },
        { icon: Sparkles, label: "AI Tools", x: "75%", y: "68%", delay: 1.15 },
      ].map((c, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: c.delay }}
          style={{ left: c.x, top: c.y }}
          className="absolute"
        >
          <div className="animate-float" style={{ animationDelay: `-${i}s` }}>
            <div className="glass-strong rounded-2xl px-4 py-3 flex items-center gap-2.5 shadow-elegant">
              <div className="h-9 w-9 rounded-lg gradient-primary flex items-center justify-center text-white">
                <c.icon size={16} />
              </div>
              <span className="font-display text-sm font-semibold whitespace-nowrap">
                {c.label}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function StatsBar() {
  return (
    <section className="px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="glass-strong rounded-3xl p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <s.icon className="mx-auto mb-3 text-secondary" size={20} />
                <div className="font-display text-3xl md:text-4xl font-bold gradient-text-bright">
                  {s.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What we do"
          title="Three disciplines, one obsession with quality."
          description="We blend engineering, commerce and growth into a single seamless practice."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="group relative h-full rounded-3xl glass-strong p-8 transition-all duration-500 hover:-translate-y-2 hover:border-secondary/40">
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 gradient-primary -z-10 blur-2xl" />
                <div className="relative h-14 w-14 rounded-2xl gradient-primary flex items-center justify-center text-white shadow-elegant">
                  <s.icon size={22} />
                  <div className="absolute inset-0 rounded-2xl gradient-primary blur-xl opacity-60 -z-10 group-hover:opacity-100 transition" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <Link
                  href="/services"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-secondary hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutIntro() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 rounded-3xl gradient-primary opacity-30 blur-3xl" />
            <div className="relative h-full w-full rounded-3xl glass-strong overflow-hidden p-8 grid grid-cols-2 gap-4">
              {[0,1,2,3].map((i) => (
                <div
                  key={i}
                  className="rounded-2xl gradient-primary opacity-80 animate-float"
                  style={{ animationDelay: `-${i}s`, opacity: 0.4 + i * 0.15 }}
                />
              ))}
            </div>
          </div>
        </Reveal>
        <div>
          <SectionHeading
            eyebrow="About DANKHA"
            title="A studio built for the next decade of the internet."
            description="We are a small senior team obsessed with craft. We work shoulder-to-shoulder with founders and product leaders to ship work that performs in the real world."
            align="left"
          />
          <Reveal delay={0.3}>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold glass hover:bg-white/10 transition"
            >
              Our story <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Selected work"
          title="A few projects we're proud of."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <Link
                href="/portfolio"
                className="group relative block aspect-[4/5] rounded-3xl overflow-hidden glass-strong"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-80`} />
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute inset-0 transition duration-500 group-hover:scale-110 flex items-center justify-center">
                  <div className="font-display text-7xl font-black text-white/10">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="text-xs uppercase tracking-wider text-white/70">{p.tag}</div>
                  <h3 className="mt-1 font-display text-2xl font-bold text-white">{p.title}</h3>
                </div>
                <div className="absolute top-4 right-4 h-10 w-10 rounded-full glass-strong flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <ArrowRight size={16} className="text-white" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Kind words" title="Trusted by ambitious teams." />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="group h-full rounded-3xl glass-strong p-8 transition hover:-translate-y-1">
                <Quote className="text-secondary" size={28} />
                <p className="mt-4 text-sm md:text-base text-foreground/90 leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="mt-6 pt-6 border-t border-glass-border">
                  <div className="font-display font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl glass-strong p-10 md:p-16 text-center">
            <div className="absolute inset-0 gradient-primary opacity-20" />
            <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full gradient-primary blur-3xl opacity-40" />
            <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-secondary blur-3xl opacity-30" />
            <div className="relative">
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-balance">
                Have an ambitious idea? <br />
                <span className="gradient-text-bright">Let's build it together.</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                Tell us about your project. We'll respond within one business day.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white gradient-primary shadow-elegant hover:scale-105 transition"
              >
                Start a project <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
