import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from "i18next-xhr-backend";

import translationEs from "../assets/locales/es.json";
import translationEn from "../assets/locales/en.json";

i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    debug: true,
    lng: "es",
    fallbackLng: "es", // use en if detected lng is not available
    returnObjects: true,
    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    },

    resources: {
      es: {
        translations: translationEs
      },
      en: {
        translations: translationEn
      }
    },
    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations"
  });

export default i18n;