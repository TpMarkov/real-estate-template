"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { getPropertyById } from "@/data/properties";
import { Property } from "@/types";

const PropertyDetailPage: React.FC = () => {
  const { t, language } = useLanguage();
  const params = useParams();
  const [property, setProperty] = useState<Property | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  useEffect(() => {
    if (params.id) {
      const foundProperty = getPropertyById(params.id as string);
      setProperty(foundProperty || null);
    }
  }, [params.id]);

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

        {/* View All Photos Button */}
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
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
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
                      {property.agent.properties} {t("nav.properties")}
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

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="flex space-x-2">
                  <button className="flex-1 flex items-center justify-center py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    {t("property.save")}
                  </button>
                  <button className="flex-1 flex items-center justify-center py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                      />
                    </svg>
                    {t("property.share")}
                  </button>
                  <button className="flex-1 flex items-center justify-center py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                      />
                    </svg>
                    {t("property.print")}
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;
