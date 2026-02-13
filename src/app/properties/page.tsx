import type { Metadata } from "next";
import PropertiesPageClient from "./PropertiesPageClient";

export const metadata: Metadata = {
  title: "Properties",
  description:
    "Browse our extensive collection of properties for sale and rent in Bulgaria. Find apartments, houses, villas, and commercial properties in Sofia, Varna, Plovdiv, and more.",
  openGraph: {
    title: "Properties | Bulgarian Properties",
    description:
      "Browse our extensive collection of properties for sale and rent in Bulgaria.",
    type: "website",
  },
};

export default function PropertiesPage() {
  return <PropertiesPageClient />;
}
