module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      outfit: ["Outfit", "sans-serif"],
    },
    extend: {
      colors: {
        gray: {
          100: "#f7f7f7",
          200: "#dddddd",
          300: "#aaaaaa",
          400: "#5e5e5e",
          500: "#2b2b2b",
          600: "#161616",
        },
      },
    },
  },
  variants: {
    extend: {
      rotate: ["dark"],
      margin: ["last"],
    },
  },
  plugins: [],
};
