"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {/* Image replaced due to optimization - using next/image for LCP optimization */}
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop"
          alt="Luxury real estate property in Bulgaria"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm"
          >
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-green-400" />
            <span className="text-sm font-medium text-white/90">
              {new Date().getFullYear()} Properties Available
            </span>
          </motion.div>

          {/* Title */}
          <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            {t("hero.title")}
          </h1>

          {/* Subtitle */}
          <p className="mb-8 max-w-2xl text-xl leading-relaxed text-white/80">
            {t("hero.subtitle")}
          </p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-10 flex flex-wrap gap-8"
          >
            {[
              { value: "500+", label: "Properties" },
              { value: "1000+", label: "Happy Clients" },
              { value: "15+", label: "Years Experience" },
              { value: "20+", label: "Cities" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="/properties"
              className="inline-flex transform items-center rounded-lg bg-primary-600 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-primary-700 hover:shadow-xl"
            >
              {t("hero.cta")}
              <svg
                className="ml-2 h-5 w-5"
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
            </a>
            <a
              href="/about"
              className="inline-flex items-center rounded-lg border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              {t("common.learn_more")}
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-white/60">
          <span className="mb-2 text-xs">Scroll to explore</span>
          <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/30 pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-1.5 w-1.5 rounded-full bg-white"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
