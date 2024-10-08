/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBg: '#f8f4f4',
        customBlue: '#10142c',  // Added the new custom color
      },
    },
  },
  plugins: [],
}