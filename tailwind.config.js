/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: "#B2C49D",
        secondaryBg: "#D9D9D6",
        footerBg: "#B2C49D",
        primary: "#3F5260",
        subTitle: "#B85C24",

      }
    },
  },
  plugins: [],
}

