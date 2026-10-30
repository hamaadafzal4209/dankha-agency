"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import { Logo } from "@/app/_components/Logo";
import { AnimatedThemeToggler } from "@/app/_components/AnimatedThemeToggler";
import { ButtonLink } from "@/app/_components/ButtonLink";
import { ContactEmail, PhoneNumber } from "@/data/commonConstants";
import { socialLinks } from "@/components/Home/data";

/** GSAP's power4.out / power4.inOut, the easing barba.js.org uses for its menu */
const easeOut = [0.22, 1, 0.36, 1] as const;
const easeInOut = [0.83, 0, 0.17, 1] as const;

const panelVariants: Variants = {
  closed: { x: "110%", transition: { duration: 0.5, ease: easeInOut } },
  open: { x: "0%", transition: { duration: 0.8, ease: easeInOut } },
};

const listVariants: Variants = {
  closed: {},
  open: { transition: { delayChildren: 0.3, staggerChildren: 0.06 } },
};

const itemVariants: Variants = {
  closed: { y: 40, opacity: 0 },
  open: { y: 0, opacity: 1, transition: { duration: 0.8, ease: easeOut } },
};

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
] as const;

const themeToggleClass =
  "inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface-2/40 text-muted-foreground transition-colors hover:text-foreground [&_svg]:size-4";

/** On phones both header buttons are circles */
const mobileThemeToggleClass = themeToggleClass.replace("rounded-lg", "rounded-full");

/** Same spring as the filter tabs, so every sliding underline on the site moves alike */
const underlineSpring = { type: "spring", stiffness: 520, damping: 42, mass: 0.9 } as const;

const serviceLinks = [
  { href: "/services", label: "All services" },
  { href: "/services/ecommerce", label: "Ecommerce and marketplaces" },
  { href: "/services/it", label: "Websites and apps" },
  { href: "/services/marketing", label: "Ads, SEO and email" },
  { href: "/services/designing", label: "Brand and design" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const desktopCloseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const currentPathname = pathname ?? "/";

  const isActive = (href: string) =>
    href === "/" ? currentPathname === "/" : currentPathname.startsWith(href);
  const servicesActive = currentPathname.startsWith("/services");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [currentPathname]);

  useEffect(() => {
    return () => {
      if (desktopCloseTimeoutRef.current) {
        clearTimeout(desktopCloseTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;

    body.style.overflow = open ? "hidden" : "";
    html.style.overflow = open ? "hidden" : "";

    return () => {
      body.style.overflow = "";
      html.style.overflow = "";
    };
  }, [open]);

  const openDesktopServices = () => {
    if (desktopCloseTimeoutRef.current) {
      clearTimeout(desktopCloseTimeoutRef.current);
      desktopCloseTimeoutRef.current = null;
    }
    setDesktopServicesOpen(true);
  };

  const closeDesktopServices = () => {
    if (desktopCloseTimeoutRef.current) {
      clearTimeout(desktopCloseTimeoutRef.current);
    }
    desktopCloseTimeoutRef.current = setTimeout(() => {
      setDesktopServicesOpen(false);
    }, 120);
  };

  const linkClass = (active: boolean) =>
    `relative px-3 py-2 text-sm font-medium transition-colors ${
      active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
    }`;

  const activeUnderline = (
    <motion.span
      layoutId="nav-underline"
      aria-hidden
      transition={prefersReducedMotion ? { duration: 0 } : underlineSpring}
      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary"
    />
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[border-color,box-shadow] duration-300 ${
        scrolled || open ? "border-border shadow-[0_8px_24px_-16px_rgb(0_0_0/0.45)]" : "border-transparent"
      }`}
    >
      <div
        aria-hidden
        className={`absolute inset-0 -z-10 transition-colors duration-200 ${scrolled || open ? "bg-background" : "bg-transparent"}`}
      />
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-22 lg:px-8">
        <Link href="/" className="flex items-center" aria-label="Dankha home">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-2 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={linkClass(isActive(l.href))}
            >
              {l.label}
              {isActive(l.href) && activeUnderline}
            </Link>
          ))}

          <div className="relative" onMouseEnter={openDesktopServices} onMouseLeave={closeDesktopServices}>
            <button
              type="button"
              onClick={() => setDesktopServicesOpen((prev) => !prev)}
              onFocus={openDesktopServices}
              aria-haspopup="menu"
              aria-expanded={desktopServicesOpen}
              className={`inline-flex items-center gap-1 ${linkClass(servicesActive)}`}
            >
              Services
              {servicesActive && activeUnderline}
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${desktopServicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div
              className={`absolute left-0 top-full w-64 pt-2 transition duration-150 ${
                desktopServicesOpen
                  ? "pointer-events-auto translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-1 opacity-0"
              }`}
            >
              <div className="rounded-lg border border-border bg-[var(--popover,oklch(0.22_0.04_250))] p-2 shadow-xl shadow-black/30">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => setDesktopServicesOpen(false)}
                    className={`block rounded-md px-3 py-2.5 text-sm transition-colors hover:bg-surface-2 ${
                      currentPathname === service.href ? "text-link" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <AnimatedThemeToggler className={themeToggleClass} />
          <ButtonLink href="/contact" className="py-2.5">
            Book a call
          </ButtonLink>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <AnimatedThemeToggler className={mobileThemeToggleClass} />
          <MenuTrigger open={open} onClick={() => setOpen((v) => !v)} />
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            variants={panelVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-x-0 bottom-0 top-18 overflow-y-auto bg-background px-4 pb-10 pt-8 sm:px-6 lg:hidden"
          >
            <motion.nav
              aria-label="Mobile"
              variants={listVariants}
              initial="closed"
              animate="open"
              className="flex min-h-full flex-col"
            >
              <ul className="space-y-1">
                {links.map((l) => (
                  <motion.li key={l.href} variants={itemVariants}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive(l.href) ? "page" : undefined}
                      className={`block py-1.5 font-display text-4xl font-semibold transition-colors sm:text-5xl ${
                        isActive(l.href) ? "text-link" : "text-foreground hover:text-link"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </motion.li>
                ))}

                <motion.li variants={itemVariants}>
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((prev) => !prev)}
                    aria-expanded={mobileServicesOpen}
                    aria-controls="mobile-services"
                    className={`flex w-full items-center justify-between py-1.5 font-display text-4xl font-semibold transition-colors sm:text-5xl ${
                      servicesActive ? "text-link" : "text-foreground hover:text-link"
                    }`}
                  >
                    Services
                    <ChevronDown
                      className={`h-7 w-7 text-muted-foreground transition-transform duration-300 ${
                        mobileServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {mobileServicesOpen && (
                      <motion.ul
                        id="mobile-services"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: easeInOut }}
                        className="space-y-3 overflow-hidden pl-1"
                      >
                        {serviceLinks.map((service, index) => {
                          const active = currentPathname === service.href;
                          return (
                            <li key={service.href} className={index === 0 ? "pt-3" : undefined}>
                              <Link
                                href={service.href}
                                onClick={() => {
                                  setOpen(false);
                                  setMobileServicesOpen(false);
                                }}
                                className="group flex items-center text-lg"
                              >
                                <span
                                  aria-hidden
                                  className={`h-0.5 bg-primary transition-[width,margin] duration-200 ease-out group-hover:mr-3 group-hover:w-6 ${
                                    active ? "mr-3 w-6" : "mr-0 w-0"
                                  }`}
                                />
                                <span
                                  className={`transition-colors group-hover:text-link ${
                                    active ? "text-link" : "text-muted-foreground"
                                  }`}
                                >
                                  {service.label}
                                </span>
                              </Link>
                            </li>
                          );
                        })}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </motion.li>
              </ul>

              <motion.div variants={itemVariants} className="mt-auto pt-12">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  data-press
                  className="block w-full rounded-md bg-primary px-4 py-3.5 text-center text-sm font-bold uppercase tracking-[0.15em] text-primary-foreground transition-colors hover:bg-primary-hover"
                >
                  Book a call
                </Link>
                <div className="mt-8 flex items-end justify-between gap-6 text-sm">
                  <div className="space-y-1">
                    <a href={`mailto:${ContactEmail}`} className="block text-foreground hover:text-link">
                      {ContactEmail}
                    </a>
                    <a
                      href={`tel:${PhoneNumber.replace(/\s/g, "")}`}
                      className="block text-muted-foreground hover:text-link"
                    >
                      {PhoneNumber}
                    </a>
                  </div>
                  <div className="flex gap-4 text-muted-foreground">
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
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/** Round hamburger from barba.js.org: three bars morph into an X, a ring draws itself on hover or when open */
function MenuTrigger({ open, onClick }: { open: boolean; onClick: () => void }) {
  const bar =
    "absolute left-1/2 h-0.5 w-[45%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground transition-[top,rotate,translate,opacity] duration-400 ease-in-out";

  return (
    <button
      type="button"
      onClick={onClick}
      data-open={open}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      aria-controls="mobile-menu"
      className="group relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-surface-2/40"
    >
      <svg aria-hidden viewBox="0 0 40 40" className="absolute inset-0 h-full w-full -rotate-90">
        <circle cx="20" cy="20" r="19.5" className="fill-none stroke-border" />
        <circle
          cx="20"
          cy="20"
          r="18.5"
          pathLength={100}
          className="fill-none stroke-primary [stroke-dasharray:100] [stroke-dashoffset:100] [stroke-width:2] transition-[stroke-dashoffset] duration-600 ease-[cubic-bezier(0.165,0.84,0.44,1)] group-hover:[stroke-dashoffset:0] group-data-[open=true]:[stroke-dashoffset:0]"
        />
      </svg>
      <span aria-hidden className={`${bar} top-[35%] group-data-[open=true]:top-1/2 group-data-[open=true]:rotate-45`} />
      <span
        aria-hidden
        className={`${bar} top-1/2 group-data-[open=true]:translate-x-[200%] group-data-[open=true]:opacity-0`}
      />
      <span
        aria-hidden
        className={`${bar} top-[65%] group-data-[open=true]:top-1/2 group-data-[open=true]:-rotate-45`}
      />
    </button>
  );
}
