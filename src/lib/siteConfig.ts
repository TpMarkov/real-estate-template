/**
 * Site Configuration
 * Centralized configuration for the entire website
 *
 * TODO: Replace with client contact details
 */

export const siteConfig = {
  // Site Information
  name: process.env.NEXT_PUBLIC_SITE_NAME || "Bulgarian Properties",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://bulgarianproperties.com",
  description:
    "Discover the best real estate opportunities in Bulgaria. Browse apartments, houses, villas, and commercial properties.",

  // Contact Information
  // TODO: Replace with client contact details
  contact: {
    email:
      process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@bulgarianproperties.com",
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+359 888 123 456",
    address:
      process.env.NEXT_PUBLIC_CONTACT_ADDRESS ||
      "123 Vitosha Boulevard, Sofia 1000, Bulgaria",
    businessName:
      process.env.NEXT_PUBLIC_BUSINESS_NAME || "Bulgarian Properties Ltd.",
  },

  // Social Media Links
  // TODO: Replace with client social links
  social: {
    facebook:
      process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK ||
      "https://facebook.com/bulgarianproperties",
    instagram:
      process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM ||
      "https://instagram.com/bulgarianproperties",
    linkedin:
      process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN ||
      "https://linkedin.com/company/bulgarianproperties",
    twitter:
      process.env.NEXT_PUBLIC_SOCIAL_TWITTER ||
      "https://twitter.com/bgproperties",
  },

  // SEO Configuration
  seo: {
    titleTemplate: "%s | Bulgarian Properties",
    defaultTitle: "Bulgarian Properties - Real Estate in Bulgaria",
    defaultDescription:
      "Discover the best real estate opportunities in Bulgaria. Browse apartments, houses, villas, and commercial properties.",
    keywords: [
      "Bulgaria real estate",
      "properties in Bulgaria",
      "apartments for sale",
      "houses for sale",
      "villas in Bulgaria",
      "commercial property",
      "Sofia properties",
      "Varna properties",
      "Plovdiv properties",
      "Bulgarian real estate",
    ],
    ogImage: "/images/og-image.jpg",
    twitterHandle: "@bgproperties",
  },

  // Navigation Links
  navigation: {
    main: [
      { href: "/", labelKey: "home" },
      { href: "/properties", labelKey: "properties" },
      { href: "/properties?status=for_sale", labelKey: "buy" },
      { href: "/properties?status=for_rent", labelKey: "rent" },
      { href: "/about", labelKey: "about" },
      { href: "/contact", labelKey: "contact" },
    ],
    footer: {
      properties: [
        { href: "/properties?status=for_sale", labelKey: "buy" },
        { href: "/properties?status=for_rent", labelKey: "rent" },
        { href: "/properties?type=villa", labelKey: "type.villa" },
        { href: "/properties?type=apartment", labelKey: "type.apartment" },
      ],
      company: [
        { href: "/about", labelKey: "about" },
        { href: "/contact", labelKey: "contact" },
        { href: "/agents", labelKey: "agents" },
      ],
      legal: [
        { href: "/privacy", labelKey: "footer.privacy" },
        { href: "/terms", labelKey: "footer.terms" },
      ],
    },
  },

  // Feature Flags
  features: {
    newsletter: process.env.NEXT_PUBLIC_ENABLE_NEWSLETTER === "true",
    propertyAlerts: process.env.NEXT_PUBLIC_ENABLE_PROPERTY_ALERTS === "true",
    virtualTours: process.env.NEXT_PUBLIC_ENABLE_VIRTUAL_TOURS === "true",
  },

  // Analytics
  analytics: {
    gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  },

  // API Configuration
  api: {
    formspreeFormId: process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID,
    contactEndpoint: process.env.NEXT_PUBLIC_API_URL || "/api/contact",
  },

  // Property Configuration
  properties: {
    defaultPageSize: 12,
    maxPageSize: 50,
    priceRanges: [
      { min: 0, max: 50000, label: "Under €50,000" },
      { min: 50000, max: 100000, label: "€50,000 - €100,000" },
      { min: 100000, max: 250000, label: "€100,000 - €250,000" },
      { min: 250000, max: 500000, label: "€250,000 - €500,000" },
      { min: 500000, max: null, label: "Over €500,000" },
    ],
  },

  // Locations
  locations: [
    { code: "sofia", name: "Sofia", nameBg: "София" },
    { code: "plovdiv", name: "Plovdiv", nameBg: "Пловдив" },
    { code: "varna", name: "Varna", nameBg: "Варна" },
    { code: "burgas", name: "Burgas", nameBg: "Бургас" },
    { code: "ruse", name: "Ruse", nameBg: "Русе" },
    {
      code: "veliko_tarnovo",
      name: "Veliko Tarnovo",
      nameBg: "Велико Търново",
    },
    { code: "bansko", name: "Bansko", nameBg: "Банско" },
    { code: "sunny_beach", name: "Sunny Beach", nameBg: "Слънчев бряг" },
    { code: "golden_sands", name: "Golden Sands", nameBg: "Златни пясъци" },
  ],

  // Property Types
  propertyTypes: [
    { code: "apartment", name: "Apartment", nameBg: "Апартамент" },
    { code: "house", name: "House", nameBg: "Къща" },
    { code: "villa", name: "Villa", nameBg: "Вила" },
    { code: "studio", name: "Studio", nameBg: "Студио" },
    { code: "office", name: "Office", nameBg: "Офис" },
    { code: "land", name: "Land", nameBg: "Земя" },
    { code: "commercial", name: "Commercial", nameBg: "Търговски" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
