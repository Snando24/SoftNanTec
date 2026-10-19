/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        brand: {
          950: "#020617",
          900: "#0f172a",
          green: "#a3e635", // Lima neón del logo
        },
      }
    },
  },
  plugins: [],
}
