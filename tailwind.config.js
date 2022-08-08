/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whiteColor: "#FFFFFF",
        primaryColor: "#183059",
        primaryColorLight: "#276FBF",    
        secondaryColor: "#6699CC",
        secondaryColorLight: "#66A9CC",
        primaryColorHover: "",
        greenColor: "#5baa7d",     
        redColor: "#F03A47",
        redColorLight: "#FCD8DA",
        grayColor: "#dfe3e8",
        grayColorLight:  "#D1D6DE", 
        activeGray: "#DBDEE4",         
        grayColorDark: "#9D9D9D",     
        textColorLight: "#484646",
        textColor: "#0B0B0B",
        backgroundColor: "#f2f3f5"
      },
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
         textLarge: ["20px","28px"], 
         textMedium: ["18px","25.2px"], 
         textNormal: ["16px","22.4px"], 
         textSmall: ["14px","19.6px"], 
         textXSmall: ["12px","16px"], 
         h1: ["56px","61.6px"], 
         h2: ["48px","52.8px"], 
         h3: ["40px","44px"], 
         h4: ["32px","35.2px"], 
         h5: ["24px","26.4px"], 
         h6: ["20px","22px"], 
      },
    },
  },               
  plugins: [],
}
