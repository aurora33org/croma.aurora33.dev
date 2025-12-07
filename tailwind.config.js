/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8F8F8',
        container: '#FCF6F0',
        primary: '#F84733',
        text: '#191A1B',
        'text-muted': '#838a8d',
      },
      fontFamily: {
        'syne': ['Syne', 'sans-serif'],
        'kangge': ['Kangge', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
