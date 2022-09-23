/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bGreen: "#179b95",
      },
    },
  },
  plugins: [],
};
// screens: {
//   'smallmobile':'320px',
//   'mobile':'420px',
//   'tablet': '640px',
//   'laptop': '1024px',
//   'desktop': '1280px',
// },