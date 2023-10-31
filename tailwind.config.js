/** @type {import('tailwindcss').Config} */;
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "540px",
      md: "870px",
      lg: "976px",
      xl: "1440px"
    },
    fontFamily: {
      'barlowcondensed': ['Barlow Condensed' , 'sans-serif'],
      'barlow': ['Barlow' , 'sans-serif'],
      'bellefair': ['Bellefair' , 'sans-serif']
    },
    extend: {
      colors: {
        ...colors,
        'dirtywhite': '#9799ac'
      }
    },
  },
  plugins: [],
}

