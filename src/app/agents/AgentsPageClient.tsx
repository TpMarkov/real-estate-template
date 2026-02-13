"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/lib/siteConfig";

const AgentsPageClient: React.FC = () => {
  const { t } = useLanguage();

  // TODO: Replace with actual agents data from API/database
  // Agent photos use Unsplash - images replaced for production quality
  const agents = [
    {
      id: "agent-1",
      name: "Ivan Petrov",
      email: "ivan.petrov@bulgarianproperties.com",
      phone: "+359 888 123 456",
      photo:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&auto=format",
      bio: {
        en: "Senior Real Estate Agent with over 15 years of experience in the Bulgarian property market. Specializes in luxury properties and commercial real estate.",
        bg: "Старши агент за недвижими имоти с над 15 години опит на българския пазар. Специализира в луксозни имоти и търговска недвижима собственост.",
      },
      languages: ["English", "Bulgarian", "Russian"],
      properties: 45,
      specialization: "Luxury Properties",
    },
    {
      id: "agent-2",
      name: "Maria Georgieva",
      email: "maria.georgieva@bulgarianproperties.com",
      phone: "+359 889 234 567",
      photo:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&auto=format",
      bio: {
        en: "Expert in coastal properties with extensive knowledge of the Black Sea region. Fluent in multiple languages and dedicated to finding the perfect vacation home.",
        bg: "Експерт по крайбрежни имоти с обширни познания за региона на Черно море. Говори няколко езика и е посветена на намирането на идеалната ваканционна къща.",
      },
      languages: ["English", "Bulgarian", "German"],
      properties: 38,
      specialization: "Coastal Properties",
    },
    {
      id: "agent-3",
      name: "Alexander Dimitrov",
      email: "alexander.dimitrov@bulgarianproperties.com",
      phone: "+359 887 345 678",
      photo:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&auto=format",
      bio: {
        en: "Specialist in mountain properties and ski resorts. Deep knowledge of Bansko, Borovets, and Pamporovo real estate markets.",
        bg: "Специалист по планински имоти и ски курорти. Дълбоко познаване на пазарите на недвижими имоти в Банско, Боровец и Пампорово.",
      },
      languages: ["English", "Bulgarian", "French"],
      properties: 32,
      specialization: "Mountain Properties",
    },
    {
      id: "agent-4",
      name: "Elena Nikolova",
      email: "elena.nikolova@bulgarianproperties.com",
      phone: "+359 886 456 789",
      photo:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&auto=format",
      bio: {
        en: "Residential property expert focusing on Sofia and Plovdiv markets. First-time buyer specialist with a client-first approach.",
        bg: "Експерт по жилищни имоти, фокусиран върху пазарите в София и Пловдив. Специалист за първокупувачи с подход, ориентиран към клиента.",
      },
      languages: ["English", "Bulgarian"],
      properties: 52,
      specialization: "Residential Properties",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 font-display text-4xl font-bold text-white md:text-5xl"
          >
            {t("agents")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-3xl text-xl text-white/80"
          >
            Meet our team of experienced real estate professionals dedicated to
            helping you find your perfect property in Bulgaria.
          </motion.p>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {agents.map((agent, index) => (
              <motion.article
                key={agent.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="overflow-hidden rounded-xl bg-white shadow-lg transition-shadow hover:shadow-xl"
              >
                <div className="md:flex">
                  {/* Agent Photo */}
                  <div className="relative md:w-1/3">
                    <div className="relative aspect-square md:aspect-auto md:h-full">
                      <Image
                        src={agent.photo}
                        alt={`Portrait of ${agent.name}`}
                        fill
                        className="h-full w-full object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  </div>

                  {/* Agent Info */}
                  <div className="p-6 md:w-2/3">
                    <div className="mb-4 flex items-start justify-between">
                      <div>
                        <h2 className="text-2xl font-semibold text-gray-900">
                          {agent.name}
                        </h2>
                        <p className="font-medium text-primary-600">
                          {agent.specialization}
                        </p>
                      </div>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700">
                        {agent.properties} {t("properties")}
                      </span>
                    </div>

                    <p className="mb-4 line-clamp-3 text-gray-600">
                      {agent.bio.en}
                    </p>

                    {/* Languages */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {agent.languages.map((lang) => (
                          <span
                            key={lang}
                            className="rounded bg-gray-100 px-2 py-1 text-sm text-gray-700"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <svg
                          className="h-4 w-4 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <a
                          href={`mailto:${agent.email}`}
                          className="transition-colors hover:text-primary-600"
                        >
                          {agent.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg
                          className="h-4 w-4 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        <a
                          href={`tel:${agent.phone.replace(/\s/g, "")}`}
                          className="transition-colors hover:text-primary-600"
                        >
                          {agent.phone}
                        </a>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-6">
                      <Link
                        href={`/contact?agent=${agent.id}`}
                        className="inline-flex w-full items-center justify-center rounded-lg bg-primary-600 px-4 py-2 font-medium text-white transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                      >
                        {t("contact.title")}
                        <svg
                          className="ml-2 h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 font-display text-3xl font-bold text-white md:text-4xl">
              Want to Join Our Team?
            </h2>
            <p className="mb-8 text-lg text-white/80">
              We're always looking for talented real estate professionals to
              join our growing team. Get in touch to learn about career
              opportunities.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-white px-8 py-3 font-semibold text-primary-600 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
            >
              {t("contact.title")}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AgentsPageClient;
