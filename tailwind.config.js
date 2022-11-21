/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
      },
      colors: {
        "like-parent": "#f1f1f1",
      }
    },
  },
  plugins: [],
};
