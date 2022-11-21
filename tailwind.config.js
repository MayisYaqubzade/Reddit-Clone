/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"], 
  theme: {
    screens: {
      'mobile': '500px',
      // => @media (min-width: 500px) { ... }

      'tablet': '768px',
      // => @media (min-width: 768px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      backgroundImage:{
        'ufc':"url(../img/UFC.jpg)",
        'plane':"url(../img/Plane.jpg)",
        'holland':"url(../img/holland.png)", 
        'bayden':"url(../img/bayden.jpg)",
        'gaming':"url(../img/bayden.jpg)",
        
      },
      height:{
        "190" : "190px"
      }
    },
  },
  plugins: [],  
}
  