import { siteConfig } from "@/lib/siteConfig";

interface OrganizationJsonLdProps {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
}

export function OrganizationJsonLd({
  name = siteConfig.name,
  url = siteConfig.url,
  description = siteConfig.description,
}: OrganizationJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    description,
    logo: `${url}/images/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      contactType: "customer service",
      availableLanguage: ["English", "Bulgarian"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address,
      addressLocality: "Sofia",
      addressCountry: "BG",
    },
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.linkedin,
      siteConfig.social.twitter,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

interface LocalBusinessJsonLdProps {
  name?: string;
  url?: string;
  description?: string;
}

export function LocalBusinessJsonLd({
  name = siteConfig.name,
  url = siteConfig.url,
  description = siteConfig.description,
}: LocalBusinessJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name,
    url,
    description,
    image: `${url}/images/og-image.jpg`,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address,
      addressLocality: "Sofia",
      postalCode: "1000",
      addressCountry: "BG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 42.6975,
      longitude: 23.3241,
    },
    openingHours: "Mo-Fr 09:00-18:00",
    priceRange: "€€€",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "150",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

interface PropertyJsonLdProps {
  id: string;
  title: string;
  description: string;
  price: number;
  currency?: string;
  address: string;
  area: number;
  bedrooms: number;
  bathrooms: number;
  images: string[];
  url: string;
  status: "for_sale" | "for_rent";
}

export function PropertyJsonLd({
  id,
  title,
  description,
  price,
  currency = "EUR",
  address,
  area,
  bedrooms,
  bathrooms,
  images,
  url,
  status,
}: PropertyJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "House" as const,
    name: title,
    description,
    address: {
      "@type": "PostalAddress",
      streetAddress: address,
      addressCountry: "BG",
    },
    floorSize: {
      "@type": "QuantitativeValue",
      value: area,
      unitText: "SquareMeters",
    },
    numberOfRooms: bedrooms,
    numberOfBathroomsTotal: bathrooms,
    image: images,
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: currency,
      availability: status === "for_sale" ? "ForSale" : "ForRent",
      url,
    },
    identifier: id,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

interface BreadcrumbJsonLdProps {
  items: { name: string; url: string }[];
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

interface FAQJsonLdProps {
  questions: { question: string; answer: string }[];
}

export function FAQJsonLd({ questions }: FAQJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

interface WebSiteJsonLdProps {
  name?: string;
  url?: string;
  description?: string;
}

export function WebSiteJsonLd({
  name = siteConfig.name,
  url = siteConfig.url,
  description = siteConfig.description,
}: WebSiteJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${url}/properties?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
