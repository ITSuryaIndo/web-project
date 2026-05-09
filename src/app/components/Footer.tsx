"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      id="main-footer"
      style={{
        background: "#0a1f0a",
        color: "#fff",
        padding: "60px 24px 40px",
      }}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-10"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        {/* Brand Column */}
        <div>
          <h3
            style={{
              fontSize: "0.9rem",
              fontWeight: 800,
              letterSpacing: "0.15em",
              marginBottom: "12px",
              color: "#fff",
            }}
          >
            SURYA INDO INTERNATIONAL
          </h3>
          <p
            style={{
              fontSize: "0.7rem",
              color: "#999",
              letterSpacing: "0.08em",
              lineHeight: 1.6,
              maxWidth: "280px",
            }}
          >
            © 2024 SURYA INDO INTERNATIONAL INDONESIA.
            <br />
            {t("footer.desc")}
          </p>
        </div>

        {/* Links Column 1 */}
        <div className="flex gap-8 md:justify-center">
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
           <div>
		   <h3
            style={{
              fontSize: "1rem",
              fontWeight: 800,
              letterSpacing: "0.15em",
              marginBottom: "12px",
              color: "#fff",
            }}
          >
            Address :
          </h3> 
		
			<Link
              href="https://maps.app.goo.gl/tAubT2HoccMD5heC7"
              style={{
                fontSize: "1rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                color: "#999",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#d4a437")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#999")}
            >
			  <p 
			  style={{
				fontSize:"0.8rem",
				}}
			  >
			  Jl. Dokter Setia Budi 28-76, Kasang, Kec. Jambi Tim., Kota Jambi, Jambi 36265
			</p>
            </Link>
			<Link
              href="https://maps.app.goo.gl/h4RpSqY4sq7LKyTH9"
              style={{
                fontSize: "1rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                color: "#999",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#d4a437")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#999")}
            >
			  <p 
			  style={{
				fontSize:"0.8rem",
				}}
			  >
			  Jln. Medan Binjai No 22 Paya Geli-Medan
			</p>
            </Link>
		</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
			 <div>
				<h3
            style={{
              fontSize: "1rem",
              fontWeight: 800,
              letterSpacing: "0.15em",
              marginBottom: "12px",
              color: "#fff",
            }}
          >
            Contact Us :
          </h3> 
			<Link
              href="mailto:suryaindointernational@gmail.com"
              style={{
                fontSize: "0.9rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                color: "#999",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#d4a437")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#999")}
            >
              {t("footer.email")}
            </Link>
			</div>
            <Link
              href="tel:+62-853-7174-3671"
              style={{
                fontSize: "0.9rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                color: "#999",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#d4a437")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#999")}
            >
              {t("footer.phone")}
            </Link>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}> 
			
          <Link
                  href="#"
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    color: "#999",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#d4a437")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#999")}
                >
                  {t("footer.shipmentTracking")}
                </Link>
                <Link
                  href="#"
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    color: "#999",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#d4a437")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#999")}
                >
                  {t("footer.TermsOfTrade")}
                </Link>

                <Link
                  href="#"
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    color: "#999",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#d4a437")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#999")}
                >
                  {t("footer.TermsAndConditions")}
                </Link>
                <Link
                  href="#"
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    color: "#999",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#d4a437")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#999")}
                >
                  {t("footer.PrivacyPolicy")}
                </Link>
              </div>
            </div>

        {/* Back to top */}
        <div className="flex md:justify-end">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: "#d4a437",
              background: "rgba(212, 164, 55, 0.1)",
              border: "1px solid rgba(212, 164, 55, 0.3)",
              borderRadius: "6px",
              padding: "10px 20px",
              cursor: "pointer",
              transition: "all 0.2s ease",
              alignSelf: "flex-start",
            }}
          >
            ↑ TOP
          </button>
        </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "40px auto 0",
          paddingTop: "24px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            fontSize: "0.65rem",
            color: "#555",
            letterSpacing: "0.06em",
          }}
        >
          SURYA INDO INTERNATIONAL INDONESIA — ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
}
