"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
] as const;

const serviceLinks = [
  { href: "/services", label: "All Services" },
  { href: "/services/it", label: "IT Solutions" },
  { href: "/services/ecommerce", label: "Ecommerce" },
  { href: "/services/marketing", label: "Marketing" },
  { href: "/services/designing", label: "Designing" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const desktopCloseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const currentPathname = pathname ?? "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!currentPathname.startsWith("/services")) {
      setDesktopServicesOpen(false);
    }
  }, [currentPathname]);

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
    const body = document.body;
    const html = document.documentElement;

    if (open) {
      body.style.overflow = "hidden";
      html.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
      html.style.overflow = "";
    }

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

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6">
        <div
          className={`flex w-full items-center justify-between rounded-2xl transition-all duration-500 ${
            scrolled ? "backdrop-blur-3xl shadow-elegant px-4 md:px-6 py-3" : "bg-transparent"
          }`}
        >
          <Link href="/" className="group flex items-center gap-2.5">
            <Image src="/assets/logo.svg" alt="DANKHA Logo" width={120} height={36} />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
                {currentPathname === l.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 gradient-primary rounded-full"
                  />
                )}
              </Link>
            ))}

            <div
              className="relative"
              onMouseEnter={openDesktopServices}
              onMouseLeave={closeDesktopServices}
            >
              <button
                type="button"
                onClick={() => setDesktopServicesOpen((prev) => !prev)}
                onFocus={openDesktopServices}
                aria-haspopup="menu"
                aria-expanded={desktopServicesOpen}
                className={`relative inline-flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${
                  currentPathname.startsWith("/services")
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    desktopServicesOpen ? "rotate-180" : ""
                  }`}
                />
                {currentPathname.startsWith("/services") && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 gradient-primary rounded-full"
                  />
                )}
              </button>

              <div
                className={`absolute left-0 top-full z-70 w-64 pt-3 transition-all duration-200 ${
                  desktopServicesOpen
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-2 opacity-0"
                }`}
              >
                <div className="rounded-2xl border border-white/15 bg-card/95 shadow-card backdrop-blur-xl p-2">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => setDesktopServicesOpen(false)}
                      className="block rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white gradient-primary overflow-hidden"
            >
              <span className="relative z-10">Get in touch</span>
              <span className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
              <span className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition gradient-glow blur-xl" />
            </Link>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden h-10 w-10 inline-flex items-center justify-center rounded-lg glass"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden mx-4 mt-3 max-h-[calc(100dvh-7.5rem)] overflow-y-auto rounded-2xl backdrop-blur-3xl p-4"
          >
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-4 py-3 text-sm font-medium hover:text-foreground hover:bg-white/5 transition ${
                    currentPathname === l.href ? "text-foreground bg-white/5" : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              ))}

              <button
                type="button"
                onClick={() => setMobileServicesOpen((prev) => !prev)}
                className="mt-1 inline-flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-1 space-y-1 pl-3">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => {
                            setOpen(false);
                            setMobileServicesOpen(false);
                          }}
                          className="block rounded-lg px-4 py-2.5 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-lg px-4 py-3 text-center text-sm font-semibold text-white gradient-primary"
              >
                Get in touch →
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
