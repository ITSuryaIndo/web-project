"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function HomeClient() {
  const { t } = useLanguage();
  return (
    <section className="contact-section min-h-screen bg-slate-50 flex items-start md:items-center pt-16 sm:pt-24 md:pt-32 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 items-center">
          <div className="rounded-3xl overflow-hidden flex justify-center">
            <img
             src="/images/asd.png"
             alt="World map"
            width={320}
            height={320}
            className="object-contain w-full max-w-xs sm:max-w-sm md:max-w-md"
            />
          </div>
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black">
                    HUBUNGI KAMI
                </h2>
              </div>  
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-slate-300 text-slate-700">
                  📞
                </div>
                <div>
                  <Link
                    href="tel:+62-853-7174-3671"
                          style={{
                            fontSize: "0.9rem",
                            fontWeight: 600,
                            letterSpacing: "0.08em",
                            color: "#000000",
                            textDecoration: "none",
                            transition: "color 0.2s",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = "#d4a437")}
                          onMouseLeave={(e) => (e.currentTarget.style.color = "#000000")}
                        >
                            <p 
                              style={{
                              fontSize:"1rem",
                              }}
                            >
                              {t("C1")}
                              </p>
                                </Link>
                  </div>
                </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex h-10 w-16 sm:h-12 sm:w-20 items-center justify-center rounded-full border border-slate-300 text-slate-700">
                  📍
                </div>
                <div className="space-y-2">
                  <Link
                    href="https://maps.app.goo.gl/tAubT2HoccMD5heC7"
                    style={{
                      display: "block",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      letterSpacing: "0.03em",
                      color: "#000000",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#d4a437")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#000000")}
                  >
                    <p
                      style={{
                        fontSize: "0.7rem",
                      }}
                    >
                      {t("C2")}
                      Jl. Dokter Setia Budi 28-76, Kasang, Kec. Jambi Tim., Kota Jambi, Jambi 36265
                    </p>
                  </Link>
                  <Link
                    href="https://maps.app.goo.gl/h4RpSqY4sq7LKyTH9"
                    style={{
                      display: "block",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      letterSpacing: "0.03em",
                      color: "#000000",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#d4a437")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#000000")}
                  >
                    <p
                      style={{
                        fontSize: "0.7rem",
                      }}
                    >
                      {t("C2")}
                      Jln. Medan Binjai No 22 Paya Geli-Medan
                    </p>
                  </Link>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-slate-300 text-slate-700">
                  ✉️
                </div>
                <div>
                  <Link
              href="mailto:hafiz@gmail.com"
              style={{
                fontSize: "0.9rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                color: "#000000",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#d4a437")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#000000")}
            >
              {t("C3")}
            </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}