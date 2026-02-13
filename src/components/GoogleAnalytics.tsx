"use client";

import Script from "next/script";
import { siteConfig } from "@/lib/siteConfig";

export default function GoogleAnalytics() {
  const measurementId = siteConfig.analytics.gaMeasurementId;

  // Don't render if no measurement ID
  if (!measurementId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_title: document.title,
            page_location: window.location.href,
            send_page_view: true,
          });
        `}
      </Script>
    </>
  );
}

// Helper function to track events
export function trackEvent(
  action: string,
  category: string,
  label?: string,
  value?: number,
) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

// Helper function to track page views
export function trackPageView(url: string) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("config", siteConfig.analytics.gaMeasurementId, {
      page_path: url,
    });
  }
}

// Helper function to track form submissions
export function trackFormSubmission(formName: string) {
  trackEvent("form_submit", "engagement", formName);
}

// Helper function to track property views
export function trackPropertyView(propertyId: string, propertyName: string) {
  trackEvent(
    "view_item",
    "property",
    propertyName,
    parseInt(propertyId.replace(/\D/g, "")) || 0,
  );
}

// Helper function to track contact clicks
export function trackContactClick(contactType: string) {
  trackEvent("click", "contact", contactType);
}
