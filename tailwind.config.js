/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '140': '140%', 
        '470': '470px',
        '420': '420px',
        '250': "250px",
        '200': '200px',
        '600': "600px",
        '180': '180px',
        '350': '350px'
      },
    },
  },
  plugins: [],
} 

