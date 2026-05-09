"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function HomeClient() {
  const { t } = useLanguage();

  return (
    <>
      {/* ===== HERO ===== */}
      <section id="hero" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center" }}>
        <Image src="/images/ship-loaded.jpg" alt="Betel nut plantation" fill style={{ objectFit: "cover" }} priority />
        <div className="hero-gradient" style={{ position: "absolute", inset: 0 }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: "1280px", margin: "0 auto", padding: "120px 24px 80px", width: "100%" }}>
          <span className="animate-fade-in" style={{ display: "inline-block", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", color: "#d4a437", background: "rgba(212,164,55,0.12)", border: "1px solid rgba(212,164,55,0.25)", borderRadius: "4px", padding: "6px 14px", marginBottom: "24px" }}>{t("hero.badge")}</span>
          <h1 className="animate-fade-in-up hero-title" style={{ fontSize: "3.5rem", fontWeight: 800, color: "#fff", lineHeight: 1.08, maxWidth: "700px", marginBottom: "24px", letterSpacing: "-0.03em" }}>{t("hero.title")}</h1>
          <p className="animate-fade-in-up delay-200" style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.7)", maxWidth: "540px", lineHeight: 1.7, marginBottom: "36px" }}>{t("hero.subtitle")}</p>
          <div className="animate-fade-in-up  delay-300" style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <Link href="/Catalog.docx" download="Catalog.docx" style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", color: "#0a1f0a", background: "#d4a437", padding: "14px 28px", borderRadius: "4px", textDecoration: "none", transition: "all 0.2s" }}>{t("hero.cta1")}</Link>
            <Link href="#products" style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", padding: "14px 28px", borderRadius: "4px", textDecoration: "none", transition: "all 0.2s" }}>{t("hero.cta2")}</Link>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" style={{ padding: "100px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", color: "#777", marginBottom: "16px", display: "block" }}>{t("about.badge")}</span>
          <h2 style={{ fontSize: "2.8rem", fontWeight: 800, color: "#111", lineHeight: 1.1, maxWidth: "600px", marginBottom: "40px", letterSpacing: "-0.03em" }}>{t("about.title")}</h2>
          <div className="section-divider" style={{ marginBottom: "40px" }} />
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: "0.9rem", color: "#555", lineHeight: 1.8, marginBottom: "20px" }}>{t("about.desc1")}</p>
              <p style={{ fontSize: "0.9rem", color: "#555", lineHeight: 1.8, marginBottom: "28px" }}>{t("about.desc2")}</p>
              <Link href="#" style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", color: "#d4a437", textDecoration: "none" }}>{t("about.readMore")}</Link>
              <div style={{ display: "flex", gap: "48px", marginTop: "40px" }}>
                <div>
                  <div className="stat-number" style={{ fontSize: "2.2rem", fontWeight: 800 }}>{t("about.stat1")}</div>
                  <div style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em", color: "#999", marginTop: "4px" }}>{t("about.stat1Label")}</div>
                </div>
                <div>
                  <div className="stat-number" style={{ fontSize: "2.2rem", fontWeight: 800 }}>{t("about.stat2")}</div>
                  <div style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em", color: "#999", marginTop: "4px" }}>{t("about.stat2Label")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section id="products" style={{ padding: "100px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div className="flex flex-col items-center text-center" style={{ marginBottom: "64px" }}>
            <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", color: "#777", marginBottom: "12px", display: "block" }}>{t("products.badge")}</span>
            <h2 style={{ fontSize: "2.8rem", fontWeight: 800, color: "#111", letterSpacing: "-0.03em" }}>{t("products.title")}</h2>
            <p style={{ fontSize: "0.9rem", color: "#777", maxWidth: "540px", lineHeight: 1.7, marginTop: "16px" }}>{t("products.subtitle")}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mx-auto">
            {[
              { img: "/images/whole-betel-nut.jpeg", id: "1" },
              { img: "/images/split-betel-nut.jpeg", id: "2" },
              { img: "/images/cengkeh.jpg", id: "3" },
              { img: "/images/cabe-jawa.jpg", id: "4" },
              { img: "/images/buah-pala.jpg", id: "5" },
              { img: "/images/bunga-pala-1.jpg", id: "6" },
              { img: "/images/kemukus.jpg", id: "7" },
              { img: "/images/other-spices.webp", id: "8" },
            ].map((product, i) => (
              <div key={i} style={{ width: "100%", maxWidth: "360px", flexShrink: 0, background: "#fafafa", borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(0,0,0,0.04)", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}>
                <div style={{ position: "relative", height: "260px", overflow: "hidden" }}>
                  <Image src={product.img} alt={t(`products.${product.id}.title`)} fill sizes="(max-width: 768px) 100vw, 360px" className="transition-transform duration-500 group-hover:scale-105" style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: "32px" }}>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#16a34a", letterSpacing: "0.02em", marginBottom: "16px", lineHeight: 1.3 }}>{t(`products.${product.id}.title`)}</h3>

                  <div style={{ borderTop: "1px solid #eaeaea", marginBottom: "20px" }} />

                  <p style={{ fontSize: "0.85rem", color: "#444", lineHeight: 1.7, marginBottom: "24px" }}>{t(`products.${product.id}.desc`)}</p>

                  <ul style={{ paddingLeft: "16px", margin: 0, color: "#444", fontSize: "0.85rem", lineHeight: 1.8 }}>
                    <li style={{ listStyleType: "square", marginBottom: "6px" }}>
                      <span style={{ color: "#666" }}>{t(`products.${product.id}.bullet1`)}</span>
                    </li>
                    <li style={{ listStyleType: "square", marginBottom: "6px" }}>
                      <span style={{ color: "#666" }}>{t(`products.${product.id}.bullet2`)}</span>
                    </li>
                    <li style={{ listStyleType: "square", marginBottom: "6px" }}>
                      <span style={{ color: "#666" }}>{t(`products.${product.id}.bullet3`)}</span>
                    </li>
                    <li style={{ listStyleType: "square", marginBottom: "6px" }}>
                      <span style={{ color: "#666" }}>{t(`products.${product.id}.bullet4`)}</span>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HERITAGE ===== */}
      <section id="heritage" style={{ padding: "100px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", color: "#777", marginBottom: "16px", display: "block" }}>{t("heritage.badge")}</span>
          <div className="flex flex-col md:flex-row gap-12">
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: "2.5rem", fontWeight: 800, color: "#111", lineHeight: 1.1, marginBottom: "28px", letterSpacing: "-0.03em" }}>{t("heritage.title")}</h2>
              <p style={{ fontSize: "0.9rem", color: "#555", lineHeight: 1.8, marginBottom: "20px" }}>{t("heritage.desc1")}</p>
              <p style={{ fontSize: "0.9rem", color: "#555", lineHeight: 1.8, marginBottom: "28px" }}>{t("heritage.desc2")}</p>
              <button style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em", color: "#fff", background: "#0a1f0a", padding: "14px 28px", borderRadius: "4px", border: "none", cursor: "pointer" }}>{t("heritage.cta")}</button>
              <div style={{ display: "flex", gap: "48px", marginTop: "40px" }}>
                <div><div className="stat-number" style={{ fontSize: "2.2rem", fontWeight: 800 }}>{t("about.stat1")}</div><div style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em", color: "#999", marginTop: "4px" }}>{t("about.stat1Label")}</div></div>
                <div><div className="stat-number" style={{ fontSize: "2.2rem", fontWeight: 800 }}>{t("about.stat2")}</div><div style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em", color: "#999", marginTop: "4px" }}>{t("about.stat2Label")}</div></div>
              </div>
            </div>
            <div style={{ flex: 1 }} className="grid grid-cols-2 gap-4">
              <div style={{ position: "relative", borderRadius: "12px", overflow: "hidden", gridColumn: "1 / -1", height: "200px" }}>
                <Image src="/images/whole-betel-nut.jpeg" alt="Whole Betel Nut" fill style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", bottom: "12px", left: "12px", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.1em", color: "#fff", background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)", padding: "6px 12px", borderRadius: "4px" }}>{t("products.1.title")}</div>
              </div>
              <div style={{ position: "relative", borderRadius: "12px", overflow: "hidden", gridColumn: "1 / -1", height: "200px" }}>
                <Image src="/images/split-betel-nut.jpeg" alt="Split Betel Nut" fill style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", bottom: "12px", left: "12px", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.1em", color: "#fff", background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)", padding: "6px 12px", borderRadius: "4px" }}>{t("products.2.title")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section id="cta" className="cta-gradient" style={{ padding: "100px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: 800, color: "#fff", lineHeight: 1.1, marginBottom: "20px", letterSpacing: "-0.03em" }}>{t("cta.title")}</h2>
          <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.7, marginBottom: "36px" }}>{t("cta.desc")}</p>
          <div className="flex flex-col sm:flex-row gap-3" style={{ justifyContent: "center" }}>
            <input type="email" placeholder={t("cta.placeholder")} className="form-input" style={{ fontSize: "0.75rem", letterSpacing: "0.06em", padding: "14px 20px", borderRadius: "4px", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.08)", color: "#fff", flex: 1, maxWidth: "360px" }} />
            <Link href="mailto:hafiz@gmail.com" style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", color: "#0a1f0a", background: "#d4a437", padding: "14px 28px", borderRadius: "4px", textDecoration: "none", whiteSpace: "nowrap" }}>{t("cta.btn")}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
