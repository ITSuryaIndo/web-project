"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type Language = "en" | "id";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    "nav.home": "HOME",
    "nav.products": "PRODUCTS",
    "nav.contact": "ABOUT US",
    "nav.contactBtn": "CONTACT US",

    // Hero
    "hero.badge": "GLOBAL REACH · INDUSTRY PROVEN",
    "hero.title": "PREMIUM BETEL NUT AND SPICES EXPORTS FOR THE WORLD'S DEMANDING MARKETS.",
    "hero.subtitle": "Exported to 50+ countries with 40Ton/month Sourced from Indonesian Farmers, Delivered with Consistent Quality and Every shipment is backed by verified documentation and compliance with international trade standards.",
    "hero.cta1": "Download Product Catalog",
    "hero.cta2": "View Product",

    // About
    "about.badge": "COMPANY OVERVIEW",
    "about.title": "RELIABLE BETEL NUT & SPICES EXPORTER FROM INDONESIA.",
    "about.desc1": "PT. SURYA INDO INTERNATIONAL INDONESIA is a leading Indonesian-based agro products trading and export company, specializing in premium-grade betel nuts and tropical spices. including Nutmeg, Clove, Pepper, Cinnamon, etc. sourced from our key producing regions in Jambi and Medan, in the heart of Indonesia's most productive agro growing zones.",
    "about.desc2": "Our commitment goes beyond simply supplying commodities. We provide comprehensive solutions, ranging from careful supplier selection and strict quality control to efficient logistics and reliable delivery schedules. Every shipment is backed by verified documentation and compliance with international trade standards.",
    "about.readMore": "READ FULL PROFILE →",
    "about.stat1": "50+",
    "about.stat1Label": "INTERNATIONAL CLIENTS",
    "about.stat2": "A+",
    "about.stat2Label": "QUALITY GRADE COMPLIANCE",
    "about.missionLabel": "OUR COMMITMENT",
    "about.missionTitle": "Uncompromising Quality Excellence",
    "about.subtitle": "From the heart of Sumatra to the global market, we bridge the gap between premium tropical harvests and international industrial standards.",
    "about.desc1Short": "We implement rigorous moisture control and purity testing to ensure every shipment meets the high demands of the global pharmaceutical and food industries.",

    // Products
    "products.badge": "PRODUCT CATALOG",
    "products.title": "OUR PRODUCT",
    "products.subtitle": "Three categories of premium betel nut varieties, each processed to exacting standards that meet the demands of international buyers.",
    "products.downloadBtn": "DOWNLOAD SPEC SHEET",
    "products.1.title": "WHOLE BETEL NUT (PINANG BULAT KERING)",
    "products.1.desc": "High-quality dried whole betel nuts processed from selected fruits. Undergoes strict sorting and optimal drying to ensure long shelf life and international export standards.",
    "products.1.bullet1": "Moisture Content: Max 5%",
    "products.1.bullet2": "Good Cut/Density: Min. 90% (Dense seeds,not hollow)",
    "products.1.bullet3": "Fungus Free: 100% (Aflatoxin controlled)",
    "products.1.bullet4": "Quality Grade: 85-90 90-95 95++  (Based on maturity)",
    "products.1.keywords": "Keywords: Whole Areca Nut Indonesia, Supplier Pinang Bulat, Dried Betel Nut Bulk.",
    "products.2.title": "SPLIT BETEL NUT (PINANG BELAH)",
    "products.2.desc": "Precisely split betel nuts, allowing easy internal quality verification. Perfectly suited as raw material for pharmaceutical industries and traditional consumption in global markets.",
    "products.2.bullet1": "Moisture Content:  0-3% 3-5%",
    "products.2.bullet2": "Good Cut/Density: Min. 90% (Dense seeds,not hollow)",
    "products.2.bullet3": "Fungus Free: 100% (Aflatoxin controlled)",
    "products.2.bullet4": "Quality Grade: 85-90 90-95 95++ (Roasted)",
    "products.2.keywords": "Keywords: Split Areca Nut Indonesia, Supplier Pinang Belah, Dried Betel Nut Slices.",
    "products.3.title": "CLOVE (CENGKEH)",
    "products.3.desc": "Premium quality dried cloves sourced from Indonesia's finest plantations. Known for their strong aroma and high essential oil content, perfect for culinary and pharmaceutical applications.",
    "products.3.bullet1": "Moisture Content: Max 14%",
    "products.3.bullet2": "Essential Oil Content: Min. 17%",
    "products.3.bullet3": "Purity: 99% (Free from stems and foreign matter)",
    "products.3.bullet4": "Quality Grade: Premium Export Grade",
    "products.4.title": "LONG PEPPER (CABE JAWA)",
    "products.4.desc": "Traditional Indonesian long pepper with distinctive spicy flavor. Highly valued in traditional medicine and gourmet cuisine for its unique taste profile and health benefits.",
    "products.4.bullet1": "Moisture Content: Max 12%",
    "products.4.bullet2": "Piperine Content: Min. 4%",
    "products.4.bullet3": "Length: 2-5 cm (Premium grade)",
    "products.4.bullet4": "Quality Grade: Export Standard",
    "products.5.title": "NUTMEG (BUAH PALA)",
    "products.5.desc": "Whole dried nutmeg from premium Indonesian plantations. Rich in essential oils and aromatic compounds, ideal for spice trade and food processing industries.",
    "products.5.bullet1": "Moisture Content: Max 10%",
    "products.5.bullet2": "Essential Oil Content: Min. 8%",
    "products.5.bullet3": "Size: 110-120 pieces per kg",
    "products.5.bullet4": "Quality Grade: ABCD Grade Available",
    "products.6.title": "MACE (BUNGA PALA)",
    "products.6.desc": "Premium dried mace, the delicate outer covering of nutmeg. Prized for its subtle flavor and vibrant color, essential for high-end culinary applications.",
    "products.6.bullet1": "Moisture Content: Max 12%",
    "products.6.bullet2": "Color: Bright Orange-Red",
    "products.6.bullet3": "Essential Oil Content: Min. 10%",
    "products.6.bullet4": "Quality Grade: Whole Blade Premium",
    "products.7.title": "CUBEB PEPPER (KEMUKUS)",
    "products.7.desc": "Rare Indonesian cubeb pepper with distinctive tail and complex flavor profile. Sought after for specialty spice blends and traditional medicine applications.",
    "products.7.bullet1": "Moisture Content: Max 13%",
    "products.7.bullet2": "Essential Oil Content: Min. 10%",
    "products.7.bullet3": "Purity: 98% (With characteristic tail)",
    "products.7.bullet4": "Quality Grade: Premium Wild Harvest",
    "products.8.title": "OTHER SPICES (ETC)",
    "products.8.desc": "We also supply a wide range of other premium Indonesian spices including white pepper, black pepper, cinnamon, cardamom, and more. Contact us for specific requirements.",
    "products.8.bullet1": "Various spice varieties available",
    "products.8.bullet2": "Custom processing and packaging",
    "products.8.bullet3": "Certified quality standards",
    "products.8.bullet4": "Flexible order quantities",

    // Heritage
    "heritage.badge": "OUR COMPANY",
    "heritage.title": "HERITAGE, QUALITY, AND TRUST",
    "heritage.desc1": "Our company is deeply rooted in the rich traditions of Indonesian betel nut cultivation, passed down through generations. We combine this traditional knowledge with modern quality control methods to deliver a product that consistently exceeds expectations.",
    "heritage.desc2": "Our processing facilities employ rigorous quality assurance protocols, from initial harvesting to packaging and shipping. Every batch is inspected, graded, and certified before leaving our facility.",
    "heritage.cta": "VIEW OUR STANDARDS",
    "heritage.processingLabel": "PROCESSING FACILITY",
    "heritage.globalLabel": "GLOBAL BATCH",

    // CTA
    "cta.title": "READY TO SECURE YOUR SUPPLY?",
    "cta.desc": "Our experts can tailor a supply plan to your specific commodity grade requirements, budget, and logistics timeline.",
    "cta.placeholder": "ENTER EMAIL FOR QUOTE",
    "cta.btn": "REQUEST CONSULTATION",

    // Footer
    "footer.desc": "PRECISION TRADING & GLOBAL LOGISTICS.",
    "footer.Address": "Address :",
    "footer.shipmentTracking": "SHIPMENT TRACKING",
    "footer.privacyPolicy": "Email: hafiz@gmail.com",
    "footer.termsOfTrade": "Telephone: +62-853-7174-3671",

    // Contact Page
    "contact.title": "ABOUT US",
    "contact.subtitle": "Surya Indo International Indonesia is a trusted agro products trading and export company based in Indonesia. We specialize in premium-grade betel nuts, delivering quality and reliability to global markets.",
    "contact.formTitle": "INITIATE INQUIRY",
    "contact.company": "COMPANY / ENTITY",
    "contact.companyPlaceholder": "e.g. Acme Logistics",
    "contact.primaryContact": "PRIMARY CONTACT",
    "contact.primaryContactPlaceholder": "Full Name",
    "contact.email": "SECURE EMAIL",
    "contact.emailPlaceholder": "contact@domain.com",
    "contact.phone": "DIRECT LINE",
    "contact.phonePlaceholder": "+1 (555) 000-0000",
    "contact.commodity": "COMMODITY INTEREST",
    "contact.commodityDefault": "Whole Grade A Betel Nut",
    "contact.operational": "OPERATIONAL DETAILS / VOLUME SPECS",
    "contact.operationalPlaceholder": "Provide destination port, monthly volume requirements, etc.",
    "contact.submitBtn": "SUBMIT DIRECTIVE →",

    // HQ Card
    "hq.title": "HQ & ROUTING",
    "hq.addressTitle": "PRIMARY OPERATIONS TERMINAL",
    "hq.address": "Jl. Dokter Setia Budi NO.37 Kasang, Kota Jambi Indonesia\n Jln. Medan Binjai No 22 Paya Geli-Medan",
    "hq.phoneTitle": "GLOBAL DISPATCH",
    "hq.phone": "+62-853-7174-3671",
    "hq.phoneHours": "Operating 0800 – 1800 (GMT+7)",

    // WhatsApp
    "wa.chatLabel": "CHAT ON WHATSAPP",

    // Why Choose Us
    "whyUs.badge": "WHY CHOOSE US",
    "whyUs.title": "WHY SHOULD YOU CHOOSE US?",
    "whyUs.subtitle": "We deliver more than just products — we deliver trust, consistency, and a partnership built on decades of expertise.",
    "whyUs.point1Title": "Guaranteed Premium Quality",
    "whyUs.point1Desc": "Every batch undergoes rigorous multi-stage quality control. We maintain 98%+ purity and ≤12% moisture content, certified and documented before each shipment.",
    "whyUs.point2Title": "Reliable & On-Time Delivery",
    "whyUs.point2Desc": "Our established logistics network ensures consistent supply with on-time delivery to ports worldwide. No delays, no excuses — just dependable execution.",
    "whyUs.point3Title": "Direct Source, Best Price",
    "whyUs.point3Desc": "We source directly from Indonesia's most productive betel nut regions, cutting out middlemen to offer you the most competitive pricing in the market.",

    // FAQ
    "faq.badge": "FAQ",
    "faq.title": "FREQUENTLY ASKED QUESTIONS",
    "faq.subtitle": "Common questions about our products, ordering process, and shipping logistics.",
    "faq.q1": "What types of betel nut do you export?",
    "faq.a1": "We export three main grades: Whole Grade (complete, uncut premium betel nuts), Split Grade (perfectly halved for uniform size), and Sliced Grade (thinly sliced for specialized processing). All grades maintain 98%+ purity and ≤12% moisture content.",
    "faq.q2": "What is the minimum order quantity (MOQ)?",
    "faq.a2": "Our minimum order quantity starts from 1 container (approximately 18-20 metric tons). For trial orders, we can accommodate smaller quantities — please contact us to discuss your specific requirements.",
    "faq.q3": "Which countries do you export to?",
    "faq.a3": "We export to over 15 countries across Asia, the Middle East, and Europe. Our logistics network is well-established for major ports worldwide. If your destination isn't listed, reach out — we're constantly expanding.",
    "faq.q4": "How do you ensure product quality?",
    "faq.a4": "Our quality assurance process includes multi-stage inspection from harvest to packaging. Each batch is tested for moisture content, purity, and size uniformity. We provide certificates of analysis (COA) and phytosanitary certificates with every shipment.",
    "faq.q5": "What are the payment terms and shipping options?",
    "faq.a5": "We offer flexible payment terms including T/T (bank transfer) and L/C (Letter of Credit). Shipping is available FOB or CIF to your preferred port. Typical lead time from order confirmation to port departure is 2-4 weeks.",
	
    // CTA Contact
    "ctaContact.title": "READY TO BUY?",
    "ctaContact.desc": "Connect directly with our sales team on WhatsApp. Get instant quotes, product specs, and personalized supply plans.",
    "ctaContact.btn": "CHAT WITH US NOW",

    // Language Dialog
    "langDialog.title": "Choose Language",
    "langDialog.subtitle": "Select your preferred language to continue",
    "langDialog.en": "English",
    "langDialog.id": "Bahasa Indonesia",

    // Contact Us
    "C1": "Telephone :+62 853 7174 3671",
    "C2": "Office :",
    "C3": "Email : hafiz@gmail.com",
    "C4": "Open Hours : 8 AM - 5 PM",

  },
  id: {
    // Navbar
    "nav.home": "BERANDA",
    "nav.products": "PRODUK",
    "nav.contact": "TENTANG KAMI",
    "nav.contactBtn": "HUBUNGI KAMI",

    // Hero
    "hero.badge": "JANGKAUAN GLOBAL · TERBUKTI DI INDUSTRI",
    "hero.title": "EKSPOR PINANG PREMIUM DAN REMPAH-REMPAH UNTUK PASAR DUNIA YANG TINGGI.",
    "hero.subtitle": "Eksport kami telah mencapai 50+ negara dengan 40Ton/bulan berasal dari para petani Indonesia, Dikirim dengan kualitas yang konsisten dan disetiap pengiriman dilengkapi dokumen dengan kepatuhan terhadap standart Internasional ",
    "hero.cta1": "Unduh Katalog Produk",
    "hero.cta2": "Lihat Produk",

    // About
    "about.badge": "GAMBARAN PERUSAHAAN",
    "about.title": "Eksportir Terpercaya dari Indonesia untuk Pinang dan Rempah-Rempah.",
    "about.desc1": "PT. SURYA INDO INTERNATIONAL INDONESIA adalah perusahaan perdagangan dan ekspor produk pertanian terkemuka yang berbasis di Indonesia, yang mengkhususkan diri pada buah pinang dan rempah-rempah tropis berkualitas premium, termasuk pala, cengkeh, lada, kayu manis, dan lain-lain, yang dipasok dari wilayah produksi utama kami di Jambi dan Medan, yang terletak di jantung kawasan pertanian paling produktif di Indonesia.",
    "about.desc2": "Komitmen kami melampaui pasokan komoditas sederhana. Kami menyediakan solusi menyeluruh—dari pengadaan yang cermat dan kontrol kualitas ketat hingga logistik yang efisien dan jadwal pengiriman yang andal. Setiap pengiriman didukung oleh dokumentasi terverifikasi dan kepatuhan terhadap standar perdagangan internasional.",
    "about.readMore": "BACA PROFIL LENGKAP →",
    "about.stat1": "50+",
    "about.stat1Label": "KLIEN INTERNASIONAL",
    "about.stat2": "A+",
    "about.stat2Label": "KEPATUHAN GRADE KUALITAS",
    "about.missionLabel": "KOMITMEN KAMI",
    "about.missionTitle": "Keunggulan Kualitas Tanpa Kompromi",
    "about.subtitle": "Dari jantung perkebunan Sumatera hingga pasar dunia, kami menghubungkan hasil alam tropis terbaik dengan standar industri internasional yang ketat.",
    "about.desc1Short": "Kami menerapkan kontrol kelembapan dan pengujian kemurnian yang ketat untuk memastikan setiap pengiriman memenuhi tuntutan tinggi dari industri farmasi dan makanan global.",

    // Products
    "products.badge": "KATALOG PRODUK",
    "products.title": "PRODUK KAMI",
    "products.subtitle": "Tiga kategori varietas pinang premium, masing-masing diproses sesuai standar ketat yang memenuhi permintaan pembeli internasional.",
    "products.downloadBtn": "UNDUH LEMBAR SPESIFIKASI",
    "products.1.title": "PINANG BULAT KERING (WHOLE BETEL NUT)",
    "products.1.desc": "Pinang bulat kering berkualitas tinggi yang diproses dari buah pilihan. Melalui tahap sortasi ketat dan pengeringan optimal untuk memastikan ketahanan simpan dan standar ekspor.",
    "products.1.bullet1": "Moisture Content: Max 5%",
    "products.1.bullet2": "Good Cut/Density: Min. 90% (Dense seeds,not hollow)",
    "products.1.bullet3": "Fungus Free: 100% (Aflatoxin controlled)",
    "products.1.bullet4": "Quality Grade: 85-90 90-95 95++ (Based on maturity)",
    "products.1.keywords": "Keywords: Whole Areca Nut Indonesia, Supplier Pinang Bulat, Dried Betel Nut Bulk.",
    "products.2.title": "PINANG BELAH (SPLIT BETEL NUT) ",
    "products.2.desc": "Biji pinang yang dibelah secara presisi, memudahkan verifikasi kualitas internal. Sangat cocok untuk bahan baku industri farmasi dan konsumsi tradisional di pasar global.",
    "products.2.bullet1": "Moisture Content: Max 5%",
    "products.2.bullet2": "Good Cut/Density: Min. 90% (Dense seeds,not hollow)",
    "products.2.bullet3": "Fungus Free: 100% (Aflatoxin controlled)",
    "products.2.bullet4": "Quality Grade: 85-90 90-95 95++ (Roasted)",
    "products.3.title": "CENGKEH (CLOVE)",
    "products.3.desc": "Cengkeh kering berkualitas premium yang bersumber dari perkebunan terbaik Indonesia. Dikenal dengan aroma kuat dan kandungan minyak esensial tinggi, sempurna untuk aplikasi kuliner dan farmasi.",
    "products.3.bullet1": "Kadar Air: Maks 14%",
    "products.3.bullet2": "Kandungan Minyak Esensial: Min. 17%",
    "products.3.bullet3": "Kemurnian: 99% (Bebas dari tangkai dan benda asing)",
    "products.3.bullet4": "Grade Kualitas: Premium Export Grade",
    "products.4.title": "CABE JAWA (JAVANESE CHILI)",
    "products.4.desc": "Cabe jawa tradisional Indonesia dengan rasa pedas yang khas. Sangat dihargai dalam pengobatan tradisional dan masakan gourmet untuk profil rasa unik dan manfaat kesehatannya.",
    "products.4.bullet1": "Kadar Air: Maks 12%",
    "products.4.bullet2": "Kandungan Piperine: Min. 4%",
    "products.4.bullet3": "Panjang: 2-5 cm (Grade premium)",
    "products.4.bullet4": "Grade Kualitas: Standar Ekspor",
    "products.5.title": "BUAH PALA (NUTMEG)",
    "products.5.desc": "Pala kering utuh dari perkebunan premium Indonesia. Kaya akan minyak esensial dan senyawa aromatik, ideal untuk perdagangan rempah dan industri pengolahan makanan.",
    "products.5.bullet1": "Kadar Air: Maks 10%",
    "products.5.bullet2": "Kandungan Minyak Esensial: Min. 8%",
    "products.5.bullet3": "Ukuran: 110-120 butir per kg",
    "products.5.bullet4": "Grade Kualitas: Grade ABCD Tersedia",
    "products.6.title": "BUNGA PALA",
    "products.6.desc": "Bunga pala kering premium, lapisan luar halus dari buah pala. Dihargai karena rasa halusnya dan warna cerah, penting untuk aplikasi kuliner kelas atas.",
    "products.6.bullet1": "Kadar Air: Maks 12%",
    "products.6.bullet2": "Warna: Oranye-Merah Cerah",
    "products.6.bullet3": "Kandungan Minyak Esensial: Min. 10%",
    "products.6.bullet4": "Grade Kualitas: Whole Blade Premium",
    "products.7.title": "KEMUKUS (CUBEB PEPPER)",
    "products.7.desc": "Lada kemukus Indonesia yang langka dengan ekor khas dan profil rasa kompleks. Dicari untuk campuran rempah khusus dan aplikasi pengobatan tradisional.",
    "products.7.bullet1": "Kadar Air: Maks 13%",
    "products.7.bullet2": "Kandungan Minyak Esensial: Min. 10%",
    "products.7.bullet3": "Kemurnian: 98% (Dengan ekor khas)",
    "products.7.bullet4": "Grade Kualitas: Premium Wild Harvest",
    "products.8.title": "REMPAH LAINNYA (ETC)",
    "products.8.desc": "Kami juga menyediakan berbagai rempah premium Indonesia lainnya termasuk lada putih, lada hitam, kayu manis, kapulaga, dan lainnya. Hubungi kami untuk kebutuhan spesifik.",
    "products.8.bullet1": "Berbagai varietas rempah tersedia",
    "products.8.bullet2": "Pemrosesan dan pengemasan khusus",
    "products.8.bullet3": "Standar kualitas bersertifikat",
    "products.8.bullet4": "Kuantitas pesanan fleksibel",

    // Heritage
    "heritage.badge": "PERUSAHAAN KAMI",
    "heritage.title": "WARISAN, KUALITAS, DAN KEPERCAYAAN",
    "heritage.desc1": "Perusahaan kami berakar kuat dalam tradisi budidaya pinang Indonesia yang kaya, diwariskan dari generasi ke generasi. Kami menggabungkan pengetahuan tradisional ini dengan metode kontrol kualitas modern untuk menghasilkan produk yang secara konsisten melampaui ekspektasi.",
    "heritage.desc2": "Fasilitas pemrosesan kami menerapkan protokol jaminan kualitas yang ketat, dari panen awal hingga pengemasan dan pengiriman. Setiap batch diperiksa, dinilai, dan disertifikasi sebelum meninggalkan fasilitas kami.",
    "heritage.cta": "LIHAT STANDAR KAMI",
    "heritage.processingLabel": "FASILITAS PEMROSESAN",
    "heritage.globalLabel": "BATCH GLOBAL",

    // CTA
    "cta.title": "SIAP MENGAMANKAN PASOKAN ANDA?",
    "cta.desc": "Para ahli kami dapat menyesuaikan rencana pasokan sesuai kebutuhan grade komoditas, anggaran, dan timeline logistik Anda.",
    "cta.placeholder": "MASUKKAN EMAIL UNTUK PENAWARAN",
    "cta.btn": "MINTA KONSULTASI",

    // Footer
    "footer.desc": "PERDAGANGAN PRESISI & LOGISTIK GLOBAL.",
    "footer.Address": "Lokasi :",
    "footer.shipmentTracking": "PELACAKAN PENGIRIMAN",
    "footer.privacyPolicy": "email: hafiz@gmail.com",
    "footer.termsOfTrade": "WhatsApp: +6285371743671",

    // Contact Page
    "contact.title": "TENTANG KAMI",
    "contact.subtitle": "Surya Indo International Indonesia adalah perusahaan perdagangan produk agro dan ekspor terpercaya yang berbasis di Indonesia. Kami mengkhususkan diri pada pinang kelas premium, menghadirkan kualitas dan keandalan ke pasar global.",
    "contact.formTitle": "MULAI PERTANYAAN",
    "contact.company": "PERUSAHAAN / ENTITAS",
    "contact.companyPlaceholder": "contoh: PT Logistik Nusantara",
    "contact.primaryContact": "KONTAK UTAMA",
    "contact.primaryContactPlaceholder": "Nama Lengkap",
    "contact.email": "EMAIL AMAN",
    "contact.emailPlaceholder": "kontak@domain.com",
    "contact.phone": "SALURAN LANGSUNG",
    "contact.phonePlaceholder": "+62 812 0000 0000",
    "contact.commodity": "MINAT KOMODITAS",
    "contact.commodityDefault": "Pinang Utuh Grade A",
    "contact.operational": "DETAIL OPERASIONAL / SPESIFIKASI VOLUME",
    "contact.operationalPlaceholder": "Berikan pelabuhan tujuan, kebutuhan volume bulanan, dll.",
    "contact.submitBtn": "KIRIM PERMINTAAN →",

    // HQ Card
    "hq.title": "KANTOR PUSAT & RUTE",
    "hq.addressTitle": "TERMINAL OPERASI UTAMA",
    "hq.address": "Jl. Dokter Setia Budi NO.37 Kasang, Kota Jambi Indonesia\n Jln. Medan Binjai No 22 Paya Geli-Medan",
    "hq.phoneTitle": "DISPATCH GLOBAL",
    "hq.phone": "+62-853-7174-3671",
    "hq.phoneHours": "Beroperasi 08.00 – 18.00 (WIB)",

    // WhatsApp
    "wa.chatLabel": "CHAT DI WHATSAPP",

    // Why Choose Us
    "whyUs.badge": "MENGAPA MEMILIH KAMI",
    "whyUs.title": "KENAPA ANDA HARUS MEMILIH KAMI?",
    "whyUs.subtitle": "Kami memberikan lebih dari sekadar produk — kami memberikan kepercayaan, konsistensi, dan kemitraan yang dibangun dari keahlian puluhan tahun.",
    "whyUs.point1Title": "Kualitas Premium Terjamin",
    "whyUs.point1Desc": "Setiap batch melalui kontrol kualitas multi-tahap yang ketat. Kami menjaga kemurnian 98%+ dan kelembaban ≤12%, bersertifikat dan terdokumentasi sebelum setiap pengiriman.",
    "whyUs.point2Title": "Pengiriman Tepat Waktu & Handal",
    "whyUs.point2Desc": "Jaringan logistik kami yang mapan memastikan pasokan konsisten dengan pengiriman tepat waktu ke pelabuhan di seluruh dunia. Tanpa keterlambatan, tanpa alasan — hanya eksekusi yang dapat diandalkan.",
    "whyUs.point3Title": "Sumber Langsung, Harga Terbaik",
    "whyUs.point3Desc": "Kami bersumber langsung dari wilayah penghasil pinang paling produktif di Indonesia, memotong perantara untuk menawarkan harga paling kompetitif di pasar.",

    // FAQ
    "faq.badge": "FAQ",
    "faq.title": "PERTANYAAN YANG SERING DIAJUKAN",
    "faq.subtitle": "Pertanyaan umum tentang produk, proses pemesanan, dan logistik pengiriman kami.",
    "faq.q1": "Jenis pinang apa saja yang Anda ekspor?",
    "faq.a1": "Kami mengekspor tiga grade utama: Grade Utuh (pinang premium utuh tanpa potongan), Grade Belah (dibelah sempurna untuk ukuran seragam), dan Grade Iris (diiris tipis untuk pemrosesan khusus). Semua grade mempertahankan kemurnian 98%+ dan kelembaban ≤12%.",
    "faq.q2": "Berapa minimum order quantity (MOQ)?",
    "faq.a2": "Minimum order quantity kami mulai dari 1 kontainer (sekitar 18-20 metrik ton). Untuk pesanan percobaan, kami dapat mengakomodasi jumlah lebih kecil — silakan hubungi kami untuk mendiskusikan kebutuhan spesifik Anda.",
    "faq.q3": "Ke negara mana saja Anda mengekspor?",
    "faq.a3": "Kami mengekspor ke lebih dari 15 negara di Asia, Timur Tengah, dan Eropa. Jaringan logistik kami mapan untuk pelabuhan utama di seluruh dunia. Jika tujuan Anda belum terdaftar, hubungi kami — kami terus memperluas jangkauan.",
    "faq.q4": "Bagaimana Anda menjamin kualitas produk?",
    "faq.a4": "Proses jaminan kualitas kami meliputi inspeksi multi-tahap dari panen hingga pengemasan. Setiap batch diuji untuk kadar air, kemurnian, dan keseragaman ukuran. Kami menyediakan sertifikat analisis (COA) dan sertifikat fitosanitari dengan setiap pengiriman.",
    "faq.q5": "Apa saja ketentuan pembayaran dan opsi pengiriman?",
    "faq.a5": "Kami menawarkan ketentuan pembayaran fleksibel termasuk T/T (transfer bank) dan L/C (Letter of Credit). Pengiriman tersedia FOB atau CIF ke pelabuhan pilihan Anda. Waktu tunggu tipikal dari konfirmasi pesanan hingga keberangkatan pelabuhan adalah 2-4 minggu.",

    // CTA Contact
    "ctaContact.title": "SIAP MEMBELI?",
    "ctaContact.desc": "Terhubung langsung dengan tim penjualan kami di WhatsApp. Dapatkan penawaran instan, spesifikasi produk, dan rencana pasokan yang dipersonalisasi.",
    "ctaContact.btn": "CHAT DENGAN KAMI",

    // Language Dialog
    "langDialog.title": "Pilih Bahasa",
    "langDialog.subtitle": "Pilih bahasa yang Anda inginkan untuk melanjutkan",
    "langDialog.en": "English",
    "langDialog.id": "Bahasa Indonesia",

    // Contact Us
    "C1": "Telepon :+62 853 7174 3671",
    "C2": "Kantor Pusat :",
    "C3": "Email : hafiz@gmail.com",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");
  const [showDialog, setShowDialog] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("preferred-language") as Language | null;
    if (saved && (saved === "en" || saved === "id")) {
      setLangState(saved);
    } else {
      setShowDialog(true);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("preferred-language", newLang);
  };

  const t = (key: string): string => {
    return translations[lang][key] || key;
  };

  const handleSelectLanguage = (selectedLang: Language) => {
    setLang(selectedLang);
    setShowDialog(false);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
      {mounted && showDialog && (
        <>
          <div className="lang-dialog-overlay" onClick={() => { }} />
          <div className="lang-dialog">
            <div
              style={{
                background: "#fff",
                borderRadius: "20px",
                padding: "40px",
                width: "min(420px, 90vw)",
                textAlign: "center",
                boxShadow: "0 25px 80px rgba(0,0,0,0.25)",
              }}
            >
              {/* Globe Icon */}
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #0a1f0a, #1a3a1a)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d4a437" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>

              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "#0a1f0a",
                  marginBottom: "8px",
                  letterSpacing: "-0.02em",
                }}
              >
                {translations.en["langDialog.title"]} / {translations.id["langDialog.title"]}
              </h2>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#777",
                  marginBottom: "28px",
                  lineHeight: 1.5,
                }}
              >
                {translations.en["langDialog.subtitle"]}
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <button
                  id="lang-select-en"
                  onClick={() => handleSelectLanguage("en")}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "16px 20px",
                    border: "2px solid #e8e8e8",
                    borderRadius: "14px",
                    background: "#fff",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#111",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#d4a437";
                    e.currentTarget.style.background = "#fffcf5";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#e8e8e8";
                    e.currentTarget.style.background = "#fff";
                  }}
                >
                  <span style={{ fontSize: "1.6rem" }}>en</span>
                  English
                </button>

                <button
                  id="lang-select-id"
                  onClick={() => handleSelectLanguage("id")}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "16px 20px",
                    border: "2px solid #e8e8e8",
                    borderRadius: "14px",
                    background: "#fff",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#111",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#d4a437";
                    e.currentTarget.style.background = "#fffcf5";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#e8e8e8";
                    e.currentTarget.style.background = "#fff";
                  }}
                >
                  <span style={{ fontSize: "1.6rem" }}>🇮🇩</span>
                  Bahasa Indonesia
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
