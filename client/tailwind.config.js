/** @type {import('tailwindcss').Config} */
const { colors } = require("./src/colors");

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      ...colors,
    },
    important: true,
  },
  plugins: [
    
  ],
};
