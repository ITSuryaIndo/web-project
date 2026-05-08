"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import Image from "next/image";

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isHome = pathname === "/";
  const isAbout = pathname === "/about";

  return (
    <>
      <nav
        id="main-navbar"
        className={`navbar pt-32 top-0 left-0 right-0 z-50 ${scrolled ? "navbar-scrolled" : ""
          }`}
        style={{
          backgroundColor: scrolled ? undefined : "#ffffff",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "72px",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            id="logo-link"
            style={{
              display: "flex",
              flexDirection: "column",
              textDecoration: "none",
            }}
          >
            <div className="flex items-center gap-2">
              <Image src={"/images/logo-surya-indo-i.png"} sizes="100vw" width={100} height={100} style={{ width: "120px", height: "auto" }} alt="logo-surya-indo-international" />
              <p className="text-white text-[12px] font-bold" style={{
                color: "#0a1f0ae6"
              }}>PT. SURYA INDO INTERNATIONAL</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div
            className="hidden md:flex items-center gap-8"
          >
            <Link
              href="/"
              className={`nav-link ${isHome ? "active" : ""}`}
              style={{
                fontSize: "0.75rem",
                fontWeight: "bold",
                letterSpacing: "0.1em",
                color: "#0a1f0ae6",
                textDecoration: "none",
              }}
            >
              {t("nav.home")}
            </Link>
            <Link
              href="/#products"
              className="nav-link"
              style={{
                fontSize: "0.75rem",
                fontWeight: "bold",
                letterSpacing: "0.1em",
                color: "#0a1f0ae6",
                textDecoration: "none",
              }}
            >
              {t("nav.products")}
            </Link>
            <Link
              href="/about"
              className={`nav-link ${isAbout ? "active" : ""}`}
              style={{
                fontSize: "0.75rem",
                fontWeight: "bold",
                letterSpacing: "0.1em",
                color: "#0a1f0ae6",
                textDecoration: "none",
                borderBottom: isAbout ? "2px solid #d4a437" : "none",
              }}
            >
              {t("nav.contact")}
            </Link>
          </div>

          {/* Right Side */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            {/* Language Switcher */}
            <button
              id="lang-toggle"
              onClick={() => setLang(lang === "en" ? "id" : "en")}
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: "#d4a437",
                background: "rgba(212, 164, 55, 0.1)",
                border: "1px solid rgba(212, 164, 55, 0.3)",
                borderRadius: "6px",
                padding: "6px 12px",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {lang === "en" ? "ID" : "EN"}
            </button>

            {/* CTA Button (Desktop) */}
            <Link
              href="/kontak"
              id="nav-contact-btn"
              className="hidden md:flex hover:scale-105 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(10,31,10,0.4)] transition-all duration-300"
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                color: "#ffffff",
                background: "#0a1f0ae6",
                padding: "10px 20px",
                borderRadius: "4px",
                textDecoration: "none",
              }}
            >
              {t("nav.contactBtn")}
            </Link>

            {/* Hamburger (Mobile) */}
            <button
              id="mobile-menu-toggle"
              className="md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px",
              }}
              aria-label="Toggle mobile menu"
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                <span
                  style={{
                    display: "block",
                    width: "22px",
                    height: "2px",
                    background: "#000000",
                    borderRadius: "1px",
                    transition: "all 0.3s ease",
                    transform: mobileOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
                  }}
                />
                <span
                  style={{
                    display: "block",
                    width: "22px",
                    height: "2px",
                    background: "#000000",
                    borderRadius: "1px",
                    transition: "all 0.3s ease",
                    opacity: mobileOpen ? 0 : 1,
                  }}
                />
                <span
                  style={{
                    display: "block",
                    width: "22px",
                    height: "2px",
                    background: "#000000",
                    borderRadius: "1px",
                    transition: "all 0.3s ease",
                    transform: mobileOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
                  }}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 40,
            background: "rgba(10, 31, 10, 0.97)",
            backdropFilter: "blur(20px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "32px",
            animation: "fadeIn 0.3s ease-out",
          }}
        >
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            style={{
              fontSize: "1.2rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              color: isHome ? "#d4a437" : "#fff",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
          >
            {t("nav.home")}
          </Link>
          <Link
            href="/#products"
            onClick={() => setMobileOpen(false)}
            style={{
              fontSize: "1.2rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              color: "#fff",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
          >
            {t("nav.products")}
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileOpen(false)}
            style={{
              fontSize: "1.2rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              color: isAbout ? "#d4a437" : "#fff",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
          >
            {t("nav.contact")}
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileOpen(false)}
            className="hover:scale-105 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(10,31,10,0.4)] transition-all duration-300"
            style={{
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: "#ffffff",
              background: "#0a1f0ae6",
              padding: "14px 32px",
              borderRadius: "4px",
              textDecoration: "none",
              marginTop: "16px",
            }}
          >
            {t("nav.contactBtn")}
          </Link>
        </div>
      )}
    </>
  );
}
