import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Wajib ada agar URL OG image otomatis jadi absolute URL
  metadataBase: new URL("https://ptsuryaindoi.com"),

  // Title template: halaman lain akan tampil "Judul Halaman | Surya Indo International Indonesia"
  title: {
    default: "Surya Indo International Indonesia — Premium Betel Nut Supplier",
    template: "%s | Surya Indo International Indonesia",
  },

  description:
    "Leading Indonesian agro products exporter specializing in premium-grade betel nuts. Whole, split, and sliced grades for global markets.",

  // Default Open Graph (fallback untuk semua halaman)
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Surya Indo International Indonesia",
    title: "Surya Indo International Indonesia",
    description:
      "Leading Indonesian agro products exporter specializing in premium-grade betel nuts. Serving global markets.",
    images: [
      {
        url: "/images/ship-loaded.jpg",
        width: 1200,
        height: 630,
        alt: "Surya Indo International Indonesia — Premium Betel Nut Supplier",
      },
    ],
  },

  // Default Twitter Card (fallback untuk semua halaman)
  twitter: {
    card: "summary_large_image",
    title: "Surya Indo International Indonesia",
    description:
      "Leading Indonesian agro products exporter specializing in premium-grade betel nuts.",
    images: ["/images/ship-loaded.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
