// THIS `.ts` FILE IS USED FOR SYNTAX HIGHLIGHTING PURPOSES ONLY
// THE FILE WHICH IS USED BY TAILWIND IS `tailwind.config.js`
// TRY MANTAIN THIS AND `tailwind.config.js` IN SYNC

import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: {
        100: '#B24F53',
        200: '#A8393D',
        300: '#9f2428',
        400: '#8F2024',
        500: '#7F1C20',
      },
      secondary: {
        100: '#D3D2D3',
        200: '#A7A7A6',
        300: '#787879',
        400: '#4C4C4D',
        500: '#202020',
      },
      auxiliary: {
        brick: '#D03B42',
        sunglow: '#FFC935',
      },
      black: '#202020',
      white: '#FFFFFF',
      gray: {
        100: '#EEEEEE',
        200: '#D2D2D2',
        300: '#A6A6A6',
        400: '#797979',
        500: '#4D4D4D',
      },
    },
    fontFamily: {
      outfit: ['var(--font-outfit)', 'sans'],
    },
    fontSize: {
      h1: ['96px', {
        lineHeight: '120px',
        fontWeight: '400',
      }],
      h2: ['60px', {
        lineHeight: '75px',
        fontWeight: '600',
      }],
      h3: ['48px', {
        lineHeight: '60px',
        fontWeight: '600',
      }],
      h4: ['34px', {
        lineHeight: '43px',
        fontWeight: '400',
      }],
      h5: ['24px', {
        lineHeight: '30px',
        fontWeight: '400',
      }],
      h6: ['20px', {
        lineHeight: '25px',
        fontWeight: '600',
      }],
      subtitle1: ['16px', {
        lineHeight: '20px',
        fontWeight: '400',
      }],
      subtitle2: ['14px', {
        lineHeight: '17px',
        fontWeight: '600',
      }],
      body1: ['16px', {
        lineHeight: '20px',
        fontWeight: '400',
      }],
      body2: ['14px', {
        lineHeight: '17px',
        fontWeight: '400',
      }],
      action: ['17px', {
        lineHeight: '17px',
        fontWeight: '600',
      }],
      caption: ['12px', {
        lineHeight: '15px',
        fontWeight: '400',
      }],
      tag: ['10px', {
        lineHeight: '12px',
        fontWeight: '600',
      }],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'text-slide': 'text-slide 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        'img-loading': 'img-loading 0.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
      },
      keyframes: {
        'img-loading': {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        'text-slide': {
          '-10%, 38%': {
            transform: 'translateY(-10%)',
          },
          '38%, 72%': {
            transform: 'translateY(-38%)',
          },
          '72%, 100%': {
            transform: 'translateY(-72%)',
          },
          '100%': {
            transform: 'translateY(0%)',
          },
        },
      },
    },
  },
  plugins: [
    // require('tailwind-scrollbar'),
  ],
};
export default config;
