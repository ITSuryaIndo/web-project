/**
 * =============================================================
 * ROBOTS.TXT GENERATOR — /robots.txt
 * =============================================================
 *
 * File ini otomatis di-generate oleh Next.js App Router.
 * Ketika kamu akses https://domain.com/robots.txt,
 * Next.js akan memanggil function default export di bawah
 * dan mengubah return value-nya menjadi plain text.
 *
 * CARA KERJA:
 * 1. Function ini return object dengan rules dan sitemap
 * 2. Next.js convert object → robots.txt format
 *
 * DEBUGGING:
 * - Akses http://localhost:3000/robots.txt di browser
 * - Kalau blank/error → cek apakah function return object yang valid
 * - Kalau bot tetap crawl halaman terlarang → pastikan Disallow path benar
 * - Ingat: robots.txt itu "saran" buat bot, bukan firewall
 *
 * RULES:
 * - userAgent: "*"     → berlaku untuk SEMUA bot (Google, Bing, dll)
 * - allow: "/"         → izinkan crawl semua halaman
 * - disallow: "/api/"  → larang crawl endpoint API (kalau ada)
 *
 * CATATAN:
 * - Sitemap URL harus absolute (full domain)
 * - Harus sama domain dengan yang di sitemap.ts
 * - Kalau mau block halaman tertentu, tambah di disallow array
 *
 * REFERENSI:
 * - https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 * - https://developers.google.com/search/docs/crawling-indexing/robots/intro
 * =============================================================
 */

import type { MetadataRoute } from "next";

// Ganti dengan domain produksi nanti
// Harus sama dengan BASE_URL di sitemap.ts dan metadataBase di layout.tsx
const BASE_URL = "https://ptsuryaindoi.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // ---- RULE UNTUK SEMUA BOT ----
        userAgent: "*",

        // Halaman yang BOLEH di-crawl
        allow: "/",

        // Halaman yang TIDAK BOLEH di-crawl
        // Tambahkan path di sini kalau ada halaman yang mau di-block
      },
    ],

    // Lokasi sitemap — Google akan baca ini untuk menemukan sitemap.xml
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
