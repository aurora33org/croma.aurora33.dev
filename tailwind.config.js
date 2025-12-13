/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode colors
        primary: '#F84733',
        text: '#191A1B',
        'text-muted': '#838A8D',
        background: '#F8F8F8',
        container: '#FCF6F0',
        // Dark mode colors
        'text-dark': '#F3DDCA',
        'text-muted-dark': '#FCF5EF',
        'bg-dark': '#191A1B',
        'container-dark': '#3B3C3E',
      },
      fontFamily: {
        'syne': ['Syne', 'sans-serif'],
        'kangge': ['Kangge', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
