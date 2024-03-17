/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "school-red": "#F54E39",
        "school-blue": "#232C95",
        "school-socials": "#2B306A",
        dark1: "#4A4A4A",
        dark2: "#191919",
        blue1: "#3481E8",
        "pill-bg": "#F4F4F4",
        "pill-border": "#D0D0D0",
        "pill-text": "#4E4E4F",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
