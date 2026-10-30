"use client";

import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "lucide-react";
import { useContactForm } from "@/hooks/useContactForm";
import { toast } from "sonner";
import { BusinessLocation, BusinessServiceArea, ContactEmail, PhoneNumber } from "@/data/commonConstants";
import { socialLinks } from "@/components/Home/data";
import type { ContactFormData } from "@/lib/validations/contact";
import { AnimatedHeading } from "@/app/_components/AnimatedHeading";

const whatsappUrl = `https://wa.me/${PhoneNumber.replace(/[^\d]/g, "")}`;

function ContactPage() {
  const { register, handleSubmit, onSubmit, errors, isSubmitting } = useContactForm();

  const handleFormSubmit = async (data: ContactFormData) => {
    try {
      await onSubmit(data);
    } catch {
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pb-14 pt-12 sm:px-6 md:pt-20 lg:px-8 lg:pb-18">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-16">
          <Reveal immediate className="lg:col-span-5">
            <p className="text-sm font-medium text-link">Contact</p>
            <AnimatedHeading as="h1" immediate text="Book a call." className="mt-3 font-display text-4xl font-semibold text-foreground sm:text-5xl lg:text-6xl" />
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Tell us what you&apos;re building or selling and what you need. We reply within one business day.
            </p>

            <dl className="mt-12 space-y-6">
              <div>
                <dt className="text-sm text-muted-foreground">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${ContactEmail}`} className="font-display text-xl font-semibold text-foreground hover:text-link">
                    {ContactEmail}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Phone</dt>
                <dd className="mt-1">
                  <a
                    href={`tel:${PhoneNumber.replace(/\s/g, "")}`}
                    className="font-display text-xl font-semibold text-foreground hover:text-link"
                  >
                    {PhoneNumber}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">WhatsApp</dt>
                <dd className="mt-1">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-display text-xl font-semibold text-foreground hover:text-link"
                  >
                    Message us <ArrowRight size={16} />
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Office</dt>
                <dd className="mt-1 text-foreground">
                  {BusinessLocation}. {BusinessServiceArea}.
                </dd>
              </div>
            </dl>

            <div className="mt-8 flex gap-4 text-muted-foreground">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="transition-colors hover:text-foreground"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal immediate delay={0.08} className="lg:col-span-7">
            <form
              onSubmit={handleSubmit(handleFormSubmit)}
              noValidate
              className="space-y-6"
            >
              <div className="grid gap-6 md:grid-cols-2">
                <Field label="Name" id="name" autoComplete="name" register={register} error={errors.name?.message} />
                <Field
                  label="Email"
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  register={register}
                  error={errors.email?.message}
                />
                <Field
                  label="Phone (optional)"
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  register={register}
                  error={errors.phone?.message}
                />
                <Field
                  label="Subject (optional)"
                  id="subject"
                  placeholder="e.g. New website, Amazon listings audit"
                  register={register}
                  error={errors.subject?.message}
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                  What do you need?
                </label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Your website, app or store, and what you need help with."
                  aria-invalid={errors.message ? true : undefined}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={inputClass}
                  {...register("message")}
                />
                {errors.message && (
                  <p id="message-error" className="mt-2 text-sm text-destructive">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {isSubmitting ? "Sending…" : "Send message"}
                {!isSubmitting && <ArrowRight size={16} />}
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      <section aria-label="Office location" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative h-80 overflow-hidden rounded-lg border border-border">
            <iframe
              title="Dankha office location in Lahore"
              src="https://www.openstreetmap.org/export/embed.html?bbox=74.26%2C31.33%2C74.46%2C31.55&layer=mapnik"
              className="h-full w-full grayscale-40"
              loading="lazy"
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}

export default ContactPage;

const inputClass =
  "w-full rounded-md border border-border bg-transparent px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary aria-invalid:border-destructive";

function Field({
  label,
  id,
  type = "text",
  placeholder,
  autoComplete,
  register,
  error,
}: {
  label: string;
  id: keyof ContactFormData;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  register: ReturnType<typeof useContactForm>["register"];
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={inputClass}
        {...register(id)}
      />
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
