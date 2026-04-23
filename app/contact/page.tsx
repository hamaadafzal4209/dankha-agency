"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Mail, MapPin, Phone, Send, MessageCircle, Globe, Sparkles, GitBranch, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function ContactPage() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="px-6 pb-32">
      <section className="mx-auto max-w-5xl pt-10 text-center">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something extraordinary."
          description="Tell us about your project — we'll reply within one business day."
        />
      </section>

      <section className="mx-auto max-w-6xl mt-16 grid gap-8 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <form
            onSubmit={onSubmit}
            className="rounded-3xl glass-strong p-8 md:p-10 space-y-6"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Name" id="name" placeholder="Your full name" />
              <Field label="Email" id="email" type="email" placeholder="you@company.com" />
            </div>
            <Field label="Company" id="company" placeholder="Optional" />
            <div>
              <label htmlFor="message" className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                required
                placeholder="Tell us about your project, timeline and goals..."
                className="w-full rounded-xl bg-white/5 border border-glass-border px-4 py-3 text-sm outline-none transition focus:border-secondary focus:bg-white/[0.07] resize-none"
              />
            </div>

            <button
              type="submit"
              className="group relative inline-flex items-center justify-center gap-2 w-full md:w-auto rounded-full px-7 py-3.5 text-sm font-semibold text-white gradient-primary overflow-hidden shadow-elegant"
            >
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.span
                    key="ok"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="inline-flex items-center gap-2"
                  >
                    <Check size={16} /> Message sent
                  </motion.span>
                ) : (
                  <motion.span
                    key="send"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="inline-flex items-center gap-2"
                  >
                    Send message <Send size={14} />
                  </motion.span>
                )}
              </AnimatePresence>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition gradient-glow blur-xl" />
            </button>
          </form>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-2">
          <div className="space-y-4 h-full">
            <InfoCard icon={Mail} label="Email" value="hello@dankha.com" />
            <InfoCard icon={Phone} label="Phone" value="+1 (555) 010-2024" />
            <InfoCard icon={MapPin} label="Studio" value="San Francisco · Remote" />

            <div className="rounded-3xl glass-strong p-6">
              <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
                Follow us
              </div>
              <div className="flex gap-3">
                {[MessageCircle, Globe, Sparkles, GitBranch].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="group h-11 w-11 inline-flex items-center justify-center rounded-xl glass hover:scale-110 hover:text-secondary transition-all"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl mt-16">
        <Reveal>
          <div className="rounded-3xl glass-strong overflow-hidden h-90 relative">
            <iframe
              title="DANKHA office location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-122.45%2C37.75%2C-122.39%2C37.79&layer=mapnik"
              className="w-full h-full grayscale-40 contrast-110"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent" />
          </div>
        </Reveal>
      </section>
    </div>
  );
}

export default ContactPage;

function Field({
  label,
  id,
  type = "text",
  placeholder,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={type !== "text" || id === "name"}
        placeholder={placeholder}
        className="w-full rounded-xl bg-white/5 border border-glass-border px-4 py-3 text-sm outline-none transition focus:border-secondary focus:bg-white/[0.07]"
      />
    </div>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ size?: number }>;
  label: string;
  value: string;
}) {
  return (
    <div className="group rounded-3xl glass-strong p-6 flex items-center gap-4 transition hover:-translate-y-0.5 hover:border-secondary/40">
      <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center text-white shadow-elegant">
        <Icon size={18} />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="font-display font-semibold mt-0.5">{value}</div>
      </div>
    </div>
  );
}
