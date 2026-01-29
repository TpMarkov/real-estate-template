"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import PropertyCard from "./PropertyCard";
import { Property } from "@/types";

// Hardcoded featured properties to avoid import issues
const featuredPropertiesData: Property[] = [
  {
    id: "prop-1",
    title: {
      en: "Luxury 3-Bedroom Apartment in Sofia",
      bg: "Луксозен 3-стаен апартамент в София",
    },
    description: {
      en: "Stunning luxury apartment in the heart of Sofia.",
      bg: "Зашеметяващ луксозен апартамент в центъра на София.",
    },
    price: 450000,
    pricePerSqm: 4500,
    type: "apartment",
    status: "for_sale",
    location: "sofia",
    address: "23 Vitosha Boulevard, Sofia 1000",
    area: 100,
    bedrooms: 3,
    bathrooms: 2,
    floor: 3,
    totalFloors: 6,
    yearBuilt: 2018,
    features: ["Air Conditioning", "Central Heating", "Elevator", "Balcony"],
    amenities: ["24/7 Security", "Underground Parking", "Garden"],
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop",
    agent: {
      id: "agent-1",
      name: "Ivan Petrov",
      email: "ivan.petrov@example.com",
      phone: "+359 888 123 456",
      photo:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
      bio: { en: "Experienced agent", bg: "Опитен агент" },
      languages: ["English", "Bulgarian"],
      properties: 45,
    },
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-20T14:30:00Z",
    featured: true,
    coordinates: { lat: 42.6975, lng: 23.3241 },
  },
  {
    id: "prop-2",
    title: {
      en: "Modern Villa with Pool in Varna",
      bg: "Модерна вила с басейн във Варна",
    },
    description: {
      en: "Beautiful modern villa near the beach.",
      bg: "Красива модерна вила близо до плажа.",
    },
    price: 850000,
    pricePerSqm: 2429,
    type: "villa",
    status: "for_sale",
    location: "varna",
    address: "45 Sea View Street, Varna 9000",
    area: 350,
    bedrooms: 4,
    bathrooms: 3,
    floor: 2,
    totalFloors: 3,
    yearBuilt: 2020,
    features: ["Swimming Pool", "Garden", "Garage"],
    amenities: ["Private Beach Access", "Outdoor Kitchen"],
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=800&fit=crop",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop",
    agent: {
      id: "agent-2",
      name: "Maria Georgieva",
      email: "maria.georgieva@example.com",
      phone: "+359 889 234 567",
      photo:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
      bio: { en: "Bilingual agent", bg: "Двуезичен агент" },
      languages: ["English", "Bulgarian"],
      properties: 38,
    },
    createdAt: "2024-01-10T08:00:00Z",
    updatedAt: "2024-01-18T11:00:00Z",
    featured: true,
    coordinates: { lat: 43.2141, lng: 27.9147 },
  },
  {
    id: "prop-3",
    title: {
      en: "Luxury Penthouse in Plovdiv",
      bg: "Луксозен пентхаус в Пловдив",
    },
    description: {
      en: "Exclusive penthouse with panoramic views.",
      bg: "Ексклузивен пентхаус с панорамен изглед.",
    },
    price: 520000,
    pricePerSqm: 5200,
    type: "apartment",
    status: "for_sale",
    location: "plovdiv",
    address: "12 Kamenitza Street, Plovdiv 4000",
    area: 100,
    bedrooms: 3,
    bathrooms: 2,
    floor: 12,
    totalFloors: 12,
    yearBuilt: 2021,
    features: ["Panoramic Views", "Private Terrace", "Smart Home"],
    amenities: ["Underground Parking", "Rooftop Garden"],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
    agent: {
      id: "agent-3",
      name: "Dimitar Stoyanov",
      email: "dimitar.stoyanov@example.com",
      phone: "+359 887 345 678",
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      bio: { en: "Commercial expert", bg: "Търговски експерт" },
      languages: ["English", "Bulgarian"],
      properties: 52,
    },
    createdAt: "2024-01-12T14:00:00Z",
    updatedAt: "2024-01-19T10:00:00Z",
    featured: true,
    coordinates: { lat: 42.1354, lng: 24.7453 },
  },
];

const FeaturedProperties: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            {t("hero.featured")}
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mt-2 mb-4">
            {t("hero.featured")} {t("properties")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties across
            Bulgaria's most desirable locations.
          </p>
        </motion.div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPropertiesData.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/properties"
            className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            {t("common.view_all")} {t("properties")}
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
