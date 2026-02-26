import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import BrandsSection from "@/components/sections/BrandsSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <main>
      <HeroSection translations={dict.hero} />
      <ServicesSection translations={dict.services} />
      <BrandsSection translations={dict.brands} />
      <AboutSection translations={dict.about} />
      <ContactSection translations={dict.contact} />
    </main>
  );
}
