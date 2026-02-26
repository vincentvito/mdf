const en = {
  metadata: {
    title:
      "Milano Drinks Factory | Craft Brewery Milan — Beer, Gin & Spirits Contract Manufacturing",
    description:
      "Craft brewery and distillery near Milan, Italy. We produce artisanal beer, botanical gin, amaro, and premium spirits. Contract manufacturing, private label, and recipe development for brands. Birrificio Martesana & L.D. Liquori Distilleria.",
    ogDescription:
      "Craft brewery and distillery near Milan. We build authentic beverage brands and produce premium drinks for others.",
    keywords: [
      "craft beer production Milan",
      "private label beverages Italy",
      "white label drinks manufacturing",
      "Italian craft spirits",
      "contract brewing Italy",
      "craft beer Italy",
      "artisanal gin Italy",
      "Italian amaro",
      "handmade spirits Milan",
      "contract beer brewing Italy",
      "private label spirits Italy",
      "white label gin production",
      "custom recipe development beverages",
      "craft brewery Martesana Milan",
      "Italian liquor manufacturer",
      "beverage brand development Italy",
      "craft distillery Milan",
      "botanical gin Italian",
      "premium bitter Italy",
      "artisanal liquor production",
    ],
  },
  nav: {
    services: "Services",
    brands: "Brands",
    about: "About",
    contact: "Contact",
  },
  hero: {
    heading: "Craft Beer & Spirits, Made in Milan.",
    subheading:
      "Artisanal beer, botanical gin, amaro, bitter & liquors — crafted with Italian mastery in the Martesana area.",
    cta: "Explore Our Services",
    scrollDown: "Scroll down",
    imageAlt:
      "Milano Drinks Factory craft brewery — artisanal beer and spirits production near Milan",
    product1Alt: "Craft beer bottle by Birrificio Martesana",
    product2Alt: "Premium liquor bottle by L.D. Liquori Distilleria",
  },
  services: {
    heading: "What We Do",
    items: [
      {
        title: "Craft Beer & Spirits Production",
        description:
          "We specialize in the production of high-quality craft beers, premium spirits, and artisanal liquors, combining traditional Italian craftsmanship with modern brewing and distillation technology. From small craft batches to large-scale contract production.",
        imageAlt:
          "Craft beer and premium spirits production at Milano Drinks Factory",
      },
      {
        title: "Private & White Label Manufacturing",
        description:
          "We produce custom recipes and bottle designs for third-party brands — offering a complete contract manufacturing solution from formulation through bottling, labelling, and packaging. Private label beer, gin, spirits, and liquors.",
        imageAlt:
          "Private label and white label artisanal beverage contract manufacturing",
      },
      {
        title: "Research & Recipe Development",
        description:
          "Our team of master brewers and distillers develop exclusive recipes tailored to your market — from botanical gin blends and craft IPA to artisanal amaro and bitters, using selected natural ingredients and advanced processes.",
        imageAlt:
          "Research and recipe development for craft beer, gin, and spirits",
      },
    ],
  },
  brands: {
    heading: "Our Brands",
    intro:
      "At Milano Drinks Factory, we don\u2019t just produce — we build brands. Each of our labels has its own identity, story, and audience, but they all share the same DNA: quality, authenticity, and sustainability.",
    items: [
      {
        name: "Birrificio Martesana",
        description:
          "A historical craft brewery on the outskirts of Milan, drawing inspiration from the Martesana canal. Artisanal beer brewed with passion — from craft IPA to seasonal specialties. Perfect for grilling, aperitifs with friends, post-match beers, and every moment that counts.",
        imageAlt:
          "Birrificio Martesana — craft brewery in the Martesana area near Milan",
      },
      {
        name: "L.D. — Liquori Distilleria",
        description:
          "A contemporary artisanal distillery crafting premium liquors, botanical gin, Italian bitter, and amaro with natural herbs and time-honoured distillation techniques. An emblem of Italian authenticity and distinction.",
        imageAlt:
          "L.D. Liquori Distilleria — artisanal Italian gin, amaro, and premium spirits",
      },
    ],
  },
  about: {
    label: "Our Mission",
    quote:
      "We exist to bring authenticity and quality to every bottle we create.",
    paragraph1:
      "Milano Drinks Factory is a dynamic, forward-thinking company dedicated to crafting unique and compelling brands within the artisanal beverage industry. Based near Milan in the Martesana area of Lombardy, we combine Italian artisanal tradition with modern production capability — from craft beer to premium gin and spirits.",
    paragraph2:
      "Every bottle we make is a statement — real ingredients, honest processes, and zero compromises on taste or sustainability. From recipe to label, every product reflects our belief in quality, transparency, and natural ingredients.",
  },
  contact: {
    heading: "Get In Touch",
    intro:
      "Interested in contract manufacturing, private label production, partnerships, or custom beverage projects? We\u2019d love to hear from you.",
    form: {
      nameLabel: "Name",
      namePlaceholder: "Your Name",
      emailLabel: "Email",
      emailPlaceholder: "Your Email",
      messageLabel: "Message",
      messagePlaceholder: "Your Message",
      submit: "Send Message",
    },
  },
  footer: {
    rights: "All rights reserved.",
  },
};

export type Dictionary = {
  metadata: {
    title: string;
    description: string;
    ogDescription: string;
    keywords: string[];
  };
  nav: {
    services: string;
    brands: string;
    about: string;
    contact: string;
  };
  hero: {
    heading: string;
    subheading: string;
    cta: string;
    scrollDown: string;
    imageAlt: string;
    product1Alt: string;
    product2Alt: string;
  };
  services: {
    heading: string;
    items: { title: string; description: string; imageAlt: string }[];
  };
  brands: {
    heading: string;
    intro: string;
    items: { name: string; description: string; imageAlt: string }[];
  };
  about: {
    label: string;
    quote: string;
    paragraph1: string;
    paragraph2: string;
  };
  contact: {
    heading: string;
    intro: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submit: string;
    };
  };
  footer: {
    rights: string;
  };
};

export default en satisfies Dictionary;
