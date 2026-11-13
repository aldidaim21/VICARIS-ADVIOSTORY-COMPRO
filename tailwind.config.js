/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0A',
        coal: '#141414',
        graphite: '#1E1E1E',
        gold: '#C9A45C',
        'gold-soft': '#E3CB94',
        paper: '#FAFAF7',
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
