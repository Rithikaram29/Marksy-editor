/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}", // Adjust this based on your structure
    ],
    theme: {
      extend: {},
    },
    plugins: [require('@tailwindcss/typography')],
  }
  