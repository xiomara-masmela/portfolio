module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: {
        DEFAULT: '#F8F3EC'
      },
      black: {
        DEFAULT: '#0e0e0e'
      },
      pink: {
        DEFAULT: '#F28585'
      },
      red: {
        DEFAULT: '#D9411E'
      },
      orange: {
        DEFAULT: '#F28F6B'
      }
    },
    textColor: theme => theme('colors'),
     textColor: {
       'black': '#0e0e0e',
       'pink': '#F28585',
       'red': '#F28F6B',
     },
    fontFamily: {
      'mono': ['Roboto Mono', 'monospace'],
      'sans': ['Rubik', 'sans-serif'],
      'title': ['Playfair Display', 'serif']
     },
     fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      xxl: ['90px', '120px'],
      huge: ['180px', '200px'],
    },extend: {
      zIndex: {
       '-1': '-1',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
