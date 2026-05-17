/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          50:  '#EBF3FD',
          100: '#D7E8FB',
          200: '#AECFF7',
          300: '#86B6F4',
          400: '#5E9DF0',
          500: '#2F80ED',
          600: '#1a6fd4',
          700: '#1558AB',
          800: '#0f428a',
          900: '#0a2d61',
          950: '#061e42',
        },
        green: {
          50:  '#F0FCF4',
          100: '#DFF7EA',
          200: '#BFEFCD',
          300: '#8FE0AE',
          400: '#5ACF88',
          500: '#27AE60',
          600: '#1F8C4C',
          700: '#176B3A',
          800: '#0f4a28',
          900: '#082e18',
          950: '#041a0e',
        },
      },
      fontFamily: {
        display: ['Raleway', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      animation: {
        'float': 'float 5s ease-in-out infinite',
        'float-mid': 'float 5s ease-in-out 1.5s infinite',
        'float-slow': 'float 5s ease-in-out 3s infinite',
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'slide-in-right': 'slideInRight 0.35s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(24px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
