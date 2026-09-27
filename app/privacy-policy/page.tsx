import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Dankha handles information submitted through its contact form and website.",
  alternates: { canonical: "https://www.dankha.co/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | Dankha",
    description:
      "Learn how Dankha handles information submitted through its contact form and website.",
    url: "https://www.dankha.co/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <article className="mx-auto max-w-4xl px-6 pb-32 pt-12">
      <header>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-secondary">
          Dankha
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
          Privacy Policy
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          This page explains what information Dankha receives through this
          website and how that information is used.
        </p>
      </header>

      <div className="mt-14 space-y-10 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="font-display text-2xl font-semibold text-foreground">
            Information you submit
          </h2>
          <p className="mt-3">
            The contact form asks for your name, email address, phone number,
            subject, and message. These details are submitted when you choose
            to send a project enquiry.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-foreground">
            How we use it
          </h2>
          <p className="mt-3">
            Dankha uses contact form submissions to review and respond to your
            enquiry. The website does not use submitted information for a
            different purpose described here.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-foreground">
            Analytics, cookies, and third parties
          </h2>
          <p className="mt-3">
            The site uses Vercel Analytics. The contact form is processed by
            Dankha&apos;s application and its configured email delivery service.
            The site also embeds OpenStreetMap on the contact page. No other
            analytics, cookies, or third-party services are described by the
            current application configuration.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-foreground">
            Contact
          </h2>
          <p className="mt-3">
            For privacy questions or requests about a contact form submission,
            email Dankha at{" "}
            <a className="text-secondary hover:text-foreground" href="mailto:info@dankha.co">
              info@dankha.co
            </a>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
