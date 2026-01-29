"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Property } from "@/types";

// All properties data hardcoded to avoid import issues
const allProperties: Property[] = [
  {
    id: "prop-1",
    title: {
      en: "Luxury 3-Bedroom Apartment in Sofia",
      bg: "Луксозен 3-стаен апартамент в София",
    },
    description: {
      en: "Stunning luxury apartment in the heart of Sofia. This beautifully renovated property features high ceilings, original parquet flooring, and modern amenities.",
      bg: "Зашеметяващ луксозен апартамент в центъра на София. Този красиво реновиран имот разполага с високи тавани, оригинален паркет и модерни удобства.",
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
    features: [
      "Air Conditioning",
      "Central Heating",
      "Elevator",
      "Balcony",
      "Fireplace",
    ],
    amenities: [
      "24/7 Security",
      "Underground Parking",
      "Garden",
      "Gym",
      "Swimming Pool",
    ],
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&h=800&fit=crop",
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
      en: "Beautiful modern villa located in a quiet residential area of Varna, just 500m from the beach.",
      bg: "Красива модерна вила в тих жилищен район на Варна, само на 500 метра от плажа.",
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
    features: ["Swimming Pool", "Garden", "Garage", "Smart Home"],
    amenities: ["Private Beach Access", "Outdoor Kitchen", "BBQ Area"],
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop",
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
      en: "Cozy Studio in Sunny Beach",
      bg: "Уютно студио в Слънчев бряг",
    },
    description: {
      en: "Perfect investment opportunity! This cozy studio apartment is located in the popular Sunny Beach resort.",
      bg: "Перфектна инвестиционна възможност! Този уютен студио апартамент се намира в популярния курорт Слънчев бряг.",
    },
    price: 45000,
    pricePerSqm: 1125,
    type: "studio",
    status: "for_sale",
    location: "sunny_beach",
    address: "Apartment 205, Sunny Beach 8240",
    area: 40,
    bedrooms: 1,
    bathrooms: 1,
    floor: 2,
    totalFloors: 6,
    yearBuilt: 2015,
    features: ["Balcony", "Sea View", "Air Conditioning"],
    amenities: ["Swimming Pool", "Fitness Center", "Parking"],
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&h=800&fit=crop",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop",
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
    createdAt: "2024-01-05T09:00:00Z",
    updatedAt: "2024-01-15T16:00:00Z",
    featured: true,
    coordinates: { lat: 42.6506, lng: 27.7078 },
  },
  {
    id: "prop-4",
    title: {
      en: "Traditional House in Veliko Tarnovo",
      bg: "Традиционна къща във Велико Търново",
    },
    description: {
      en: "Authentic Bulgarian house located in the historic town of Veliko Tarnovo.",
      bg: "Автентична българска къща в историческия Велико Търново.",
    },
    price: 280000,
    pricePerSqm: 1867,
    type: "house",
    status: "for_sale",
    location: "veliko_tarnovo",
    address: "78 Samovodska Street, Veliko Tarnovo 5000",
    area: 150,
    bedrooms: 5,
    bathrooms: 3,
    floor: 2,
    totalFloors: 2,
    yearBuilt: 1890,
    features: ["Fireplace", "Courtyard", "Mountain View"],
    amenities: ["Garden", "Parking", "Storage"],
    images: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1200&h=800&fit=crop",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600&h=400&fit=crop",
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
    createdAt: "2024-01-08T12:00:00Z",
    updatedAt: "2024-01-16T09:30:00Z",
    featured: false,
    coordinates: { lat: 43.0756, lng: 25.6172 },
  },
  {
    id: "prop-5",
    title: {
      en: "Luxury Penthouse in Plovdiv",
      bg: "Луксозен пентхаус в Пловдив",
    },
    description: {
      en: "Exclusive penthouse apartment in the center of Plovdiv, offering panoramic views of the old town.",
      bg: "Ексклузивен пентхаус апартамент в центъра на Пловдив, предлагащ панорамен изглед към Стария град.",
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
    amenities: ["Underground Parking", "Rooftop Garden", "Gym"],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
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
    createdAt: "2024-01-12T14:00:00Z",
    updatedAt: "2024-01-19T10:00:00Z",
    featured: true,
    coordinates: { lat: 42.1354, lng: 24.7453 },
  },
  {
    id: "prop-6",
    title: {
      en: "Ski Chalet in Bansko",
      bg: "Ски Шале в Банско",
    },
    description: {
      en: "Beautiful ski chalet located in the premier ski resort of Bansko.",
      bg: "Красиво ски шале в премиерния ски курорт Банско.",
    },
    price: 320000,
    pricePerSqm: 1600,
    type: "villa",
    status: "for_sale",
    location: "bansko",
    address: "25 Pirin Street, Bansko 2770",
    area: 200,
    bedrooms: 4,
    bathrooms: 3,
    floor: 2,
    totalFloors: 3,
    yearBuilt: 2017,
    features: ["Fireplace", "Mountain View", "Garden"],
    amenities: ["Near Ski Lift", "Sauna", "Hot Tub"],
    images: [
      "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=1200&h=800&fit=crop",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=600&h=400&fit=crop",
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
    createdAt: "2024-01-03T11:00:00Z",
    updatedAt: "2024-01-14T15:00:00Z",
    featured: false,
    coordinates: { lat: 41.8373, lng: 23.4881 },
  },
  {
    id: "prop-7",
    title: {
      en: "Office in Sofia Business Park",
      bg: "Офис в София Бизнес Парк",
    },
    description: {
      en: "Premium office space available in the prestigious Sofia Business Park.",
      bg: "Премиум офис пространство в престижния София Бизнес Парк.",
    },
    price: 2500,
    pricePerSqm: 17,
    type: "office",
    status: "for_rent",
    location: "sofia",
    address: "Office 501, Business Tower, Sofia 1766",
    area: 150,
    bedrooms: 0,
    bathrooms: 2,
    floor: 5,
    totalFloors: 10,
    yearBuilt: 2019,
    features: ["Open Plan", "Meeting Rooms", "Parking"],
    amenities: ["Security", "Central AC", "Elevator"],
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
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
    createdAt: "2024-01-06T13:00:00Z",
    updatedAt: "2024-01-17T08:00:00Z",
    featured: false,
    coordinates: { lat: 42.6525, lng: 23.3541 },
  },
  {
    id: "prop-8",
    title: {
      en: "Beachfront Apartment in Golden Sands",
      bg: "Апартамент на плажа в Златни пясъци",
    },
    description: {
      en: "Spectacular beachfront apartment in the famous Golden Sands resort.",
      bg: "Спектакълен апартамент на плажа в прочутия курорт Златни пясъци.",
    },
    price: 195000,
    pricePerSqm: 3250,
    type: "apartment",
    status: "for_sale",
    location: "golden_sands",
    address: "Apartment 1801, Golden Sands 9007",
    area: 60,
    bedrooms: 2,
    bathrooms: 2,
    floor: 18,
    totalFloors: 20,
    yearBuilt: 2016,
    features: ["Beach Access", "Sea View", "Balcony"],
    amenities: ["Multiple Pools", "Restaurant", "Spa"],
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
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
    createdAt: "2024-01-09T10:00:00Z",
    updatedAt: "2024-01-18T14:00:00Z",
    featured: true,
    coordinates: { lat: 43.2833, lng: 28.0333 },
  },
  {
    id: "prop-9",
    title: {
      en: "Commercial Property in Burgas",
      bg: "Търговски имот в Бургас",
    },
    description: {
      en: "Excellent commercial opportunity in the heart of Burgas.",
      bg: "Отлична търговска възможност в сърцето на Бургас.",
    },
    price: 450000,
    pricePerSqm: 1500,
    type: "commercial",
    status: "for_sale",
    location: "burgas",
    address: "45 Alexandrovska Street, Burgas 8000",
    area: 300,
    bedrooms: 0,
    bathrooms: 2,
    floor: 1,
    totalFloors: 3,
    yearBuilt: 1995,
    features: ["High Ceilings", "Large Windows"],
    amenities: ["Storage", "Parking Nearby"],
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
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
    createdAt: "2024-01-07T15:00:00Z",
    updatedAt: "2024-01-16T12:00:00Z",
    featured: false,
    coordinates: { lat: 42.5048, lng: 27.4626 },
  },
  {
    id: "prop-10",
    title: {
      en: "Building Land in Ruse",
      bg: "Строителен терен в Русе",
    },
    description: {
      en: "Prime building land available in the beautiful city of Ruse.",
      bg: "Премиерен строителен терен в красивия град Русе.",
    },
    price: 120000,
    pricePerSqm: 60,
    type: "land",
    status: "for_sale",
    location: "ruse",
    address: "Land Plot 12, Ruse 7000",
    area: 2000,
    bedrooms: 0,
    bathrooms: 0,
    yearBuilt: undefined,
    features: ["Flat Terrain", "Utilities Available"],
    amenities: ["Near River", "Quiet Area"],
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=800&fit=crop",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop",
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
    createdAt: "2024-01-04T09:00:00Z",
    updatedAt: "2024-01-13T11:00:00Z",
    featured: false,
    coordinates: { lat: 43.8357, lng: 25.9666 },
  },
];

const PropertyDetailPage: React.FC = () => {
  const { t, language } = useLanguage();
  const params = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  const property = allProperties.find((p) => p.id === params.id);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">{t("common.loading")}</p>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number, status: string) => {
    const formatted = new Intl.NumberFormat(
      language === "bg" ? "bg-BG" : "en-US",
      {
        style: "currency",
        currency: "EUR",
        maximumFractionDigits: 0,
      },
    ).format(price);
    return status === "for_rent" ? `${formatted}/mo` : formatted;
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "for_sale":
        return t("status.for_sale");
      case "for_rent":
        return t("status.for_rent");
      default:
        return status;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "for_sale":
        return "bg-green-500";
      case "for_rent":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Image Gallery */}
      <div className="relative h-[50vh] md:h-[60vh] bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src={property.images[currentImageIndex]}
            alt={property.title[language]}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Thumbnail Navigation */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {property.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                index === currentImageIndex
                  ? "border-white scale-105"
                  : "border-transparent opacity-70"
              }`}
            >
              <Image
                src={image}
                alt=""
                width={64}
                height={48}
                className="object-cover w-full h-full"
              />
            </button>
          ))}
        </div>

        <button
          onClick={() => setShowLightbox(true)}
          className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          {t("property.gallery")} ({property.images.length})
        </button>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {showLightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          >
            <button
              onClick={() => setShowLightbox(false)}
              className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <button
              onClick={() =>
                setCurrentImageIndex((prev) =>
                  prev > 0 ? prev - 1 : property.images.length - 1,
                )
              }
              className="absolute left-4 text-white p-2 hover:bg-white/10 rounded-full"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="relative w-full max-w-4xl h-[80vh]">
              <Image
                src={property.images[currentImageIndex]}
                alt={property.title[language]}
                fill
                className="object-contain"
              />
            </div>

            <button
              onClick={() =>
                setCurrentImageIndex((prev) =>
                  prev < property.images.length - 1 ? prev + 1 : 0,
                )
              }
              className="absolute right-4 text-white p-2 hover:bg-white/10 rounded-full"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span
                  className={`${getStatusColor(property.status)} text-white text-sm font-semibold px-3 py-1 rounded-full`}
                >
                  {getStatusLabel(property.status)}
                </span>
                <span className="text-sm text-gray-500">
                  {t(`type.${property.type}`)}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-2">
                {property.title[language]}
              </h1>

              <div className="flex items-center text-gray-600 mb-4">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{property.address}</span>
              </div>

              <div className="text-3xl font-bold text-primary-600 mb-4">
                {formatPrice(property.price, property.status)}
                {property.pricePerSqm && (
                  <span className="text-base font-normal text-gray-500 ml-2">
                    (
                    {new Intl.NumberFormat(
                      language === "bg" ? "bg-BG" : "en-US",
                    ).format(property.pricePerSqm)}{" "}
                    {t("property.perSq")})
                  </span>
                )}
              </div>
            </motion.div>

            {/* Property Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h2 className="text-xl font-semibold mb-4">
                {t("property.details")}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {property.bedrooms > 0 && (
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">
                      {property.bedrooms}
                    </div>
                    <div className="text-sm text-gray-600">
                      {t("property.bedrooms")}
                    </div>
                  </div>
                )}
                {property.bathrooms > 0 && (
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">
                      {property.bathrooms}
                    </div>
                    <div className="text-sm text-gray-600">
                      {t("property.bathrooms")}
                    </div>
                  </div>
                )}
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">
                    {property.area}
                  </div>
                  <div className="text-sm text-gray-600">
                    {t("property.sq")}
                  </div>
                </div>
                {property.floor !== undefined && (
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">
                      {property.floor}/{property.totalFloors}
                    </div>
                    <div className="text-sm text-gray-600">
                      {t("property.floor")}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h2 className="text-xl font-semibold mb-4">
                {t("property.description")}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {property.description[language]}
              </p>
            </motion.div>

            {/* Features */}
            {property.features.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h2 className="text-xl font-semibold mb-4">
                  {t("property.features")}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {property.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Amenities */}
            {property.amenities.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h2 className="text-xl font-semibold mb-4">
                  {t("property.amenities")}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {property.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center text-gray-600"
                    >
                      <svg
                        className="w-5 h-5 mr-2 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {amenity}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Agent Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-lg font-semibold mb-4">
                  {t("property.agent")}
                </h3>
                <div className="flex items-center space-x-4 mb-4">
                  <Image
                    src={property.agent.photo}
                    alt={property.agent.name}
                    width={64}
                    height={64}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{property.agent.name}</p>
                    <p className="text-sm text-gray-500">
                      {property.agent.properties} {t("properties")}
                    </p>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <a
                    href={`tel:${property.agent.phone}`}
                    className="flex items-center text-gray-600 hover:text-primary-600"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    {property.agent.phone}
                  </a>
                  <a
                    href={`mailto:${property.agent.email}`}
                    className="flex items-center text-gray-600 hover:text-primary-600"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    {property.agent.email}
                  </a>
                </div>
                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 rounded-lg transition-colors mb-2">
                  {t("property.schedule")}
                </button>
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 rounded-lg transition-colors">
                  {t("property.inquire")}
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;
