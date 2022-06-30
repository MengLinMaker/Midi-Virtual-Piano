/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,scss}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'] 
      },
      colors:{
        primary: '#FF8888',
        secondary: '#ffc388',
        light_bg: '#FFFFFF',
        dark_bg: '#020402',
        light_txt: '#020402',
        dark_txt: '#FFFFFF',
      },
    },
  },
  plugins: [],
}
