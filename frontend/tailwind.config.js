//import { transform } from 'typescript'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        textOne: '#1c1c1c', // charcoal for prime text
        textTwo: '#4d4d4d', // medium gray for secondary text
      },
      backgroundColor: {
        bgOne: '#f0f0f0', // light gray for main background
        bgTwo: '#e0e0e0', // darker gray for secondary background
        bgThree: '#b3b3b3', // medium gray for accents or cards
        bgFour: '#333333', // dark gray for header or footer
        bgFive: '#000000', // black for high-contrast elements
      },
      animation: {
        'scale-pulse': 'scalePulse 2s infinite ease-in-out',
      },
      keyframes: {
        scalePulse: {
          '0%, 100%' : { transform: 'scale(1)'},
          '50%': { transform: 'scale(1.2)'},
        },
      },
    },
  },
  plugins: [],
}

