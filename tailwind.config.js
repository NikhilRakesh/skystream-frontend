/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      colors: {
        primary:"#CF088C",
        white:"#FFFFFF",
        gray:"#CFD1D9",
        darkBlue:"#03091D",
        red:"#F00",
        blue:"#017EFA",
        black:"#000",
        light:"#F8F8F8",
        purple:"#ff5f4a",
        orange:"#D8608B",
        liteblue:"#6EE1F8",
        lightgreen:"#30D987",
        lightorange:"#ed664e",
        violet:"#4044ED",
        


      }
    },
    
  },
  plugins: [],
}