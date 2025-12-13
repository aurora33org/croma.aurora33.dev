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
        background: '#F8F8F8',
        container: '#FCF6F0',
        primary: '#F84733',
        text: '#191A1B',
        'text-muted': '#838a8d',
        // Dark mode colors
        'bg': '#0f1117',
        'bg-dark': '#010409',
        'text-dark': '#e6edf3',
        'text-muted-dark': '#8b949e',
        'container-dark': '#161b22',
      },
      fontFamily: {
        'syne': ['Syne', 'sans-serif'],
        'kangge': ['Kangge', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
