/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      title: ['DM Sans', 'sans-serif'],
      sans: ['Sora', 'sans-serif']
    },
    fontWeight: {
      normal: 600
    },
    letterSpacing: {
      // normal should have a bit more spacing
      normal: '0.05em'
    },
    extend: {
      colors: {
        primary: '#0A0E12',
        secondary: '#131313',
        tertiary: '#222222',
        accent: '#f3f3f3',
        'accent-secondary': '#a1a1aa'
      }
    }
  },
  plugins: []
};
