/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        aclonica: ['Aclonica', 'sans-serif'],
        papyrus: ['Papyrus', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s linear infinite',
      },
      colors: {
        social: {
          facebook: '#4267B2',
          telegram: '#088cce',
          twitter: '#1DA1F2',
          instagram: '#FD1D1D',
          google: '#DB4437',
          youtube: '#FF0000',
          medium: '#000000',
        },
      },
    },
  },
  plugins: [require('tailwindcss-neumorphism')],
}
