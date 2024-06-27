/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors :{
          "primary" : "#3255eb", 
      },
     fontFamily : {
      "poppins" : ['Poppins', 'sans-serif'],
      "montserrat" : ['Montserrat', 'sans-serif'],
     }
    },
  },
  plugins: [],
}

