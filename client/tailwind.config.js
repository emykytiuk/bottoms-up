/** @type {import('tailwindcss').Config} */
const { colors } = require("./src/colors");

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
    },
    important: true,
  },
  plugins: [],
};
