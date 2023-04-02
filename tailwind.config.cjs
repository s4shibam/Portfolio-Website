/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
        travel: "travel 20s infinite alternate",
      },

      colors: {
        darkBG: "#17181c",
        lightBG: "#d9d9d9",
        darkText: "#05081c",
        lightText: "#e5e5e5",
        dullWhite: "#cbd5e1",
        frameBG: "#22242a",
        golden: "#f5c32c",
        orangered: "#ff4500",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        pacifico: ["Pacifico", "san-serif"],
      },
      keyframes: {
        travel: {
          "0%": {
            transform: "translate(-75%, -25%) rotate(-90deg)",
            "border-radius": "24% 76% 35% 65% / 27% 36% 64% 73%",
          },

          "100%": {
            transform: "translate(75%, 25%) rotate(-20deg)",
            "border-radius": "76% 24% 33% 67% / 68% 55% 45% 32%",
          },
        },
      },
    },
  },
  plugins: [],
};
