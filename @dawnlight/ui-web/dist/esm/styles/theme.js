/**
 * This theme is to be used primarily by tailwindcss projects but can also be
 * imported directly into a runtime file and be used if necessary.
 */
export var theme = {
  theme: {
    colors: {
      accent: '#4C84FF',
      accentLight: '#EDF3FF',
      background: '#181E35',
      black: '#000',
      body1: '#fff',
      body2: 'rgba(255, 255, 255, .5)',
      brand: '#959EBA',
      critical: '#C42338',
      criticalDarker: '#9c1c2c',
      darker: 'rgba(0,0,0,.1)',
      lighter: 'rgba(255,255,255,.1)',
      overlay: 'rgba(0,0,0,.7)',
      dimmed1: 'rgba(255, 255, 255, .4)',
      dimmed2: 'rgba(255, 255, 255, .3)',
      divider: 'rgba(255, 255, 255, .1)',
      form: '#323B57',
      inverseBg: '#fff',
      inverseBody1: '#202947',
      inverseBody2: 'rgba(32, 41, 71, .7)',
      inverseDimmed1: 'rgba(0, 0, 0, .4)',
      inverseDimmed2: 'rgba(0, 0, 0, .3)',
      inverseDivider: 'rgba(0,0,0,.1)',
      inverseForm: '#E9EAED',
      link: '#fff',
      primary: '#202947',
      secondary: '#32437a',
      subtle: '#575F78',
      transparent: 'transparent',
      warning: '#F26109',
      warningLighter: '#FFB844',
      warningDarker: '#c14d07',
      error: '#D66574',
      success: '#4AD991'
    },
    borderRadius: {
      sm: '4px',
      DEFAULT: '8px',
      lg: '12px',
      full: '9999px'
    },
    extend: {
      gridTemplateColumns: {
        detailLayout: '160px auto',
        detailLayoutAside: '160px auto 280px'
      },
      spacing: {
        '1em': '1em'
      },
      cursor: {
        copy: 'copy'
      },
      keyframes: {
        linearIndeterminate1: {
          '0%': {
            left: '-35%',
            right: '100%'
          },
          '60%': {
            left: '100%',
            right: '-90%'
          },
          '100%': {
            left: '100%',
            right: '-90%'
          }
        },
        linearIndeterminate2: {
          '0%': {
            left: '-200%',
            right: '100%'
          },
          '60%': {
            left: '107%',
            right: '-8%'
          },
          '100%': {
            left: '107%',
            right: '-8%'
          }
        },
        fall: {
          '0%, 2%, 4%, 6%, 8.4%': {
            background: 'hsl(352deg 70% 45%)'
          },
          '1%, 3%, 5%, 7%': {
            background: 'hsl(352deg 70% 10%)'
          }
        },
        bedExit: {
          '0%, 2%, 4%, 6%, 8.4%': {
            background: 'hsl(23deg 93% 49%)'
          },
          '1%, 3%, 5%, 7%': {
            background: 'hsl(23deg 93% 10%)'
          }
        }
      },
      animation: {
        linearIndeterminate1: 'linearIndeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite',
        linearIndeterminate2: 'linearIndeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite',
        fall: 'fall 60s ease-in-out infinite',
        bedExit: 'bedExit 60s ease-in-out infinite'
      }
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled']
    }
  },
  plugins: []
};
//# sourceMappingURL=theme.js.map