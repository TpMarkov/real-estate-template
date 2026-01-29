"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Property } from "@/types";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const { t, language } = useLanguage();

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
      case "sold":
        return t("status.sold");
      case "reserved":
        return t("status.reserved");
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
      case "sold":
        return "bg-red-500";
      case "reserved":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={property.thumbnail}
          alt={property.title[language]}
          fill
          className="object-cover transition-transform duration-300 hover:scale-110"
        />
        <div
          className={`absolute top-4 left-4 ${getStatusColor(property.status)} text-white text-xs font-semibold px-3 py-1 rounded-full`}
        >
          {getStatusLabel(property.status)}
        </div>
        {property.featured && (
          <div className="absolute top-4 right-4 bg-accent-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {t("common.popular")}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Price */}
        <div className="flex justify-between items-start mb-3">
          <div>
            <p className="text-2xl font-bold text-gray-900">
              {formatPrice(property.price, property.status)}
            </p>
            {property.pricePerSqm && (
              <p className="text-sm text-gray-500">
                {new Intl.NumberFormat(
                  language === "bg" ? "bg-BG" : "en-US",
                ).format(property.pricePerSqm)}{" "}
                {t("property.perSq")}
              </p>
            )}
          </div>
          <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {t(`type.${property.type}`)}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">
          {property.title[language]}
        </h3>

        {/* Location */}
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <span>{t(`location.${property.location}`)}</span>
        </div>

        {/* Features */}
        <div className="flex items-center justify-between text-sm text-gray-600 pt-4 border-t">
          <div className="flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span>
              {property.bedrooms} {t("property.bedrooms")}
            </span>
          </div>
          <div className="flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
                clipRule="evenodd"
              />
            </svg>
            <span>
              {property.bathrooms} {t("property.bathrooms")}
            </span>
          </div>
          <div className="flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <span>
              {property.area} {t("property.sq")}
            </span>
          </div>
        </div>

        {/* View Details Button */}
        <Link
          href={`/properties/${property.id}`}
          className="mt-4 block w-full text-center bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 rounded-lg transition-colors"
        >
          {t("common.view_all")}
        </Link>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
