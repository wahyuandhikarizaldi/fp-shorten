/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      gridRow: {
        "span-7": "span 7 / span 16",
        "span-8": "span 8 / span 16",
        "span-9": "span 9 / span 16",
        "span-10": "span 10 / span 16",
        "span-11": "span 11 / span 16",
        "span-12": "span 12 / span 16",
        "span-13": "span 13 / span 16",
        "span-14": "span 14 / span 16",
        "span-15": "span 15 / span 16",
        "span-16": "span 16 / span 16",
      },
      gridCol: {
        "span-7": "span 7 / span 16",
        "span-8": "span 8 / span 16",
        "span-9": "span 9 / span 16",
        "span-10": "span 10 / span 16",
        "span-11": "span 11 / span 16",
        "span-12": "span 12 / span 16",
        "span-13": "span 13 / span 16",
        "span-14": "span 14 / span 16",
        "span-15": "span 15 / span 16",
        "span-16": "span 16 / span 16",
      },
      gridTemplateRows: {
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
        9: "repeat(9, minmax(0, 1fr))",
        10: "repeat(10, minmax(0, 1fr))",
        11: "repeat(11, minmax(0, 1fr))",
        12: "repeat(12, minmax(0, 1fr))",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
