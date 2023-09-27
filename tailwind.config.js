/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lexend': ['Lexend', 'sans-serif'],
      },
      colors: {
        'primary': '#6610f2',
        'primary-light': '#AE6EFB',
        'primary-dark': '#3A08AE',
      },
    },
  },
  plugins: [],
}

