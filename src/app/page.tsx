import type { Metadata } from "next";
import HomeClient from "./components/HomeClient";

export const metadata: Metadata = {
  title: "Premium Betel Nut Exporter from Indonesia",
  description:
    "Surya Indo International Indonesia — agro products trading and export company supplying premium-grade split, whole, and sliced betel nuts to international markets. Request a quote today.",
  openGraph: {
    title: "Surya Indo International Indonesia — Premium Betel Nut Supplier",
    description:
      "Surya Indo International Indonesia — agro products trading and export company supplying premium-grade split, whole, and sliced betel nuts to international markets.",
    url: "/",
    images: [
      {
        url: "/images/ship-loaded.jpg",
        width: 1200,
        height: 630,
        alt: "Surya Indo International Indonesia — Premium Betel Nut Supplier",
      },
    ],
  },
  twitter: {
    title: "Surya Indo International Indonesia — Premium Betel Nut Supplier",
    description:
      "Premium-grade betel nut exports from Indonesia. Split, whole, and sliced grades for international buyers.",
    images: ["/images/ship-loaded.jpg"],
  },
};

export default function HomePage() {
  return <HomeClient />;
}
