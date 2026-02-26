export const SERVICE_IMAGES = [
  "/images/services-production.jpg",
  "/images/services-whitelabel.png",
  "/images/services-research.jpg",
] as const;

export const BRAND_ASSETS = [
  {
    image: "/images/brand-martesana.jpeg",
    logo: "/images/brand-martesana-logo.png",
  },
  {
    image: "/images/services-whitelabel.png",
    logo: "/images/brand-ld-logo.png",
  },
] as const;

export const HERO_MODEL_PATH = "/models/bottle.glb" as const;
export const HERO_MODEL_FALLBACK = "/images/hero-product-beer.png" as const;

export const CONTACT = {
  address: {
    line1: "Via Verdi 104",
    city: "Cernusco sul Naviglio",
    region: "Milan, Italy",
  },
  email: "info@milanodrinksfactory.com",
  phone: "+39 339 630 7352",
} as const;
