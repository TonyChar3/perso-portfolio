/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'bounce-slow': {
          '0%,100%': {transform: "translateY(-25%)"},
          '50%': {transform: "translateY(0)"}
        }
      },
      animation: {
        bounce_slow: 'bounce-slow ease infinite'
      },
      backgroundImage: {
        'project-image': "url('https://ik.imagekit.io/bqofr3ncj/Portfolio/Re%CC%81seau%20(2).png?updatedAt=1704295302816')"
      },
      backgroundSize: {
        '50%':'50%'
      },
      transitionProperty: {
        'height':'height',
        'max-height':'max-height'
      }
    },
  },
  plugins: [    // ...other plugins
  function ({ addBase, addUtilities, theme }) {
    addBase({
      '@keyframes pulsate-fwd': {
        '0%': {
          transform: 'scale(0.96)',
        },
        '50%': {
          transform: 'scale(1.03)',
        },
        '100%': {
          transform: 'scale(0.96)',
        },
      },
      '@keyframes pulsate-fwd-xl': {
        '0%': {
          transform: 'scale(0.98)',
        },
        '50%': {
          transform: 'scale(1.01)',
        },
        '100%': {
          transform: 'scale(0.98)',
        },
      },
      '@keyframes height-switch': {
        '0%': {
          transform: 'scale(0%)',
        },
        '100%': {
          transform: 'scale(100%)',
        },
      },
    });

    // If you want to add vendor-prefixed keyframes for compatibility
    addBase({
      '@-webkit-keyframes pulsate-fwd': {
        '0%': {
          '-webkit-transform': 'scale(0.96)',
          transform: 'scale(0.96)',
        },
        '50%': {
          '-webkit-transform': 'scale(1.03)',
          transform: 'scale(1.03)',
        },
        '100%': {
          '-webkit-transform': 'scale(0.96)',
          transform: 'scale(0.96)',
        },
      },
      '@-webkit-keyframes pulsate-fwd-xl': {
        '0%': {
          transform: 'scale(0.98)',
        },
        '50%': {
          transform: 'scale(1.01)',
        },
        '100%': {
          transform: 'scale(0.98)',
        },
      },
      '@-webkit-keyframes height-switch': {
        '0%': {
          transform: 'scale(0%)',
        },
        '100%': {
          transform: 'scale(100%)',
        },
      },
    });

    // Optionally, you can create utilities for these keyframes
    const utilities = {
      '.animate-pulsate-fwd': {
        animation: 'pulsate-fwd 8s ease infinite',
      },
      '.animate-pulsate-fwd-xl': {
        animation: 'pulsate-fwd-xl 8s ease infinite',
      },
      '.height-switch':{
        animation: 'height-switch .3s ease-in'
      }
    };

    addUtilities(utilities);
  }]
}


