import type { Metadata } from "next";
import { seoMetadata } from "@/sanity/seo";
import { AnimatedHeading } from "@/app/_components/AnimatedHeading";

const fallbackMetadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Dankha uses the name, email, phone number and message you send through our contact form, and which analytics and map services this website uses.",
  alternates: { canonical: "https://www.dankha.co/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | Dankha",
    description:
      "Learn how Dankha handles information submitted through its contact form and website.",
    url: "https://www.dankha.co/privacy-policy",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return seoMetadata("/privacy-policy", fallbackMetadata);
}

export default function PrivacyPolicyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 pb-8 pt-12 sm:px-6 md:pt-20 lg:px-8">
      <header>
        <p className="text-sm font-medium text-link">Legal</p>
        <AnimatedHeading as="h1" immediate text="Privacy policy" className="mt-4 font-display text-4xl font-semibold text-foreground sm:text-5xl" />
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          This page explains what information Dankha receives through this
          website and how that information is used.
        </p>
      </header>

      <div className="mt-14 space-y-10 text-muted-foreground">
        <section>
          <AnimatedHeading text="Information you submit" className="font-display text-2xl font-semibold text-foreground" />
          <p className="mt-3">
            The contact form asks for your name, email address, phone number,
            subject, and message. These details are submitted when you choose
            to send a project enquiry.
          </p>
        </section>

        <section>
          <AnimatedHeading text="How we use it" className="font-display text-2xl font-semibold text-foreground" />
          <p className="mt-3">
            Dankha uses contact form submissions to review and respond to your
            enquiry. We don&apos;t use your details for any other purpose. To
            limit spam, the form also records the IP address each message is
            sent from.
          </p>
        </section>

        <section>
          <AnimatedHeading text="Analytics, cookies, and third parties" className="font-display text-2xl font-semibold text-foreground" />
          <p className="mt-3">
            The site uses Vercel Analytics. The contact form is processed by
            Dankha&apos;s application and its configured email delivery service.
            The site also embeds OpenStreetMap on the contact page. We don&apos;t
            use any other analytics, advertising or tracking services.
          </p>
        </section>

        <section>
          <AnimatedHeading text="Contact" className="font-display text-2xl font-semibold text-foreground" />
          <p className="mt-3">
            For privacy questions or requests about a contact form submission,
            email Dankha at{" "}
            <a className="text-link underline hover:text-foreground" href="mailto:info@dankha.co">
              info@dankha.co
            </a>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
