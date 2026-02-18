/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors: {
      primary: {
          DEFAULT: '#C6273A', 
        },
        secondary: {
          DEFAULT: '#161111', 
        },
        accent: {
          DEFAULT: '#f59e0b', 
        },
     },
    fontFamily: {
        'inter': ['Inter', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}
