/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: "#F3D03E",
      },
      fontFamily: {
        calibri: ["Calibri", "sans-serif"],
        "gotham-bold": ["Gotham Bold", "serif"],
        "gotham-light": ["Gotham Light", "serif"],
      },
    },
  },
  plugins: [],
};
