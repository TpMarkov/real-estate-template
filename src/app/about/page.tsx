import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Bulgarian Properties - your trusted real estate partner in Bulgaria. With over 15 years of experience, we help you find your dream property.",
  openGraph: {
    title: "About Us | Bulgarian Properties",
    description:
      "Learn about Bulgarian Properties - your trusted real estate partner in Bulgaria.",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
