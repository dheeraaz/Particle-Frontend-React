/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'links': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      colors:{
        'bodyColor': '#EBEEF0',
        'primary': '#252241',
        'secondary': '#383462',
        'accent': '#FE553E',
        'textColor': "#050315",
        'secFooter': "#1B1B1B",
        'grayText': "#E0E0E0",
        'extraLightText': "rgba(0, 0, 0, 0.60)",
        'hrLineBg':"rgba(37, 34, 65, 0.25)",
        'divDividerBg':"rgba(254, 85, 62, 0.20)",
      },
    },
    screens: {
      '2xl': {'max': '1536px'},
      // => @media (max-width: 1536px) { ... }

      'xl': {'max': '1280px'},
      'lg': {'max': '1024px'},
      'md': {'max': '768px'},
      'sm': {'max': '640px'},

      'min2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
      'minxl': {'min': '1280px'},
      'minlg': {'min': '1024px'},
      'minmd': {'min': '768px'},
      'minsm': {'min': '640px'},

    },
  },
  plugins: [],
}

