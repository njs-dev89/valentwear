const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "4.5xl": "2.5rem",
      },
      colors: {
        gold: "#c1b661",
      },
    },
  },
  variants: {
    extend: {
      inset: ["hover", "focus"],
      opacity: ["disabled"],
    },
  },
  plugins: [require("@tailwindcss/custom-forms")],
};
