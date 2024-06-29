/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        "header-pink": "#6b255e",
        "header-green": "#45984f",
        "header-blue": "#283bc4",
      },
    },
  },
  plugins: [],
};
