import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/translation.json";
import km from "./locales/km/translation.json";

// Get saved language or detect from browser
const getSavedLanguage = () => {
  try {
    return localStorage.getItem("lang") || "en";
  } catch {
    return "en";
  }
};

const savedLng = getSavedLanguage();

// Initialize i18next
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    km: { translation: km },
  },
  lng: savedLng,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

// Set initial html lang attribute
try {
  const root = document.documentElement;
  if (root && !root.getAttribute("lang")) {
    root.setAttribute("lang", savedLng);
  }

  // Watch for html lang attribute changes and sync with i18n
  if (root) {
    const observer = new MutationObserver(() => {
      const newLang = root.getAttribute("lang") || "en";
      if (i18n.language !== newLang) {
        i18n.changeLanguage(newLang);
      }
    });
    observer.observe(root, { attributes: true, attributeFilter: ["lang"] });
  }
} catch (error) {
  console.error("Failed to initialize language:", error);
}

export default i18n;
