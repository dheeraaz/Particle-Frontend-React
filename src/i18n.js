import i18n from "i18next";

import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";

// initialization of i18n 
i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true, //gives all the error in console during development process
    lng: "np",
    fallbackLng: "en", //sets the language as english if no corresponding translation is found
    resources: {
        en: {
            translation: {
                "greeting": "Hello, Welcome",
            },
        },
        np: {
            translation: {
                "greeting": "नमस्ते तपाईलाई स्वागत छ",
            },
        }
    }
})