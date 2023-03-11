/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: { min: '304px', max: '767px' },

      md: { min: '768px', max: '1246px' },

      lg: { min: '1246px', max: '1535px' },

      xl: { min: '1280px', max: '1535px' },
      // '2xl': { min: '1536px' },
    },
    extend: {
      colors: {
        lightBlue: '#1F2A49',
        blue: '#0079FE',
        deepBlue: '#141c2f',
      },
    },
  },
  plugins: [],
};
