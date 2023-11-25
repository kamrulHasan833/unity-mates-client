/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#B31312",
        "secondary-color": "#2B2A4C",
        "title-color": "#000000",
        "desc-color": "#767676",
        "border-color": "#D1D1D1",
      },

      maxWidth: {
        standard: "96rem",
        large: "120rem",
        small: "64rem",
      },
      fontFamily: {
        inter: "'Inter', sans-serif",
      },
    },
  },
  plugins: [require("daisyui")],
};
