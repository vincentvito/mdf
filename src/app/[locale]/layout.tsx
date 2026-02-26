import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/JsonLd";
import ClientProviders from "@/components/providers/ClientProviders";
import "../globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
    keywords: [...dict.metadata.keywords],
    openGraph: {
      title: "Milano Drinks Factory",
      description: dict.metadata.ogDescription,
      url: "https://milanodrinksfactory.com",
      siteName: "Milano Drinks Factory",
      locale: locale === "it" ? "it_IT" : "en_US",
      type: "website",
      images: [
        {
          url: "https://milanodrinksfactory.com/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Milano Drinks Factory — Birrificio Artigianale Milano",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.metadata.title,
      description: dict.metadata.description,
      images: ["https://milanodrinksfactory.com/images/og-image.jpg"],
    },
    alternates: {
      canonical: `https://milanodrinksfactory.com/${locale}`,
      languages: {
        it: "https://milanodrinksfactory.com/it",
        en: "https://milanodrinksfactory.com/en",
      },
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const dict = await getDictionary(locale as Locale);

  return (
    <html lang={locale}>
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <JsonLd locale={locale} />
        <ClientProviders>
          <Header locale={locale as Locale} translations={dict.nav} />
          {children}
          <Footer
            locale={locale as Locale}
            translations={{ nav: dict.nav, footer: dict.footer }}
          />
        </ClientProviders>
      </body>
    </html>
  );
}
