/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: {
            dark: "#334155",
            light: "#e2e8f0",
          },
          secondary: {
            dark: "#1e293b",
            light: "#e2e8f0",
          },
        },
      },
    },
  },
  plugins: [],
}
