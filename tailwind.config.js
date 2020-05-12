// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ['./src/**/*.js'],
  theme: {
    container: {
      center: true,
      padding: 'calc(var(--gutter) / 2)',
    },
    colors: {
      current: 'currentColor',
      transparent: 'transparent',

      primary: 'var(--primary)',

      black: 'var(--black)',
      'black-70': 'var(--black-70)',
      'black-50': 'var(--black-50)',
      'black-25': 'var(--black-25)',

      white: 'var(--white)',
      'white-75': 'var(--white-75)',
      'white-50': 'var(--white-50)',
      'white-25': 'var(--white-25)',

      'grey-darkest': '#3d4852',
      'grey-darker': '#454545',
      'grey-dark': '#6E6E6E',
      grey: '#b8c2cc',
      'grey-light': '#C6C6C6',
      'grey-lighter': '#E8E8E8',
      'grey-lightest': '#F8F8F8',

      'red-darkest': '#3b0d0c',
      'red-darker': '#621b18',
      'red-dark': '#cc1f1a',
      red: '#e3342f',
      'red-light': '#ef5753',
      'red-lighter': '#f9acaa',
      'red-lightest': '#fcebea',

      'orange-darkest': '#462a16',
      'orange-darker': '#613b1f',
      'orange-dark': '#de751f',
      orange: '#f6993f',
      'orange-light': '#faad63',
      'orange-lighter': '#fcd9b6',
      'orange-lightest': '#fff5eb',

      'yellow-darkest': '#453411',
      'yellow-darker': '#684f1d',
      'yellow-dark': '#f2d024',
      yellow: '#ffed4a',
      'yellow-light': '#fff382',
      'yellow-lighter': '#fff9c2',
      'yellow-lightest': '#fcfbeb',

      'green-darkest': '#0f2f21',
      'green-darker': '#34785C',
      'green-dark': '#1f9d55',
      green: '#38c172',
      'green-light': '#51d88a',
      'green-lighter': '#a2f5bf',
      'green-lightest': '#e3fcec',

      'teal-darkest': '#0d3331',
      'teal-darker': '#20504f',
      'teal-dark': '#38a89d',
      teal: '#4dc0b5',
      'teal-light': '#64d5ca',
      'teal-lighter': '#a0f0ed',
      'teal-lightest': '#e8fffe',

      'blue-darkest': '#12283a',
      'blue-darker': '#1c3d5a',
      'blue-dark': '#2779bd',
      blue: '#3490dc',
      'blue-light': '#6cb2eb',
      'blue-lighter': '#bcdefa',
      'blue-lightest': '#eff8ff',

      'indigo-darkest': '#191e38',
      'indigo-darker': '#2f365f',
      'indigo-dark': '#5661b3',
      indigo: '#6574cd',
      'indigo-light': '#7886d7',
      'indigo-lighter': '#b2b7ff',
      'indigo-lightest': '#e6e8ff',

      'purple-darkest': '#21183c',
      'purple-darker': '#382b5f',
      'purple-dark': '#794acf',
      purple: '#9561e2',
      'purple-light': '#a779e9',
      'purple-lighter': '#d6bbfc',
      'purple-lightest': '#f3ebff',

      'pink-darkest': '#451225',
      'pink-darker': '#6f213f',
      'pink-dark': '#eb5286',
      pink: '#f66d9b',
      'pink-light': '#fa7ea8',
      'pink-lighter': '#ffbbca',
      'pink-lightest': '#ffebef',
    },

    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },

    fontFamily: {
      sans: [
        'Avenir_Next',
        'Source Sans Pro',
        'system-ui',
        'BlinkMacSystemFont',
        '-apple-system',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ],
      serif: [
        'Constantia',
        'Lucida Bright',
        'Lucidabright',
        'Lucida Serif',
        'Lucida',
        'DejaVu Serif',
        'Bitstream Vera Serif',
        'Liberation Serif',
        'Georgia',
        'serif',
      ],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ],
    },

    fontSize: {
      xxs: '.6875rem', // 11px
      xs: '.75rem', // 12px
      sm: '.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '2rem', // 32px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem', // 48px
      '6xl': '3.5rem', // 56px
    },

    fontWeight: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },

    lineHeight: {
      '0': 0,
      none: 1,
      tight: 1.25,
      normal: 1.5,
      loose: 2,
    },

    letterSpacing: {
      tight: '-0.05em',
      normal: '0',
      wide: '0.05em',
    },

    textColor: (theme) => theme('colors'),

    backgroundColor: (theme) => theme('colors'),

    // backgroundSize
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
    },

    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
      '8': '8px',
    },

    borderColor: (theme) => ({
      default: theme('colors.grey-light'),
      ...theme('colors'),
    }),
    borderRadius: {
      none: '0',
      sm: '.125rem',
      default: '.25rem',
      lg: '.5rem',
      xl: '.75rem',
      '2xl': '1rem',
      full: '9999px',
    },

    width: {
      auto: 'auto',
      px: '1px',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '13': '3.25rem',
      '14': '3.5rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '28': '7rem',
      '32': '8rem',
      '36': '9rem',
      '40': '10rem',
      '48': '12rem',
      '64': '16rem',
      '112': '28rem',
      '1/2': '50%',
      '1/3': '33.33333%',
      '2/3': '66.66667%',
      '1/4': '25%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.66667%',
      '5/6': '83.33333%',
      '1/7': '14.285%',
      '1/12': '8.33333%',
      '5/12': '41.66666%',
      '7/12': '58.33333%',
      '11/12': '91.6666%',
      full: '100%',
      screen: '100vw',
      'screen-90': '90vw',
    },

    height: {
      auto: 'auto',
      px: '1px',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '13': '3.25rem',
      '14': '3.5rem',
      '16': '4rem',
      '24': '6rem',
      '28': '7rem',
      '30': '7.5rem',
      '32': '8rem',
      '48': '12rem',
      '64': '16rem',
      full: '100%',
      screen: '100vh',
    },

    minWidth: {
      '0': '0',
      full: '100%',
    },

    minHeight: {
      '0': '0',
      px: '1px',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '13': '3.25rem',
      '14': '3.5rem',
      '16': '4rem',
      '24': '6rem',
      '28': '7rem',
      '30': '7.5rem',
      '32': '8rem',
      '48': '12rem',
      '64': '16rem',
      full: '100%',
      screen: '100vh',
    },

    maxWidth: {
      none: 'none',
      xs: '20rem',
      sm: '30rem',
      md: '40rem',
      lg: '50rem',
      xl: '60rem',
      '2xl': '70rem',
      '3xl': '80rem',
      '4xl': '90rem',
      '5xl': '100rem',
      full: '100%',
    },
    maxHeight: {
      full: '100%',
      screen: '100vh',
    },

    padding: {
      px: '1px',
      '0': '0',
      '1': '0.25rem', // 4px
      '2': '0.5rem', // 8px
      '3': '0.75rem', // 12px
      '4': '1rem', // 16px
      '5': '1.25rem', // 20px
      '6': '1.5rem', // 24px
      '8': '2rem', // 32px
      '9': '2.25rem', // 36px
      '10': '2.5rem', // 40px
      '11': '2.75rem', // 44px
      '12': '3rem', // 48px
      '13': '3.25rem', // 52px
      '16': '4rem', // 64px
      '20': '5rem', // 80px
      '24': '6rem', // 96px
      '25': '6.25rem', // 100px
      '26': '6.5rem', // 104px
      '32': '8rem', // 128px
      '40': '10rem', // 160px
    },

    margin: {
      auto: 'auto',
      px: '1px',
      '0': '0',
      '1': '0.25rem', // 4px
      '2': '0.5rem', // 8px
      '3': '0.75rem', // 12px
      '4': '1rem', // 16px
      '5': '1.25rem', // 20px
      '6': '1.5rem', // 24px
      '7': '1.75rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '14': '3.5rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '25': '6.25rem',
      '28': '7rem',
      '32': '8rem',
      '36': '9rem',
      '40': '10rem',
      // negativeMargin
      '-px': '1px',
      '=0': '0',
      '-1': '0.25rem',
      '-2': '0.5rem',
      '-3': '0.75rem',
      '-4': '1rem',
      '-6': '1.5rem',
      '-8': '2rem',
    },

    boxShadow: {
      default: '0 2px 4px 0 rgba(0,0,0,0.10)',
      md: '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
      lg: '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
      inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
      none: 'none',
    },

    zIndex: {
      auto: 'auto',
      '0': 0,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '50': 50,
    },
    fill: {
      current: 'currentColor',
    },

    stroke: {
      current: 'currentColor',
    },
  },

  variants: {
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColor: ['responsive', 'hover'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderColor: ['responsive', 'hover'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive'],
    flexDirection: ['responsive'],
    flexWrap: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    justifyContent: ['responsive'],
    alignContent: ['responsive'],
    flex: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    float: ['responsive'],
    fontFamily: ['responsive'],
    fontWeight: ['responsive', 'hover'],
    height: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    negativeMargin: ['responsive'],
    opacity: ['responsive'],
    overflow: ['responsive'],
    padding: ['responsive'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    inset: ['responsive'],
    resize: ['responsive'],
    boxShadow: ['responsive'],
    fill: [],
    stroke: [],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover'],
    fontSize: ['responsive'],
    fontStyle: ['responsive', 'hover'],
    fontSmoothing: ['responsive', 'hover'],
    textDecoration: ['responsive', 'hover'],
    textTransform: ['responsive', 'hover'],
    letterSpacing: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    wordBreak: ['responsive'],
    width: ['responsive'],
    zIndex: ['responsive'],
  },

  plugins: [
    require('@tailwindcss/custom-forms'),

    function ({ addUtilities }) {
      addUtilities(
        {
          '.object-fill': {
            objectFit: 'fill',
          },
          '.object-contain': {
            objectFit: 'contain',
          },
          '.object-cover': {
            objectFit: 'cover',
          },
        },
        ['responsive']
      )
      addUtilities(
        {
          '.-z-1': {
            zIndex: -1,
          },
        },
        ['responsive']
      )
      addUtilities(
        {
          '.outline-none': {
            outline: 'none',
          },
        },
        ['focus']
      )
      addUtilities({
        '.translate-center': {
          transform: 'translateX(-50%) translateY(-50%)',
        },
      })
      addUtilities({
        '.overflow-x-hidden': {
          overflowX: 'hidden',
        },
      })
      addUtilities({
        '.contain-strict': {
          contain: 'strict',
        },
      })
    },
  ],
}
