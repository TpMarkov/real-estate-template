import type { Metadata } from "next";
import AgentsPageClient from "./AgentsPageClient";

export const metadata: Metadata = {
  title: "Our Agents",
  description:
    "Meet our experienced real estate agents. Our team of professionals is here to help you find your perfect property in Bulgaria.",
  openGraph: {
    title: "Our Agents | Bulgarian Properties",
    description:
      "Meet our experienced real estate agents. Our team of professionals is here to help you find your perfect property in Bulgaria.",
    type: "website",
  },
};

export default function AgentsPage() {
  return <AgentsPageClient />;
}
