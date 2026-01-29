"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { PropertyType, PropertyLocation } from "@/types";

const SearchBar: React.FC = () => {
  const { t, language } = useLanguage();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("for_sale");

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

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (type) params.set("type", type);
    if (location) params.set("location", location);
    params.set("status", status);

    router.push(`/properties?${params.toString()}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-white rounded-2xl shadow-xl p-6 -mt-16 relative z-10 mx-4 lg:mx-auto max-w-6xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Query Input */}
        <div className="lg:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("search.placeholder")}
          </label>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search properties..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        {/* Property Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("search.type")}
          </label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
          >
            {propertyTypes.map((pt) => (
              <option key={pt.value} value={pt.value}>
                {pt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("search.location")}
          </label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
          >
            {locations.map((loc) => (
              <option key={loc.value} value={loc.value}>
                {loc.label}
              </option>
            ))}
          </select>
        </div>

        {/* Search Button */}
        <div className="flex items-end">
          <button
            onClick={handleSearch}
            className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span>{t("search.btn")}</span>
          </button>
        </div>
      </div>

      {/* Status Tabs */}
      <div className="flex space-x-2 mt-4 pt-4 border-t">
        <button
          onClick={() => setStatus("for_sale")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            status === "for_sale"
              ? "bg-primary-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {t("buy")}
        </button>
        <button
          onClick={() => setStatus("for_rent")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            status === "for_rent"
              ? "bg-primary-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {t("rent")}
        </button>
        <button
          onClick={() => router.push("/properties")}
          className="px-4 py-2 rounded-lg text-sm font-medium text-primary-600 hover:bg-primary-50 transition-colors ml-auto"
        >
          {t("search.advanced")} →
        </button>
      </div>
    </motion.div>
  );
};

export default SearchBar;
