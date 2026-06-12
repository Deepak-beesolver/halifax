"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { mainNav } from "@/lib/site";
import { services } from "@/lib/services";

export default function NavBar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-line bg-warm/90 backdrop-blur supports-[backdrop-filter]:bg-warm/80 shadow-[0_1px_20px_rgba(47,52,29,0.06)]"
          : "border-transparent bg-warm"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" aria-label="Halifax Defence Consulting home">
          <Image
            src="/halifax-logo.png"
            alt="Halifax Defence Consulting"
            width={56}
            height={56}
            priority
            className="h-12 w-12 object-contain"
          />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-serif text-lg font-semibold tracking-[0.14em] text-forest">
              HALIFAX
            </span>
            <span className="mt-0.5 text-[0.58rem] font-medium uppercase tracking-[0.26em] text-copper">
              Defence Consulting
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) =>
            item.href === "/services" ? (
              <div key={item.href} className="group relative">
                <Link
                  href="/services"
                  className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href) ? "text-copper" : "text-charcoal hover:text-copper"
                  }`}
                >
                  {item.label}
                  <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                </Link>
                {/* Dropdown */}
                <div className="invisible absolute left-1/2 top-full z-50 w-[34rem] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="grid grid-cols-2 gap-1 rounded-xl border border-line bg-white p-3 shadow-xl shadow-forest/10">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="rounded-lg px-3 py-2.5 transition-colors hover:bg-stone"
                      >
                        <span className="block text-sm font-semibold text-forest">{s.shortTitle}</span>
                        <span className="mt-0.5 block text-xs text-slate">{s.tagline}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href) ? "text-copper" : "text-charcoal hover:text-copper"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-md bg-copper px-5 py-2.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-copper-dark hover:shadow-md md:inline-flex"
          >
            Contact us
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-forest lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-line bg-warm lg:hidden">
          <nav className="container-x flex flex-col py-4">
            {mainNav.map((item) =>
              item.href === "/services" ? (
                <div key={item.href} className="border-b border-line/60">
                  <button
                    type="button"
                    onClick={() => setServicesOpen((v) => !v)}
                    className="flex w-full items-center justify-between py-3 text-sm font-medium text-charcoal"
                  >
                    Services
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {servicesOpen && (
                    <div className="pb-3 pl-3">
                      <Link href="/services" className="block py-2 text-sm text-copper">
                        All services
                      </Link>
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="block py-2 text-sm text-slate hover:text-copper"
                        >
                          {s.shortTitle}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`border-b border-line/60 py-3 text-sm font-medium ${
                    isActive(item.href) ? "text-copper" : "text-charcoal"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              href="/contact"
              className="mt-4 inline-flex justify-center rounded-md bg-copper px-5 py-3 text-sm font-medium text-white"
            >
              Contact us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
