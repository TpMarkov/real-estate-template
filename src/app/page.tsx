"use client";

import React from "react";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import FeaturedProperties from "@/components/FeaturedProperties";
import { useLanguage } from "@/context/LanguageContext";

const HomePage: React.FC = () => {
  const { t } = useLanguage();

  const locations = [
    {
      name: t("location.sofia"),
      properties: 150,
      image:
        "https://images.unsplash.com/photo-1517950331316-94b194725d60?w=400&h=300&fit=crop",
    },
    {
      name: t("location.varna"),
      properties: 85,
      image:
        "https://images.unsplash.com/photo-1548611635-b6e7827d7d4a?w=400&h=300&fit=crop",
    },
    {
      name: t("location.plovdiv"),
      properties: 65,
      image:
        "https://images.unsplash.com/photo-1518415125773-0b77c21810b2?w=400&h=300&fit=crop",
    },
    {
      name: t("location.bansko"),
      properties: 45,
      image:
        "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=400&h=300&fit=crop",
    },
  ];

  const services = [
    {
      icon: (
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
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
      title: "Property Search",
      description:
        "Find your perfect property with our advanced search tools and extensive database.",
    },
    {
      icon: (
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Secure Transactions",
      description:
        "We ensure safe and transparent property transactions with legal support.",
    },
    {
      icon: (
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
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "Expert Consultation",
      description: "Get advice from our experienced real estate professionals.",
    },
    {
      icon: (
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
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "International Clients",
      description: "We serve clients worldwide with multi-language support.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Search Bar */}
      <div className="relative z-20">
        <SearchBar />
      </div>

      {/* Locations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              {t("property.location")}s
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore properties in Bulgaria's most desirable locations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative group rounded-xl overflow-hidden cursor-pointer"
              >
                <div className="aspect-[4/3]">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg">
                    {location.name}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {location.properties} properties
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              {t("footer.services")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive real estate services to meet all your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <FeaturedProperties />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Ready to Find Your Dream Property?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Contact our expert team today and let us help you find the perfect
              property in Bulgaria.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {t("contact.title")}
              </a>
              <a
                href="/properties"
                className="bg-primary-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-primary-400 transition-colors border border-white/30"
              >
                {t("properties")}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
