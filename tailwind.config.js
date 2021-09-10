module.exports = {
  purge: ["./src/**/*.{ts,tsx}"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      16: "16",
    },
    lineHeight: {
      1: "1",
    },
    fontFamily: {
      sans: ["system-ui"],
    },

    colors: {
      white: "#fff",
      black: "#000",
      transparent: "#fff0",
      current: "currentColor",
    },

    capsize: {
      fontMetrics: {
        sans: {
          capHeight: 689,
          ascent: 935,
          descent: -265,
          lineGap: 0,
          unitsPerEm: 1000,
        },
      },
    },

    extend: {},
  },
  variants: { extend: {} },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@themosaad/tailwindcss-capsize"),
  ],
}
