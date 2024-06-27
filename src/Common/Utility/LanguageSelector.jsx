import React from 'react'
import { useTranslation } from 'react-i18next';

const languages = [
    { code: "en", lang: "English" },
    { code: "np", lang: "Nepali" },
]

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    function changeLang(e) {
        i18n.changeLanguage(e.target.value); // Assuming you want to change the language here as well
    }

    return (
        <div>
            <select id="" onChange={changeLang} value={i18n.language} className=' font-poppins font-medium text-base bg-transparent outline-none border-2 border-red-500 rounded-md'>
                { 
                    languages.map((lng) => (
                        <option key={lng.lang} value={lng.code} >{lng.code.toUpperCase()}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default LanguageSelector
