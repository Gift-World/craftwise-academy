/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a192f',
        secondary: '#4A1D1F',
        accent: '#FFA500',
        textPrimary: "#ccd6f6",
        textSecondary: "#8892b0",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        nexaBlackItalic: ['Nexa Black Italic', 'sans-serif'],
        nexaBoldItalic: ['Nexa Bold Italic', 'sans-serif'],
        nexaBold: ['Nexa Bold', 'sans-serif'],
        nexaBookItalic: ['Nexa Book Italic', 'sans-serif'],
        nexaHeavyItalic: ['Nexa Heavy Italic', 'sans-serif'],
        nexaHeavy: ['Nexa Heavy', 'sans-serif'],
        nexaItalic: ['Nexa Italic', 'sans-serif'],
        nexaLightItalic: ['Nexa Light Italic', 'sans-serif'],
        nexaLight: ['Nexa Light', 'sans-serif'],
        nexaRegular: ['Nexa Regular', 'sans-serif'],
        nexaThinItalic: ['Nexa Thin Italic', 'sans-serif'],
        nexaThin: ['Nexa Thin', 'sans-serif'],
        nexaXBoldItalic: ['Nexa XBold Italic', 'sans-serif'],
        nexaXBold: ['Nexa XBold', 'sans-serif'],
      },
      animation: {
        shine: 'shine 1.5s ease-out infinite',
      },
      keyframes: {
        shine: {
          '0%': { transform: 'translateX(-100px)' },
          '60%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};
