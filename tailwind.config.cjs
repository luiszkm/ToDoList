/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
      xs: 12,
      sm: 14,
      md: 16,
    },
    colors: {
      transparent: 'transparent',
      'black': '#000000',
      'white': '#FFFFFF',

      gray: {
        700: '#0D0D0D',
        600: '#1A1A1A',
        500: '#262626',
        400: '#333333',
        300: '#808080',
        200: '#D9D9D9',
        100: '#F2F2F2',
      },

      danger: {
        500: '#E25858',
      },
      blue:{
        900: '#1E6F9F',
        700: '#4EA8DE',
      },

      purple: {
        900: '#5E60CE',
        500: '#8284FA',
      },

    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
    },
  },
  plugins: [],
}