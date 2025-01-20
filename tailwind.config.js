/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '140': '140%', 
        '470': '470px',
        '250': "250px",
        '200': '200px',
        '600': "600px"
      },
    },
  },
  plugins: [],
} 

