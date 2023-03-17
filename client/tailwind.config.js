/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      black: "#000000",
      teal: {
        light: "#D1EDEF",
        medium: "#74CACE",
        main: "#17A7AD",
      },
      peach: {
        light: "#FEF9F2",
        medium: "#FBECD7",
        main: "#F8DFBD",
      },
      gold: {
        light: "#F9F2E0",
        medium: "#ECD8A3",
        main: "#E0BE65",
      },
      orange: {
        light: "#FCDFD3",
        medium: "#F79F7A",
        main: "#F15F22",
      },
      red: {
        light: "#FBD1D5",
        medium: "#F47682",
        main: "#ED1B2E",
      },
    },
  },
  plugins: [],
};
