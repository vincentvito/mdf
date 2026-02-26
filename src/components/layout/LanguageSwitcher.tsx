"use client";

import type { Locale } from "@/i18n/config";

interface LanguageSwitcherProps {
  locale: Locale;
  dark?: boolean;
}

export default function LanguageSwitcher({ locale, dark = true }: LanguageSwitcherProps) {
  const otherLocale: Locale = locale === "it" ? "en" : "it";

  const handleSwitch = () => {
    const hash = window.location.hash;
    window.location.href = `/${otherLocale}${hash}`;
  };

  return (
    <button
      onClick={handleSwitch}
      className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
        dark
          ? "text-white/60 hover:text-white"
          : "text-primary/60 hover:text-primary"
      }`}
      aria-label={
        locale === "it" ? "Switch to English" : "Passa all'italiano"
      }
    >
      {otherLocale.toUpperCase()}
    </button>
  );
}
