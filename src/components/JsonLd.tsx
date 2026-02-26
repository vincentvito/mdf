interface JsonLdProps {
  locale: string;
}

export default function JsonLd({ locale }: JsonLdProps) {
  const isItalian = locale === "it";

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Milano Drinks Factory",
    url: "https://milanodrinksfactory.com",
    logo: "https://milanodrinksfactory.com/images/logo-dark.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+39-339-630-7352",
      email: "info@milanodrinksfactory.com",
      contactType: "customer service",
      availableLanguage: ["Italian", "English"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Verdi 104",
      addressLocality: "Cernusco sul Naviglio",
      addressRegion: "MI",
      postalCode: "20063",
      addressCountry: "IT",
    },
    description: isItalian
      ? "Birrificio artigianale e distilleria vicino a Milano. Produzione birra artigianale, gin, amaro e liquori. Produzione conto terzi e private label."
      : "Craft brewery and distillery near Milan. Artisanal beer, gin, amaro, and liquor production. Contract manufacturing and private label.",
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "Brewery",
    name: "Milano Drinks Factory",
    image: "https://milanodrinksfactory.com/images/hero-bg.jpg",
    url: "https://milanodrinksfactory.com",
    telephone: "+39-339-630-7352",
    email: "info@milanodrinksfactory.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Verdi 104",
      addressLocality: "Cernusco sul Naviglio",
      addressRegion: "MI",
      postalCode: "20063",
      addressCountry: "IT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.5256,
      longitude: 9.3272,
    },
    areaServed: [
      { "@type": "City", name: "Milano" },
      { "@type": "AdministrativeArea", name: "Lombardia" },
      { "@type": "Country", name: "Italia" },
    ],
    knowsAbout: [
      "Craft beer production",
      "Artisanal spirits distillation",
      "Private label beverages",
      "Contract brewing",
      "Recipe development",
      "Gin distillation",
      "Amaro production",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: isItalian ? "Servizi" : "Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isItalian
              ? "Produzione Birra Artigianale e Distillati"
              : "Craft Beer & Spirits Production",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isItalian
              ? "Produzione Private Label e Conto Terzi"
              : "Private & White Label Manufacturing",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isItalian
              ? "Ricerca e Sviluppo Ricette"
              : "Research & Recipe Development",
          },
        },
      ],
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Milano Drinks Factory",
    url: "https://milanodrinksfactory.com",
    inLanguage: [isItalian ? "it-IT" : "en-US"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
