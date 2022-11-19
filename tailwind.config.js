/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
      },
    },
    fontFamily: {
      'body': ['Roboto'], 
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
}