"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Property, PropertyType, PropertyLocation } from "@/types";
import PropertyCard from "@/components/PropertyCard";

// Hardcoded properties data to avoid import issues
const propertiesData: Property[] = [
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
      en: "Cozy Studio in Sunny Beach",
      bg: "Уютно студио в Слънчев бряг",
    },
    description: {
      en: "Perfect investment opportunity in Sunny Beach.",
      bg: "Перфектна инвестиционна възможност в Слънчев бряг.",
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
      en: "Authentic Bulgarian house in historic Veliko Tarnovo.",
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
      en: "Beautiful ski chalet near the lift.",
      bg: "Красиво ски шале близо до лифта.",
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
      en: "Premium office space in Business Park.",
      bg: "Премиум офис пространство в Бизнес Парк.",
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
      en: "Spectacular beachfront apartment.",
      bg: "Спектакълен апартамент на плажа.",
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
      en: "Excellent commercial opportunity.",
      bg: "Отлична търговска възможност.",
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
      en: "Prime building land in Ruse.",
      bg: "Премиерен строителен терен в Русе.",
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

const PropertiesPage: React.FC = () => {
  const { t } = useLanguage();
  const searchParams = useSearchParams();

  const [filteredProperties, setFilteredProperties] =
    useState<Property[]>(propertiesData);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("newest");

  const [filters, setFilters] = useState({
    query: searchParams.get("q") || "",
    type: (searchParams.get("type") as PropertyType | "") || "",
    status: searchParams.get("status") || "for_sale",
    location: (searchParams.get("location") as PropertyLocation | "") || "",
    minPrice: searchParams.get("minPrice") || "",
    maxPrice: searchParams.get("maxPrice") || "",
    minArea: searchParams.get("minArea") || "",
    maxArea: searchParams.get("maxArea") || "",
    bedrooms: searchParams.get("bedrooms") || "",
  });

  const propertyTypes: { value: PropertyType | ""; label: string }[] = [
    { value: "", label: t("search.type") },
    { value: "apartment", label: t("type.apartment") },
    { value: "house", label: t("house") },
    { value: "villa", label: t("villa") },
    { value: "studio", label: t("studio") },
    { value: "office", label: t("office") },
    { value: "land", label: t("land") },
    { value: "commercial", label: t("commercial") },
  ];

  const locations: { value: PropertyLocation | ""; label: string }[] = [
    { value: "", label: t("search.location") },
    { value: "sofia", label: t("location.sofia") },
    { value: "plovdiv", label: t("location.plovdiv") },
    { value: "varna", label: t("location.varna") },
    { value: "burgas", label: t("location.burgas") },
    { value: "ruse", label: t("location.ruse") },
    { value: "veliko_tarnovo", label: t("location.veliko_tarnovo") },
    { value: "bansko", label: t("location.bansko") },
    { value: "sunny_beach", label: t("location.sunny_beach") },
    { value: "golden_sands", label: t("location.golden_sands") },
  ];

  useEffect(() => {
    const results = propertiesData.filter((property) => {
      if (filters.type && property.type !== filters.type) return false;
      if (filters.status && property.status !== filters.status) return false;
      if (filters.location && property.location !== filters.location)
        return false;
      if (filters.minPrice && property.price < Number(filters.minPrice))
        return false;
      if (filters.maxPrice && property.price > Number(filters.maxPrice))
        return false;
      if (filters.minArea && property.area < Number(filters.minArea))
        return false;
      if (filters.maxArea && property.area > Number(filters.maxArea))
        return false;
      if (filters.bedrooms && property.bedrooms < Number(filters.bedrooms))
        return false;
      return true;
    });

    // Sort results
    switch (sortBy) {
      case "price_low":
        results.sort((a, b) => a.price - b.price);
        break;
      case "price_high":
        results.sort((a, b) => b.price - a.price);
        break;
      case "newest":
      default:
        results.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );
        break;
    }

    setFilteredProperties(results);
  }, [filters, sortBy]);

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      query: "",
      type: "",
      status: "for_sale",
      location: "",
      minPrice: "",
      maxPrice: "",
      minArea: "",
      maxArea: "",
      bedrooms: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-display font-bold text-white mb-4"
          >
            {t("properties")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80"
          >
            {t("common.showing")} {filteredProperties.length}{" "}
            {t("common.results")}
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`lg:w-80 ${showFilters ? "block" : "hidden lg:block"}`}
          >
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-semibold text-lg">
                  {t("search.advanced")}
                </h2>
                <button
                  onClick={clearFilters}
                  className="text-sm text-primary-600 hover:text-primary-700"
                >
                  {t("common.back")}
                </button>
              </div>

              {/* Status Tabs */}
              <div className="flex space-x-2 mb-6">
                <button
                  onClick={() => handleFilterChange("status", "for_sale")}
                  className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${
                    filters.status === "for_sale"
                      ? "bg-primary-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {t("buy")}
                </button>
                <button
                  onClick={() => handleFilterChange("status", "for_rent")}
                  className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${
                    filters.status === "for_rent"
                      ? "bg-primary-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {t("rent")}
                </button>
              </div>

              {/* Search Input */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("search.placeholder")}
                </label>
                <input
                  type="text"
                  value={filters.query}
                  onChange={(e) => handleFilterChange("query", e.target.value)}
                  placeholder="Search properties..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              {/* Property Type */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("search.type")}
                </label>
                <select
                  value={filters.type}
                  onChange={(e) => handleFilterChange("type", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
                >
                  {propertyTypes.map((pt) => (
                    <option key={pt.value} value={pt.value}>
                      {pt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Location */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("search.location")}
                </label>
                <select
                  value={filters.location}
                  onChange={(e) =>
                    handleFilterChange("location", e.target.value)
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
                >
                  {locations.map((loc) => (
                    <option key={loc.value} value={loc.value}>
                      {loc.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("search.price")}
                </label>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    value={filters.minPrice}
                    onChange={(e) =>
                      handleFilterChange("minPrice", e.target.value)
                    }
                    placeholder="Min"
                    className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <input
                    type="number"
                    value={filters.maxPrice}
                    onChange={(e) =>
                      handleFilterChange("maxPrice", e.target.value)
                    }
                    placeholder="Max"
                    className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              {/* Bedrooms */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("search.bedrooms")}
                </label>
                <select
                  value={filters.bedrooms}
                  onChange={(e) =>
                    handleFilterChange("bedrooms", e.target.value)
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
                >
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                </select>
              </div>

              {/* Area */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("search.area")}
                </label>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    value={filters.minArea}
                    onChange={(e) =>
                      handleFilterChange("minArea", e.target.value)
                    }
                    placeholder="Min"
                    className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <input
                    type="number"
                    value={filters.maxArea}
                    onChange={(e) =>
                      handleFilterChange("maxArea", e.target.value)
                    }
                    placeholder="Max"
                    className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>
            </div>
          </motion.aside>

          {/* Properties Grid */}
          <div className="flex-1">
            {/* Sort & Filter Toggle */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden bg-white px-4 py-2 rounded-lg shadow text-sm font-medium"
              >
                {showFilters ? "Hide Filters" : "Show Filters"}
              </button>

              <div className="flex items-center space-x-4 ml-auto">
                <label className="text-sm text-gray-600">
                  {t("common.sorted_by")}:
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="newest">{t("common.newest")}</option>
                  <option value="price_low">{t("common.price_low")}</option>
                  <option value="price_high">{t("common.price_high")}</option>
                </select>
              </div>
            </div>

            {/* Properties */}
            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProperties.map((property, index) => (
                  <motion.div
                    key={property.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <PropertyCard property={property} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <svg
                  className="w-16 h-16 mx-auto text-gray-300 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t("common.no_results")}
                </h3>
                <p className="text-gray-600">
                  Try adjusting your search filters
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesPage;
