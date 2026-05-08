"use client";

import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import Link from "next/link";

// Nomor WhatsApp tujuan (sama dengan WhatsAppButton)
const WA_PHONE_NUMBER = "6285371743671";

export default function AboutClient() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqItems = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
  ];

  const handleWhatsApp = () => {
    const waUrl = `https://wa.me/${WA_PHONE_NUMBER}?text=${encodeURIComponent("Hello, I'm interested in purchasing your betel nut and spices products. Can we discuss further?")}`;
    window.open(waUrl, "_blank");
  };

  return (
    <div style={{ paddingTop: "72px" }}>
      {/* ===== Hero Section — Modern Design ===== */}
      <section
        style={{
          position: "relative",
          padding: "80px 24px 100px",
          background: "linear-gradient(135deg, #0a1f0a 0%, #142e14 50%, #1a3a1a 100%)",
          overflow: "hidden",
        }}
      >
        {/* Decorative circle background */}
        <div style={{ position: "absolute", top: "-120px", right: "-80px", width: "400px", height: "400px", borderRadius: "50%", background: "rgba(212, 164, 55, 0.05)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-60px", left: "-40px", width: "240px", height: "240px", borderRadius: "50%", background: "rgba(212, 164, 55, 0.04)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left — Text Content */}
            <div style={{ flex: 1 }}>
              <span
                style={{
                  display: "inline-block",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  color: "#d4a437",
                  background: "rgba(212, 164, 55, 0.1)",
                  border: "1px solid rgba(212, 164, 55, 0.25)",
                  padding: "6px 16px",
                  borderRadius: "50px",
                  marginBottom: "24px",
                }}
              >
                {t("about.badge")}
              </span>
              <h1
                style={{
                  fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                  fontWeight: 800,
                  color: "#fff",
                  lineHeight: 1.08,
                  marginBottom: "20px",
                  letterSpacing: "-0.03em",
                }}
              >
                {t("about.title")}
              </h1>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.8,
                  maxWidth: "520px",
                  marginBottom: "32px",
                }}
              >
                {t("about.subtitle")}
              </p>

              {/* Quick Stats */}
              <div className="flex gap-8" style={{ marginTop: "8px" }}>
                <div>
                  <div style={{ fontSize: "2rem", fontWeight: 800, color: "#d4a437", lineHeight: 1 }}>{t("about.stat1")}</div>
                  <div style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.1em", color: "rgba(255,255,255,0.4)", marginTop: "4px" }}>{t("about.stat1Label")}</div>
                </div>
                <div style={{ width: "1px", background: "rgba(255,255,255,0.1)" }} />
                <div>
                  <div style={{ fontSize: "2rem", fontWeight: 800, color: "#d4a437", lineHeight: 1 }}>{t("about.stat2")}</div>
                  <div style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.1em", color: "rgba(255,255,255,0.4)", marginTop: "4px" }}>{t("about.stat2Label")}</div>
                </div>
              </div>
            </div>

            {/* Right — Decorative Card Stack */}
            <div style={{ flex: 0.8, display: "flex", justifyContent: "center" }}>
              <div style={{ position: "relative", width: "100%", maxWidth: "380px" }}>
                {/* Background card (offset) */}
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    left: "16px",
                    right: "-16px",
                    bottom: "-16px",
                    borderRadius: "20px",
                    border: "1px solid rgba(212, 164, 55, 0.15)",
                    background: "rgba(212, 164, 55, 0.03)",
                  }}
                />
                {/* Main card */}
                <div
                  style={{
                    position: "relative",
                    background: "rgba(255,255,255,0.04)",
                    backdropFilter: "blur(12px)",
                    borderRadius: "20px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    padding: "36px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "linear-gradient(135deg, #d4a437, #e8c96d)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0a1f0a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.9-5.7a8.5 8.5 0 113.8 3.8z" /></svg>
                    </div>
                    <div>
                      <div style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.1em", color: "rgba(255,255,255,0.4)" }}>{t("about.missionLabel")}</div>
                      <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#fff" }}>{t("about.missionTitle")}</div>
                    </div>
                  </div>
                  <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "24px" }}>
                    {t("about.desc1Short")}
                  </p>
                  <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "20px" }} />
                  <div style={{ display: "flex", gap: "20px" }}>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "#d4a437" }}>98%+</div>
                      <div style={{ fontSize: "0.55rem", fontWeight: 600, color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em" }}>PURITY</div>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "#d4a437" }}>50+</div>
                      <div style={{ fontSize: "0.55rem", fontWeight: 600, color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em" }}>COUNTRIES</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Why Choose Us + HQ ===== */}
      <section style={{ padding: "80px 24px", background: "#f5f5f5" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Why Choose Us */}
            <div style={{ flex: 1.2, background: "#fff", borderRadius: "16px", padding: "40px", border: "1px solid #e8e8e8" }}>
              <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", color: "#d4a437", marginBottom: "12px", display: "block" }}>{t("whyUs.badge")}</span>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#111", letterSpacing: "-0.02em", marginBottom: "12px", lineHeight: 1.15 }}>{t("whyUs.title")}</h2>
              <p style={{ fontSize: "0.85rem", color: "#777", lineHeight: 1.7, marginBottom: "36px", maxWidth: "520px" }}>{t("whyUs.subtitle")}</p>

              <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                {/* Point 1 */}
                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "linear-gradient(135deg, #0a1f0a, #1a3a1a)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#d4a437" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#111", marginBottom: "6px", letterSpacing: "0.02em" }}>{t("whyUs.point1Title")}</h3>
                    <p style={{ fontSize: "0.82rem", color: "#777", lineHeight: 1.7 }}>{t("whyUs.point1Desc")}</p>
                  </div>
                </div>

                {/* Point 2 */}
                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "linear-gradient(135deg, #0a1f0a, #1a3a1a)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#d4a437" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#111", marginBottom: "6px", letterSpacing: "0.02em" }}>{t("whyUs.point2Title")}</h3>
                    <p style={{ fontSize: "0.82rem", color: "#777", lineHeight: 1.7 }}>{t("whyUs.point2Desc")}</p>
                  </div>
                </div>

                {/* Point 3 */}
                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "linear-gradient(135deg, #0a1f0a, #1a3a1a)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#d4a437" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#111", marginBottom: "6px", letterSpacing: "0.02em" }}>{t("whyUs.point3Title")}</h3>
                    <p style={{ fontSize: "0.82rem", color: "#777", lineHeight: 1.7 }}>{t("whyUs.point3Desc")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* HQ & Routing + Map */}
            <div style={{ flex: 0.8, display: "flex", flexDirection: "column", gap: "16px" }}>
              {/* HQ Card */}
              <div style={{ background: "#0a1f0a", borderRadius: "16px", padding: "36px", color: "#fff" }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 800, letterSpacing: "0.04em", marginBottom: "28px", color: "#fff" }}>{t("hq.title")}</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  <div style={{ display: "flex", gap: "14px" }}>
                    <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(212,164,55,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d4a437" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                    </div>
                    <div>
                      <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", color: "#ffffff", marginBottom: "6px" }}>{t("hq.addressTitle")}</div>
                      <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.6, whiteSpace: "pre-line" }}><Link href="https://maps.app.goo.gl/7vVy9YhCL2fBuxsEA" target="_blank" rel="noopener noreferrer" onMouseEnter={(e) => (e.currentTarget.style.color = "#d4a437")} onMouseLeave={(e) => (e.currentTarget.style.color = "#999")}>Jl. Dokter Setia Budi 28-76, Kasang, Kec. Jambi Tim., Kota Jambi, Jambi 36265
                      </Link></div>
                      <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.6, whiteSpace: "pre-line" }}><Link href="https://maps.app.goo.gl/VyCKTdpZUrKHsUF2A" target="_blank" rel="noopener noreferrer" onMouseEnter={(e) => (e.currentTarget.style.color = "#d4a437")} onMouseLeave={(e) => (e.currentTarget.style.color = "#999")}>Jln. Medan Binjai No 22 Paya Geli-Medan
                      </Link></div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "14px" }}>
                    <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(212,164,55,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d4a437" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                    </div>
                    <div>
                      <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", color: "#ffffff", marginBottom: "6px" }}>{t("hq.phoneTitle")}</div>
                      <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.8)" }}>{t("hq.phone")}</div>
                      <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.5)", marginTop: "2px" }}>{t("hq.phoneHours")}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div style={{ borderRadius: "16px", overflow: "hidden", height: "260px", position: "relative" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d559.587884744261!2d103.62619178288885!3d-1.5863674832082395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e25892785b1f3a3%3A0xdbf56c5b4f37e38d!2sJl.%20Dokter%20Setia%20Budi%20No.37%2C%20RT.006%2C%20Rajawali%2C%20Kec.%20Jambi%20Tim.%2C%20Kota%20Jambi%2C%20Jambi%2036123!5e0!3m2!1sen!2sid!4v1777113830676!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
                <div style={{ position: "absolute", bottom: "12px", left: "12px", background: "#fff", padding: "8px 14px", borderRadius: "6px", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.06em", color: "#111", boxShadow: "0 2px 12px rgba(0,0,0,0.15)" }}>PT. SURYA INDO INTERNASIONAL INDONESIA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ Section ===== */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", color: "#d4a437", marginBottom: "12px", display: "block", textAlign: "center" }}>{t("faq.badge")}</span>
          <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#111", textAlign: "center", marginBottom: "12px", letterSpacing: "-0.03em" }}>{t("faq.title")}</h2>
          <p style={{ fontSize: "0.85rem", color: "#777", textAlign: "center", lineHeight: 1.7, marginBottom: "48px", maxWidth: "540px", margin: "0 auto 48px" }}>{t("faq.subtitle")}</p>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {faqItems.map((item, i) => (
              <div
                key={i}
                style={{
                  border: "1px solid #e8e8e8",
                  borderRadius: "12px",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  background: openFaq === i ? "#fafafa" : "#fff",
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: "100%",
                    padding: "20px 24px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span style={{ fontSize: "0.9rem", fontWeight: 700, color: "#111", letterSpacing: "0.01em", flex: 1, paddingRight: "16px" }}>{item.q}</span>
                  <span
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      background: openFaq === i ? "#d4a437" : "#f0f0f0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "all 0.3s ease",
                      transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={openFaq === i ? "#fff" : "#555"} strokeWidth="2.5" strokeLinecap="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>
                <div
                  style={{
                    maxHeight: openFaq === i ? "300px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.3s ease",
                  }}
                >
                  <p style={{ padding: "0 24px 20px", fontSize: "0.82rem", color: "#666", lineHeight: 1.8 }}>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA — Ready to Buy ===== */}
      <section className="cta-gradient" style={{ padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: 800, color: "#fff", lineHeight: 1.1, marginBottom: "16px", letterSpacing: "-0.03em" }}>{t("ctaContact.title")}</h2>
          <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.7, marginBottom: "36px" }}>{t("ctaContact.desc")}</p>
          <button
            onClick={handleWhatsApp}
            id="cta-whatsapp-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: "#fff",
              background: "#25d366",
              padding: "16px 32px",
              borderRadius: "50px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 6px 24px rgba(37, 211, 102, 0.4)",
              transition: "all 0.2s",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {t("ctaContact.btn")}
          </button>
        </div>
      </section>
    </div>
  );
}
