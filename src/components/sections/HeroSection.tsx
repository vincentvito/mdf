import type { Dictionary } from "@/i18n/dictionaries/en";
import HeroSectionClient from "./HeroSectionClient";

interface HeroSectionProps {
  translations: Dictionary["hero"];
}

export default function HeroSection({ translations: t }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <HeroSectionClient translations={t} />
    </section>
  );
}
