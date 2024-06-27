import i18n from "i18next";

import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";

// initialization of i18n 
i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true, //gives all the error in console during development process
    // lng: "en",
    fallbackLng: "en", //sets the language as english if no corresponding translation is found
    returnObjects: true, // allows to return objects, not just strings
    resources: {
        en: {
            translation: {
                greeting: "Hello, Welcome",
                description: {
                    line1: "something something",
                    line2: "something something",
                }
            },
        },
        np: {
            translation: {
                greeting: "नमस्ते तपाईलाई स्वागत छ",
                description: {
                    line1: "something something2",
                    line2: "something something2",
                }
            },
        }
    }
})