/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{css,js,ts,jsx,tsx}",
    "./public/**/*.html",           // Add any HTML files inside the public folder if used
    "./components/**/*.{js,ts,jsx,tsx}",  // Add any components folder if it exists
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

