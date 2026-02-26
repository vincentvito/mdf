import { BRAND_ASSETS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import BrandCard from "@/components/ui/BrandCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { Dictionary } from "@/i18n/dictionaries/en";

interface BrandsSectionProps {
  translations: Dictionary["brands"];
}

export default function BrandsSection({ translations: t }: BrandsSectionProps) {
  return (
    <section id="brands" className="py-16 md:py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeading light>{t.heading}</SectionHeading>
        </ScrollReveal>
        <ScrollReveal>
          <p className="text-center text-white/60 max-w-2xl mx-auto mb-16 text-lg">
            {t.intro}
          </p>
        </ScrollReveal>
        <div className="space-y-16 lg:space-y-24">
          {t.items.map((brand, i) => (
            <ScrollReveal key={i}>
              <BrandCard
                name={brand.name}
                description={brand.description}
                image={BRAND_ASSETS[i].image}
                logo={BRAND_ASSETS[i].logo}
                imageAlt={brand.imageAlt}
                reversed={i % 2 !== 0}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
