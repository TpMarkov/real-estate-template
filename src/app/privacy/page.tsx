import type { Metadata } from "next";
import PrivacyPageClient from "./PrivacyPageClient";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Bulgarian Properties collects, uses, and protects your personal information. Read our comprehensive privacy policy.",
  openGraph: {
    title: "Privacy Policy | Bulgarian Properties",
    description:
      "Learn how Bulgarian Properties collects, uses, and protects your personal information.",
    type: "website",
  },
};

export default function PrivacyPage() {
  return <PrivacyPageClient />;
}
