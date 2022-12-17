/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}" ],
  theme: {
    screens: {
      s: "340px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "976px",
      xl: "1024px",
      "1xl": "1280px",
      "2xl": "1440px",
      "3xl": "1600px",
      "4xl": "1920px",
      "5xl": "2048px",
      "6xl": "2560px",
      "7xl": "3840px",
    },
    fontFamily: {
      // sans: ["Graphik", "sans-serif"],
    },
    extend: {
    },
  },
  plugins: [],
}
