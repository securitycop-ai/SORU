import React, { createContext, useContext } from "react";

const strings: Record<string, string> = {
  nav_home:     "Home",
  nav_products: "Our Food",
  nav_whyus:    "Why SORU",
  nav_about:    "Our Story",
  nav_blog:     "News",
  nav_media:    "Media",
  nav_contact:  "Contact",

  hero_badge:   "Real Chennai food · Made for the world",
  hero_title1:  "Chennai on Your Plate.",
  hero_title2:  "Wherever You Are.",
  hero_sub:     "SORU is a modern Indian food company rooted in Chennai and Tamil food culture, bringing authentic flavour, real ingredients, and convenient formats to the world.",
  hero_cta1:    "What We're Building",
  hero_cta2:    "Our Story",

  why_label:    "Why SORU",
  why_heading:  "Real Food. Real Roots. Built for the World.",

  feat1_title:  "Authentically Chennai",
  feat1_desc:   "Every product and dish is rooted in Tamil and Chennai food culture: dosa, idli, pongal, biryani, Chettinad, filter kaapi and more.",
  feat2_title:  "Convenient by Design",
  feat2_desc:   "From fast-casual restaurants to 10-minute meal kits, SORU makes genuine Indian food easy to access and simple to prepare.",
  feat3_title:  "Better Ingredients",
  feat3_desc:   "Millets, traditional grains, natural spices, no artificial additives. Clean-label wherever possible. Quality you can taste.",
  feat4_title:  "Built to Scale",
  feat4_desc:   "SORU is designed to grow from Chennai across Europe, North America, the Middle East, and beyond — a global Indian food brand.",

  product_label:   "What We're Building",
  product_heading: "Three Connected Businesses. One Identity.",
  product_desc:    "SORU operates across fast-casual restaurants, easy-cook meal kits, and packaged health foods — all rooted in Tamil and Chennai food culture.",
  product_view:    "Explore What We're Building",

  cta_heading: "Be Part of SORU from the Beginning.",
  cta_sub:     "Register your interest and we'll keep you updated as we build, launch, and grow.",
  cta_btn:     "Register Interest",

  footer_tagline:   "SORU — Real Chennai food. Made for the world. Fast-casual restaurants, easy-cook meal kits, and traditional health foods rooted in Tamil culture.",
  footer_products:  "Our Food",
  footer_company:   "Company",
  footer_contact:   "Contact",
  footer_copyright: "© 2026 SORU Food Group. All rights reserved.",
  follow_us:        "Follow Us",

  contact_title: "Get in Touch",
  contact_sub:   "Whether you're a future customer, investor, wholesale partner, or just curious about what we're building — we'd love to hear from you.",
};

type ContextType = { t: (key: string) => string };
const LanguageContext = createContext<ContextType>({ t: (k) => strings[k] ?? k });

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => (
  <LanguageContext.Provider value={{ t: (k) => strings[k] ?? k }}>
    {children}
  </LanguageContext.Provider>
);

export const useLanguage = () => useContext(LanguageContext);
export const languages: { code: string; label: string; flag: string; nativeLabel: string }[] = [];
export type Lang = "en";
