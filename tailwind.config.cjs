/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: "#ffcd00",
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
