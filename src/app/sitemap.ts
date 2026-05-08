/**
 * =============================================================
 * SITEMAP GENERATOR — /sitemap.xml
 * =============================================================
 *
 * File ini otomatis di-generate oleh Next.js App Router.
 * Ketika kamu akses https://domain.com/sitemap.xml,
 * Next.js akan memanggil function default export di bawah
 * dan mengubah return value-nya menjadi XML.
 *
 * CARA KERJA:
 * 1. Function ini return array of objects
 * 2. Setiap object = 1 URL di sitemap
 * 3. Next.js convert array → XML secara otomatis
 *
 * DEBUGGING:
 * - Akses http://localhost:3000/sitemap.xml di browser
 * - Kalau blank/error → cek apakah function return array yang valid
 * - Kalau URL salah → cek BASE_URL di bawah
 * - Kalau halaman baru tidak muncul → tambahkan entry baru di array
 *
 * CATATAN:
 * - URL harus absolute (pakai full domain), bukan relative
 * - lastModified → kapan terakhir konten halaman berubah
 * - changeFrequency → petunjuk ke Google seberapa sering crawl
 * - priority → 0.0 - 1.0, seberapa penting halaman ini vs yang lain
 *
 * REFERENSI:
 * - https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 * - https://www.sitemaps.org/protocol.html
 * =============================================================
 */

import type { MetadataRoute } from "next";

// Ganti dengan domain produksi nanti
// Harus sama dengan metadataBase di layout.tsx
const BASE_URL = "https://ptsuryaindoi.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ---- HOMEPAGE ----
    // Halaman utama, priority paling tinggi
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly", // Konten homepage jarang berubah
      priority: 1, // 1.0 = paling penting
    },

    // ---- CONTACT PAGE ----
    // Halaman kontak, priority sedikit lebih rendah
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "yearly", // Info kontak sangat jarang berubah
      priority: 0.8,
    },

    // ---- TAMBAH HALAMAN BARU DI SINI ----
    // Contoh kalau nanti ada halaman /about:
    // {
    //   url: `${BASE_URL}/about`,
    //   lastModified: new Date(),
    //   changeFrequency: "monthly",
    //   priority: 0.7,
    // },
  ];
}
