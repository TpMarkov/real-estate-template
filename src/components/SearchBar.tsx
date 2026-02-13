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
      className="relative z-10 mx-4 -mt-8 max-w-6xl rounded-2xl bg-white p-4 shadow-xl sm:mx-auto sm:-mt-16 sm:p-6 lg:mx-auto"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {/* Query Input */}
        <div className="sm:col-span-2 lg:col-span-2">
          <label
            htmlFor="search-query"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            {t("search.placeholder")}
          </label>
          <input
            id="search-query"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search properties..."
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>

        {/* Property Type */}
        <div>
          <label
            htmlFor="property-type"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            {t("search.type")}
          </label>
          <select
            id="property-type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-500"
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
          <label
            htmlFor="property-location"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            {t("search.location")}
          </label>
          <select
            id="property-location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-500"
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
            className="flex w-full items-center justify-center space-x-2 rounded-lg bg-primary-600 py-3 font-semibold text-white transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
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
      <div className="mt-4 flex flex-wrap gap-2 border-t pt-4 sm:space-x-2">
        <button
          onClick={() => setStatus("for_sale")}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 ${
            status === "for_sale"
              ? "bg-primary-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {t("buy")}
        </button>
        <button
          onClick={() => setStatus("for_rent")}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 ${
            status === "for_rent"
              ? "bg-primary-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {t("rent")}
        </button>
        <button
          onClick={() => router.push("/properties")}
          className="rounded-lg px-4 py-2 text-sm font-medium text-primary-600 transition-colors hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-500 sm:ml-auto"
        >
          {t("search.advanced")} →
        </button>
      </div>
    </motion.div>
  );
};

export default SearchBar;
