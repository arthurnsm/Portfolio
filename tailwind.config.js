/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", 
  theme: {
    extend: {
      colors: {
       
        light: {
          bg: "#0D0D0D",         
          card: "#1A1A1D",         
          text: {
            primary: "#EDEDED",    
            secondary: "#9CA3AF",  
          },
          border: "#390E7C",        
          primary: {
            DEFAULT: "#9D00FF",   
            hover: "#B85CFF",       
          },
        },

    
        dark: {
          bg: "#0D0D0D",           
          card: "#1A1A1D",       
          text: {
            primary: "#EDEDED",
            secondary: "#9CA3AF",   
          },
          border: "#27272A",        
          primary: {
            DEFAULT: "#7C3AED",
            secondary: "#9D00FF",    
            hover: "#B85CFF",       
          },
        },
      },
        fontFamily: {
        outfit: ['"Outfit"', "sans-serif"],
        inter: ['"Inter"', "sans-serif"],
        agdasima: ['"Agdasima"', "sans-serif"],
      },
    },
  },
  plugins: [],
};