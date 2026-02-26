"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useLenis } from "@/components/providers/SmoothScrollProvider";
import LanguageSwitcher from "./LanguageSwitcher";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

const NAV_SECTIONS = [
  { key: "services" as const, href: "#services" },
  { key: "brands" as const, href: "#brands" },
  { key: "about" as const, href: "#about" },
  { key: "contact" as const, href: "#contact" },
];

interface HeaderProps {
  locale: Locale;
  translations: Dictionary["nav"];
}

export default function Header({ locale, translations: t }: HeaderProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [pastHero, setPastHero] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection();
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      const heroBottom = hero ? hero.offsetHeight - 100 : 200;
      const y = window.scrollY;

      // Gradual progress for backdrop effects (over 200px after hero)
      const progress = Math.min(Math.max((y - heroBottom) / 200, 0), 1);
      setScrollProgress(progress);
      setPastHero(y > heroBottom);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const scrollTo = (href: string) => {
    if (lenis) {
      lenis.scrollTo(href, { offset: -144 });
    } else {
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  // Nav is always white — dark hero background + dark scrolled header
  const navTextClass = "text-white/80 hover:text-white";
  const barColor = "bg-white";

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: `rgba(13, 13, 13, ${scrollProgress * 0.95})`,
          backdropFilter: `blur(${scrollProgress * 12}px)`,
          WebkitBackdropFilter: `blur(${scrollProgress * 12}px)`,
        }}
      >
        <div
          className="max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-300"
          style={{ height: `${144 - scrollProgress * 8}px` }}
        >
          <button
            onClick={() => scrollTo("#hero")}
            className="relative z-50"
          >
            <Image
              src="/images/logo-white.png"
              alt="Milano Drinks Factory"
              width={160}
              height={160}
              className="h-32 w-auto transition-all duration-300"
              priority
            />
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_SECTIONS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
                  activeSection === link.key ? "text-accent" : navTextClass
                }`}
              >
                {t[link.key]}
              </button>
            ))}
            <LanguageSwitcher locale={locale} dark />
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-50 w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 ${barColor} transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2 !bg-white" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 ${barColor} transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 ${barColor} transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2 !bg-white" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile overlay — outside header to avoid backdrop-filter containing block */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-primary-dark transition-opacity duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {NAV_SECTIONS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`text-2xl font-heading font-bold tracking-wide uppercase transition-colors ${
                activeSection === link.key
                  ? "text-accent"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {t[link.key]}
            </button>
          ))}
          <LanguageSwitcher locale={locale} />
        </nav>
      </div>
    </>
  );
}
