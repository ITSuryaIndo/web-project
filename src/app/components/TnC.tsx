"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function HomeClient() {
  const { t } = useLanguage();
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
  <div className="text-center max-w-4xl border border-gray-300 rounded-lg p-4 bg-white shadow-md">
    <h1 className="text-4xl font-bold text-black mb-4">
      {t("tc.title")}
    </h1>
    <p className="text-lg text-gray-700 mb-8">
      {t("tc.updateDate")}
    </p>
    <div className="text-left text-gray-600 space-y-4">
  <div>
    <p className="font-bold mb-1">
      {t("tc.section1Title")}
      </p>
    <p>{t("tc.section1Content")}</p>  
  </div>

  <div>
    <p className="font-bold mb-1">{t("tc.section2Title")}</p>
    <p>{t("tc.section2Content")}</p>
  </div>

  <div>
    <p className="font-bold mb-1">{t("tc.section3Title")}</p>
    <p>{t("tc.section3Content")}</p>
  </div>

  <div>
    <p className="font-bold mb-1">{t("tc.section4Title")}</p>
    <p>{t("tc.section4Content")}</p>
  </div>

  <div>
    <p className="font-bold mb-1">{t("tc.section5Title")}</p>
    <p>{t("tc.section5Content")}</p>
  </div>
  
</div>
    <p className="text-left text-gray-600" style={{ whiteSpace: "pre-line" }}>
      {t("tc.subtitle")}
    </p>
  </div>
</section>
  );
}