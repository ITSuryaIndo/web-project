import type { Metadata } from "next";
import AboutClient from "../components/AboutClient";

export const metadata: Metadata = {
  // Akan dirender sebagai: "About Us | Surya Indo International Indonesia"
  title: "About Us",
  description:
    "Learn about Surya Indo International Indonesia — a trusted agro products trading and export company specializing in premium-grade betel nuts for international markets.",
  openGraph: {
    title: "About Surya Indo International Indonesia",
    description:
      "Discover our story, commitment to quality, and why global buyers trust us for premium betel nut exports.",
    url: "/about",
    images: [
      {
        url: "/images/ship-loaded.jpg",
        width: 1200,
        height: 630,
        alt: "About Surya Indo International Indonesia",
      },
    ],
  },
  twitter: {
    title: "About Us | Surya Indo International Indonesia",
    description:
      "Discover our story, commitment to quality, and why global buyers trust us.",
    images: ["/images/ship-loaded.jpg"],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
