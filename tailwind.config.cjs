/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: "#f9594d",
      secondary: "#497174",
      bgColor: "EFF5F5",
    },
    extend: {
      fontFamily: {
        lato: ["Lato"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
