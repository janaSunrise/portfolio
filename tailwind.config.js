/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: ['Sen', 'sans-serif'],
      title: ['Montserrat', 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#0A0E12',
        secondary: '#131313',
        tertiary: '#222222',
        accent: '#f3f3f3',
        'accent-secondary': '#b5b5b5'
      }
    }
  },
  plugins: []
};
