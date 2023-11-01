/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./success.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /fill-+/,
    },
  ],
  theme: {
    fontFamily: {
      calibre: ["Calibre"],
      sfmono: ["SFMono"],
      chawp: ["Chawp"]
    },
    extend: {
      colors: {
        beige: {
          50: "#e5e5cb",
          100: "#d5cea3",
          200: "#b9b48b",
          300: "#a49f76"
        },
        coffee: {
          50: "#2c1e16",
          100: "#2c1e16",
          200: "#22180f",
          300: "#1a120b",
          400: "#140e08",
          500: "#0d0803"
        }
      }
    },
  },
  plugins: [],
}

