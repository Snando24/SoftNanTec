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
          800: "#1e293b",
          green: "#a3e635",
        },
        dark: "#020617",
        accent: "#a3e635", // Lima neón del logo
        neon: {
          green: "#a3e635",
          cyan: "#22d3ee",
        },
        primary: "#0f172a",
        secondary: "#38bdf8",
      }
    },
  },
  plugins: [],
}
