import type { Metadata } from "next";
import TermsPageClient from "./TermsPageClient";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the terms and conditions for using Bulgarian Properties website and services. Understand your rights and responsibilities.",
  openGraph: {
    title: "Terms of Service | Bulgarian Properties",
    description:
      "Read the terms and conditions for using Bulgarian Properties website and services.",
    type: "website",
  },
};

export default function TermsPage() {
  return <TermsPageClient />;
}
