/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        lato:['Lato','san-serif']
      },
      colors:{
        yellw:'#a18a4d',
        footer:'#333',
        icon:'#999'
      }
    },
  },
  plugins: [],
}

