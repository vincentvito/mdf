import { SERVICE_IMAGES } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { Dictionary } from "@/i18n/dictionaries/en";

interface ServicesSectionProps {
  translations: Dictionary["services"];
}

export default function ServicesSection({ translations: t }: ServicesSectionProps) {
  return (
    <section id="services" className="py-16 md:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeading>{t.heading}</SectionHeading>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.items.map((service, i) => {
            const directions = ["left", "up", "right"] as const;
            return (
              <ScrollReveal key={i} delay={i * 0.15} direction={directions[i] || "up"}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  image={SERVICE_IMAGES[i]}
                  imageAlt={service.imageAlt}
                />
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
