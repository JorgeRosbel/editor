/** @type {import('tailwindcss').Config} */
export default {
  content: [ './index.html','./src/**/*.{js,ts,jsx,tsx}'],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        dark: {
          1: '#2e2f2e',
          2: '#2a2a2d',
        }
      }
    },
    keyframes: {
      fade: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 }
      }
    },
    animation: {
      fade: "fade 1s linear"
    }
  },
  plugins: [],
}

