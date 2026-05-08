import type { Metadata } from "next";
import ContactUs from "../components/ContactUs";

export const metadata: Metadata = {
  // Akan dirender sebagai: "Contact Us | Surya Indo International Indonesia"
  title: "Contact Us",
  description:
    "Learn about Surya Indo International Indonesia — a trusted agro products trading and export company specializing in premium-grade betel nuts for international markets.",
  openGraph: {
    title: "Contact Us Surya Indo International Indonesia",
    description:
      "Discover our story, commitment to quality, and why global buyers trust us for premium betel nut exports.",
    url: "/kontak",
  },
};

export default function ContactUsPage() {
  return <ContactUs/>;
}
