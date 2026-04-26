import Link from "next/link";
import { MessageCircle, Send, Mail, Globe, MapPin } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-glass-border">
      <svg
        className="absolute -top-px left-0 right-0 w-full text-background"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
      >
        <path
          d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z"
          fill="currentColor"
          opacity="0.4"
        />
      </svg>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
                <Image src="/assets/logo.svg" alt="DANKHA Logo" width={120} height={36} />
            </Link>
            <p className="mt-5 max-w-sm text-sm text-muted-foreground leading-relaxed">
              We craft scalable digital experiences across IT, Ecommerce and Marketing —
              built to perform, designed to delight.
            </p>
            <div className="mt-6 flex gap-3">
              {[MessageCircle, Send, Mail, Globe, MapPin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="group h-10 w-10 inline-flex items-center justify-center rounded-lg glass hover:scale-110 hover:text-secondary transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Company links">
            <h4 className="font-display text-sm font-semibold mb-4 tracking-wider uppercase text-foreground">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-foreground transition">About</Link></li>
              <li><Link href="/portfolio" className="hover:text-foreground transition">Portfolio</Link></li>
            </ul>
          </nav>

          <div>
            <h4 className="font-display text-sm font-semibold mb-4 tracking-wider uppercase text-foreground">
              Get in touch
            </h4>
            <address className="not-italic space-y-3 text-sm text-muted-foreground">
              <p><a href="mailto:hello@dankha.com" className="hover:text-foreground transition">hello@dankha.com</a></p>
              <p><a href="tel:+15550102024" className="hover:text-foreground transition">+1 (555) 010-2024</a></p>
              <p>San Francisco &middot; Remote</p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-glass-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} DANKHA. All rights reserved.</p>
          <p>Crafted with precision · Built to scale</p>
        </div>
      </div>
    </footer>
  );
}
