/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

