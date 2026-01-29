"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { properties, searchProperties } from "@/data/properties";
import { Property, PropertyType, PropertyLocation } from "@/types";
import PropertyCard from "@/components/PropertyCard";

const PropertiesPage: React.FC = () => {
  const { t, language } = useLanguage();
  const searchParams = useSearchParams();

  const [filteredProperties, setFilteredProperties] =
    useState<Property[]>(properties);
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
    { value: "house", label: t("type.house") },
    { value: "villa", label: t("type.villa") },
    { value: "studio", label: t("type.studio") },
    { value: "office", label: t("type.office") },
    { value: "land", label: t("type.land") },
    { value: "commercial", label: t("type.commercial") },
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
    const results = searchProperties(filters);

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
            {t("nav.properties")}
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
                  {t("nav.buy")}
                </button>
                <button
                  onClick={() => handleFilterChange("status", "for_rent")}
                  className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${
                    filters.status === "for_rent"
                      ? "bg-primary-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {t("nav.rent")}
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
