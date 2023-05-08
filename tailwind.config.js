/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
       // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      
      width: {
        '128': '32rem',
        '140': '40rem',
        '145': '50rem',
        '150': '50rem',
        '1000': '50rem',
        '200': '80rem',
        
      },
      height: {
        '30': '30rem',
        '32': '32rem',
        '150': '30rem',
        '145': '8rem',
        '69': '10rem',
      },
      
      colors:{
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63396",
        primaryDark: "#5E6D9",
        Gray1:"#484848",
        Gray2:"#404040",
        Gray3:"#5C7F91",
        Gray4:"#537384",
        LightBlue:"#5F9EA0",
        W1:"#FFFFFF",
        W2:"#ECECEE",
        W3:"#E1E1E1",
        Pink: "#E288E0",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),

  ],
}
