/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        dark: {
          950: "#080808",
          900: "#0D0D0D",
          800: "#141414",
          700: "#1C1C1C",
          600: "#242424",
        },

        primary: "#8B5CF6",
        "primary-dark": "#7C3AED",

        light: "#F5F5F5",
        muted: "#A1A1AA",
      },
    },
  },

  plugins: [],
};