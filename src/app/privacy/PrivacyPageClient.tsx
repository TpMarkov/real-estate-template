"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";

const PrivacyPageClient: React.FC = () => {
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
            Privacy Policy
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
              1. Introduction
            </h2>
            <p className="text-gray-600 mb-6">
              {siteConfig.contact.businessName} ("we," "our," or "us") is
              committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when
              you visit our website {siteConfig.url} or use our services.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
              2. Information We Collect
            </h2>
            <h3 className="text-xl font-medium text-gray-900 mb-3">
              Personal Information
            </h3>
            <p className="text-gray-600 mb-4">
              We may collect personal information that you voluntarily provide
              to us when you:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Fill out contact forms</li>
              <li>Subscribe to our newsletter</li>
              <li>Request property information</li>
              <li>Create an account</li>
              <li>Communicate with our agents</li>
            </ul>
            <p className="text-gray-600 mb-6">
              This information may include your name, email address, phone
              number, mailing address, and any other information you choose to
              provide.
            </p>

            <h3 className="text-xl font-medium text-gray-900 mb-3">
              Automatically Collected Information
            </h3>
            <p className="text-gray-600 mb-6">
              When you visit our website, we automatically collect certain
              information about your device, including your IP address, browser
              type, operating system, referring URLs, and information about how
              you interact with our website.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-600 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Provide, operate, and maintain our website</li>
              <li>Respond to your inquiries and requests</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Analyze usage patterns and trends</li>
              <li>Protect against fraudulent activity</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
              4. Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-600 mb-6">
              We use cookies and similar tracking technologies to track activity
              on our website and store certain information. Cookies are files
              with small amounts of data which may include an anonymous unique
              identifier.
            </p>
            <p className="text-gray-600 mb-6">
              You can instruct your browser to refuse all cookies or to indicate
              when a cookie is being sent. However, if you do not accept
              cookies, you may not be able to use some portions of our website.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
              5. Third-Party Services
            </h2>
            <p className="text-gray-600 mb-6">
              We may use third-party services that collect, monitor, and analyze
              website traffic, such as Google Analytics. These third-party
              service providers have their own privacy policies addressing how
              they use such information.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
              6. Data Security
            </h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate technical and organizational security
              measures to protect your personal information. However, please
              note that no method of transmission over the Internet or
              electronic storage is 100% secure.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
              7. Your Rights
            </h2>
            <p className="text-gray-600 mb-4">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Access to your personal data</li>
              <li>Correction of inaccurate data</li>
              <li>Deletion of your data</li>
              <li>Restriction of processing</li>
              <li>Data portability</li>
              <li>Objection to processing</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
              8. Children's Privacy
            </h2>
            <p className="text-gray-600 mb-6">
              Our website is not intended for children under 18 years of age. We
              do not knowingly collect personal information from children under
              18.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
              9. Changes to This Policy
            </h2>
            <p className="text-gray-600 mb-6">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the "Last updated" date.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
              10. Contact Us
            </h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy, please
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

export default PrivacyPageClient;
