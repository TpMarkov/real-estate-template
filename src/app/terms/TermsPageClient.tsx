"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";

const TermsPageClient: React.FC = () => {
  const lastUpdated = "January 1, 2024";

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
          >
            Terms of Service
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80"
          >
            Last updated: {lastUpdated}
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8 md:p-12 prose prose-gray max-w-none"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600 mb-6">
              By accessing and using {siteConfig.url} ("the Website"), you
              accept and agree to be bound by these Terms of Service. If you do
              not agree to these terms, please do not use our Website or
              services.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
              2. Description of Services
            </h2>
            <p className="text-gray-600 mb-6">
              {siteConfig.contact.businessName} provides real estate listing and
              brokerage services in Bulgaria. Our Website allows users to browse
              property listings, contact agents, and access real estate
              information.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
              3. User Accounts
            </h2>
            <p className="text-gray-600 mb-4">
              When you create an account with us, you must provide accurate and
              complete information. You are responsible for:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>
                Maintaining the confidentiality of your account credentials
              </li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
              <li>Ensuring your account information remains accurate</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
              4. Use of Website
            </h2>
            <p className="text-gray-600 mb-4">
              You agree to use our Website only for:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Lawful purposes</li>
              <li>In compliance with all applicable laws and regulations</li>
              <li>In accordance with these Terms of Service</li>
            </ul>
            <p className="text-gray-600 mb-4">You agree not to:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Use the Website in any way that violates applicable laws</li>
              <li>Transmit any material that is unlawful or harmful</li>
              <li>
                Attempt to gain unauthorized access to any part of the Website
              </li>
              <li>Interfere with or disrupt the Website's operation</li>
              <li>Collect user information without consent</li>
              <li>
                Use automated systems to access the Website without permission
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
              5. Property Listings
            </h2>
            <p className="text-gray-600 mb-6">
              While we strive to provide accurate and up-to-date property
              information, we cannot guarantee the accuracy of all listings.
              Property details, prices, and availability are subject to change
              without notice. We recommend verifying all information directly
              with our agents before making any decisions.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
              6. Intellectual Property
            </h2>
            <p className="text-gray-600 mb-6">
              All content on this Website, including text, graphics, logos,
              images, and software, is the property of{" "}
              {siteConfig.contact.businessName} or its content suppliers and is
              protected by intellectual property laws. You may not reproduce,
              distribute, or create derivative works without our express written
              permission.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
              7. Limitation of Liability
            </h2>
            <p className="text-gray-600 mb-6">
              To the fullest extent permitted by law,{" "}
              {siteConfig.contact.businessName} shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages
              arising from your use of the Website or services. Our total
              liability shall not exceed the amount you paid us, if any, for
              accessing the Website.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
              8. Disclaimer of Warranties
            </h2>
            <p className="text-gray-600 mb-6">
              The Website and its content are provided "as is" without
              warranties of any kind, either express or implied. We do not
              warrant that the Website will be uninterrupted, error-free, or
              free of viruses or other harmful components.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
              9. Third-Party Links
            </h2>
            <p className="text-gray-600 mb-6">
              Our Website may contain links to third-party websites. We are not
              responsible for the content, privacy policies, or practices of any
              third-party websites. We encourage you to read the terms and
              privacy policies of any linked websites.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
              10. Modifications to Terms
            </h2>
            <p className="text-gray-600 mb-6">
              We reserve the right to modify these Terms of Service at any time.
              Changes will be effective immediately upon posting on the Website.
              Your continued use of the Website after any changes constitutes
              acceptance of the new terms.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
              11. Governing Law
            </h2>
            <p className="text-gray-600 mb-6">
              These Terms of Service shall be governed by and construed in
              accordance with the laws of the Republic of Bulgaria, without
              regard to its conflict of law provisions.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
              12. Contact Information
            </h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about these Terms of Service, please
              contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <p className="text-gray-900 font-semibold mb-2">
                {siteConfig.contact.businessName}
              </p>
              <p className="text-gray-600 mb-1">{siteConfig.contact.address}</p>
              <p className="text-gray-600 mb-1">
                Email:{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-primary-600 hover:underline"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
              <p className="text-gray-600">
                Phone:{" "}
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="text-primary-600 hover:underline"
                >
                  {siteConfig.contact.phone}
                </a>
              </p>
            </div>
          </motion.article>
        </div>
      </section>
    </div>
  );
};

export default TermsPageClient;
