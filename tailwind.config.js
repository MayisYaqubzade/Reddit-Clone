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
        'ufc':"url(UFC.jpg)",
        'plane':"url(Plane.jpg)",
        'holland':"url(holland.png)", 
        'bayden':"url(bayden.jpg)",
        'gaming':"url(bayden.jpg)",
        
      },
      height:{
        "190" : "190px"
      }
    },
  },
  plugins: [],  
}
  