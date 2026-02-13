import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Bulgarian Properties. Our experienced team is ready to help you find your perfect property in Bulgaria.",
  openGraph: {
    title: "Contact Us | Bulgarian Properties",
    description:
      "Get in touch with Bulgarian Properties. Our experienced team is ready to help you find your perfect property in Bulgaria.",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
