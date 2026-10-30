import Link from "next/link";
import { BusinessLocation, ContactEmail, PhoneNumber } from "@/data/commonConstants";
import { Logo } from "@/app/_components/Logo";
import { socialLinks } from "./Home/data";

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy policy" },
];

const serviceLinks = [
  { href: "/services/ecommerce", label: "Ecommerce and marketplaces" },
  { href: "/services/it", label: "Websites and apps" },
  { href: "/services/marketing", label: "Ads, SEO and email" },
  { href: "/services/designing", label: "Brand and design" },
];

export function Footer() {
  return (
    <footer className="mt-14 border-t border-border lg:mt-18">
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link href="/" className="inline-flex" aria-label="Dankha home">
              <Logo />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              We design and build websites, apps and online stores, and run the marketing that grows them. Based in
              Lahore, working with clients worldwide.
            </p>
          </div>

          <nav aria-label="Company" className="md:col-span-2">
            <h2 className="text-sm font-semibold text-foreground">Company</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground transition-colors hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services" className="md:col-span-3">
            <h2 className="text-sm font-semibold text-foreground">Services</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground transition-colors hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <h2 className="text-sm font-semibold text-foreground">Contact</h2>
            <address className="mt-4 space-y-3 text-sm not-italic">
              <p>
                <a href={`mailto:${ContactEmail}`} className="text-foreground transition-colors hover:text-link">
                  {ContactEmail}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${PhoneNumber.replace(/\s/g, "")}`}
                  className="text-foreground transition-colors hover:text-link"
                >
                  {PhoneNumber}
                </a>
              </p>
              <p className="text-muted-foreground">{BusinessLocation}</p>
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Dankha. All rights reserved.</p>
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="transition-colors hover:text-foreground"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
