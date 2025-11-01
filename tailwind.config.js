/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gentium: ['"Gentium Book Plus"', 'serif'], // add this line
      },
    },
  },
  plugins: [],
}
