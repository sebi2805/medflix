/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      transitionProperty: {
        colors: "background-color, border-color, color, fill, stroke",
      },
      duration: {
        1000: "1000ms",
      },
      colors: {
        whiteBackground: "#ececec",
        darkGreen: {
          10: "#EBF8F4",
          100: "#B6EADA",
          200: "#8FC3B3",
          300: "#7CAF9F",
          400: "#588577",
          500: "#588577",
          600: "#476F63",
          700: "#37584E",
          800: "#274039",
        },
        purple: {
          1: "#FEFDFD",
          10: "#E7D7DB",
          100: "#D3B7C5",
          200: "#BF97B5",
          300: "#A978AA",
          400: "#5C3B7E",
          500: "#301E67",
          600: "#35175B",
          700: "#360B3F",
          800: "#30072F",
        },
        blue: {
          10: "#ADEBF6",
          100: "#9BDFF0",
          200: "#8BD1E8",
          300: "#70B1D4",
          400: "#5B8FB9",
          500: "#4E7BA4",
          600: "#355577",
          700: "#294260",
          800: "#1E3048",
        },
        pink: {
          10: "#FEF2FE",
          100: "#FEE4FE",
          200: "#FEDDFE",
          300: "#FFCEFE",
          400: "#E7B8E7",
          500: "#B78EB7",
          600: "#9F799F",
          700: "#886588",
          800: "#705270",
          900: "#402D40",
        },
        lightGreen: {
          1: "#FCFFFA",
          10: "#F0FBE9",
          100: "#E3F8D5",
          200: "#D6F5C0",
          300: "#BCE99B",
          400: "#AFDE8D",
          500: "#95BF72",
          600: "#88AF65",
          700: "#7B9F59",
          800: "#6E8F4D",
          900: "#628043",
        },
        grey: {
          100: "#f3f3f3",
          200: "#dcdcdc",
          300: "#c5c5c5",
          400: "#aeaeae",
          500: "#404040",
          600: "#282828",
          700: "#181818",
          800: "#121212",
        },
        red: {
          10: "#FFF0F5",
          100: "#FFC8DC",
          200: "#FFA0C4",
          300: "#FE78AB",
          400: "#F95093",
          500: "#F2287C",
          600: "#E90064",
          700: "#D0002A",
          800: "#B40000",
          900: "#8E0800",
        },
      },
    },
  },
  plugins: [],
};
