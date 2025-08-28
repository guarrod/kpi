/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './mini_app_kpi_mentoria_5_pantallas.jsx',
  ],
  theme: {
    extend: {
      colors: {
        magno: {
          50: '#f3f2f7',
          100: '#e6e5ee',
          200: '#c9c6dc',
          300: '#a8a2c8',
          400: '#6c5da0',
          500: '#1b1452',
          600: '#160f41',
          700: '#110b33',
          800: '#0c0826',
          900: '#08051b',
        },
        magenta: {
          600: '#D2006E',
        },
      },
    },
  },
  plugins: [],
}
