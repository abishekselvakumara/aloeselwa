/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      colors: {
        aloe: {
          50: '#f0f9f0',
          100: '#dcf0dc',
          200: '#bce0bc',
          300: '#8fc98f',
          400: '#5caa5c',
          500: '#3d8b3d', // Main green color
          600: '#2e6e2e',
          700: '#255725',
          800: '#204620',
          900: '#1a3a1a',
        }
      }
    }
  },
  plugins: [],
}