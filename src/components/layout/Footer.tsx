import { CONTACT } from "@/lib/constants";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

const NAV_SECTIONS = [
  { key: "services" as const, href: "#services" },
  { key: "brands" as const, href: "#brands" },
  { key: "about" as const, href: "#about" },
  { key: "contact" as const, href: "#contact" },
];

interface FooterProps {
  locale: Locale;
  translations: {
    nav: Dictionary["nav"];
    footer: Dictionary["footer"];
  };
}

export default function Footer({ translations: t }: FooterProps) {
  return (
    <footer className="bg-primary-dark text-white/60 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Milano Drinks Factory S.R.L.{" "}
          {t.footer.rights}
        </p>
        <div className="flex items-center gap-6">
          {NAV_SECTIONS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm hover:text-white transition-colors"
            >
              {t.nav[link.key]}
            </a>
          ))}
        </div>
        <a
          href={`mailto:${CONTACT.email}`}
          className="text-sm hover:text-white transition-colors"
        >
          {CONTACT.email}
        </a>
      </div>
    </footer>
  );
}
