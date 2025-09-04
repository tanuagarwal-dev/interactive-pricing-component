/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"], // default font
      },
      colors: {
        primarySoftCyan: "#a5f3eb",
        primaryStrongCyan: "#10d5c2",
        discountBg: "#feece7",
        discountText: "#ff8c66",
        ctaText: "#bdccff",
        neutralWhite: "#ffffff",
        mainBg: "#fafbff",
        sliderEmpty: "#eaeefb",
        toggleBg: "#cdd7ee",
        textGrayish: "#858fad",
        darkBlue: "#293356",
      },
    },
  },
  plugins: [],
};


