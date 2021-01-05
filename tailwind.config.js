const theme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    extend: {
      colors: {
        current: 'currentColor',
        transparent: 'transparent',
        foreground: '#fefcf8',
        white: '#ffffff',
        black: '#000000',
        primary: '#34785C',
        subprimary: '#9CCCB8',
        gray: {
          100: '#F8F8F8',
          200: '#E7E7E7',
          500: '#9B9B9B',
          700: '#333333',
          800: '#2C2D32',
          900: '#1D1D1D'
        }
      },
      fontSize: {
        xxs: '.6875rem', // 11px
        xs: '.75rem', // 12px
        sm: '.875rem', // 14px
        base: '1rem', // 16px
        lg: '1.125rem', // 18px
        xl: '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '28px': '1.75rem', // 28px
        '30px': '30px', // 30px
        '3xl': '2rem', // 32px
        '4xl': '2.25rem', // 36px
        '40px': '2.5rem', // 40px
        '5xl': '3rem', // 48px
        '6xl': '3.5rem' // 56px
      },
      maxWidth: {
        '2xs': '304px',
        container: '1030px' //'982 + 24*2'
      },
      fontFamily: {
        ...theme.fontFamily,
        sans: ['barlow', 'sans-serif'],
        serif: ['Georgia', 'serif']
      }
    }
  },
  variants: {}
};
