"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const footerLinks = {
    properties: [
      { href: "/properties?status=for_sale", label: t("buy") },
      { href: "/properties?status=for_rent", label: t("rent") },
      { href: "/properties?type=villa", label: t("type.villa") },
      { href: "/properties?type=apartment", label: t("type.apartment") },
    ],
    company: [
      { href: "/about", label: t("about") },
      { href: "/contact", label: t("contact") },
      { href: "/agents", label: t("agents") },
    ],
    legal: [
      { href: "/privacy", label: t("footer.privacy") },
      { href: "/terms", label: t("footer.terms") },
    ],
  };

  const subscribeText = t("subscribe");

  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-primary-700">
                <span className="text-xl font-bold text-white">BP</span>
              </div>
              <span className="font-display text-xl font-bold">
                Bulgarian Properties
              </span>
            </div>
            <p className="text-sm text-gray-400">{t("hero.subtitle")}</p>
            <div className="w-full">
              <p className="mb-3 text-sm font-medium">
                {t("footer.newsletter")}
              </p>
              <form
                className="flex w-full flex-col gap-2"
                onSubmit={(e) => e.preventDefault()}
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address for newsletter
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder={t("footer.newsletter_placeholder")}
                  className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-900 sm:w-auto"
                >
                  {subscribeText}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Properties Links */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            aria-labelledby="footer-properties-heading"
          >
            <h3
              id="footer-properties-heading"
              className="mb-4 text-lg font-semibold"
            >
              {t("footer.properties")}
            </h3>
            <ul className="space-y-3" role="list">
              {footerLinks.properties.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded text-gray-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Company Links */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            aria-labelledby="footer-company-heading"
          >
            <h3
              id="footer-company-heading"
              className="mb-4 text-lg font-semibold"
            >
              {t("footer.about")}
            </h3>
            <ul className="space-y-3" role="list">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded text-gray-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Contact Info */}
          <motion.address
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            aria-labelledby="footer-contact-heading"
            className="not-italic"
          >
            <h3
              id="footer-contact-heading"
              className="mb-4 text-lg font-semibold"
            >
              {t("contact.info")}
            </h3>
            <ul className="space-y-3 text-gray-400" role="list">
              <li className="flex items-start space-x-3">
                <svg
                  className="mt-0.5 h-5 w-5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                {/* TODO: Replace with client contact details */}
                <span className="text-sm">{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="h-5 w-5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a2 2 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {/* TODO: Replace with client contact details */}
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="rounded text-sm transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="h-5 w-5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                {/* TODO: Replace with client contact details */}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="rounded text-sm transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </motion.address>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between space-y-4 border-t border-gray-800 pt-8 md:flex-row md:space-y-0">
          <p className="text-center text-sm text-gray-400 md:text-left">
            © {new Date().getFullYear()} {siteConfig.name}.{" "}
            {t("footer.copyright")}
          </p>
          <nav aria-label="Legal links">
            <ul className="flex space-x-6" role="list">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded text-sm text-gray-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
