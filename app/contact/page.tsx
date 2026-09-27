"use client";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import {
  Mail,
  Phone,
  Send,
  MessageCircle,
  Globe,
  Sparkles,
  GitBranch,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useContactForm } from "@/hooks/useContactForm";
import { toast } from "sonner";
import {
  BusinessLocation,
  BusinessServiceArea,
  ContactEmail,
  PhoneNumber,
} from "@/data/commonConstants";
import { socialLinks } from "@/components/Home/data";

function ContactPage() {
  const { register, handleSubmit, onSubmit, errors, isSubmitting } =
    useContactForm();

  const handleFormSubmit = async (data: any) => {
    try {
      await onSubmit(data);
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="px-6 pb-32">
      <section className="mx-auto max-w-5xl pt-10 text-center">
        <h1 className="sr-only">Let&apos;s Build Something Great Together</h1>
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something extraordinary."
          description="Tell us about your project — we'll reply within one business day."
        />
      </section>

      <section className="mx-auto max-w-6xl mt-16 grid gap-8 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <motion.form
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            onSubmit={handleSubmit(handleFormSubmit)}
            className="rounded-3xl glass-strong p-8 md:p-10 space-y-6"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <Field
                label="Name"
                id="name"
                placeholder="Your full name"
                register={register}
                error={errors.name?.message}
              />
              <Field
                label="Email"
                id="email"
                type="email"
                placeholder="you@company.com"
                register={register}
                error={errors.email?.message}
              />
              <Field
                label="Phone"
                id="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                register={register}
                error={errors.phone?.message}
              />
              <Field
                label="Subject"
                id="subject"
                placeholder="Project inquiry"
                register={register}
                error={errors.subject?.message}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell us about your project, timeline and goals..."
                className="w-full rounded-xl bg-white/5 border border-glass-border px-4 py-3 text-sm outline-none transition focus:border-secondary focus:bg-white/[0.07] resize-none"
                {...register("message")}
              />
              {errors.message && (
                <p className="mt-2 text-xs text-red-400">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative inline-flex items-center justify-center gap-2 w-full md:w-auto rounded-full px-7 py-3.5 text-sm font-semibold text-white gradient-primary overflow-hidden shadow-elegant disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <AnimatePresence mode="wait">
                {isSubmitting ? (
                  <motion.span
                    key="sending"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="inline-flex items-center gap-2"
                  >
                    Sending…
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
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition gradient-glow blur-xl group-disabled:opacity-0" />
            </button>
          </motion.form>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-2">
          <div className="space-y-4 h-full">
            <InfoCard
              icon={Mail}
              label="Email"
              value={ContactEmail}
              href={`mailto:${ContactEmail}`}
            />
            <InfoCard
              icon={Phone}
              label="Phone"
              value={PhoneNumber}
              href={`tel:${PhoneNumber.replace(/\s/g, "")}`}
            />

            <div className="rounded-3xl glass-strong p-6">
              <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
                Follow us
              </div>
              <div className="mt-6 flex gap-3">
                {socialLinks.map(({ icon: Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group h-10 w-10 inline-flex items-center justify-center rounded-lg glass hover:scale-110 hover:text-secondary transition-all"
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
          <div className="mb-6 rounded-3xl glass-strong p-6">
            <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
              Office location
            </div>
            <div className="font-display text-2xl font-semibold text-foreground">
              {BusinessLocation}
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              {BusinessServiceArea}. We work with clients remotely across Pakistan and international markets.
            </p>
          </div>
          <div className="rounded-3xl glass-strong overflow-hidden h-90 relative">
            <iframe
              title="DANKHA Lahore office location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=74.26%2C31.33%2C74.46%2C31.55&layer=mapnik"
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
  register,
  error,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  register: any;
  error?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl bg-white/5 border border-glass-border px-4 py-3 text-sm outline-none transition focus:border-secondary focus:bg-white/[0.07]"
        {...register(id)}
      />
      {error && <p className="mt-2 text-xs text-red-400">{error}</p>}
    </div>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ size?: number }>;
  label: string;
  value: string;
  href?: string;
}) {
  const CardContent = () => (
    <div className="group rounded-3xl glass-strong p-6 flex items-center gap-4 transition hover:-translate-y-0.5 hover:border-secondary/40">
      <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center text-white shadow-elegant">
        <Icon size={18} />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">
          {label}
        </div>
        <div className="font-display font-semibold mt-0.5">{value}</div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
}
