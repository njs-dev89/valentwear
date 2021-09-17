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
    },
  },
  variants: {
    extend: {
      inset: ["hover", "focus"],
    },
  },
  plugins: [require("@tailwindcss/custom-forms")],
};
