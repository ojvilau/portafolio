module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#f7f7f7",
          200: "#dddddd",
          300: "#aaaaaa",
          400: "#2b2b2b",
          500: "#161616",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
