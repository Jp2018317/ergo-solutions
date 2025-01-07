/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: [],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        'xs': '375px',
        '2xl': '1400px',
      },
    },
    colors: {
      primary: {
        100: '#B24F53',
        200: '#A8393D',
        300: '#9f2428',
        400: '#8F2024',
        500: '#7F1C20',
      },
      secondary: {
        100: '#4c4c4c',
        200: '#363636',
        300: '#202020',
        400: '#1c1c1c',
        500: '#191919',
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
      h1: ['86px', {
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
      action: ['16px', {
        lineHeight: '27px',
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
        'xmark-light': 'url(/public/xmark-white.svg)',
        'xmark-dark': 'url(/public/xmark-dark.svg)',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'img-loading': {
          '100%': {
            transform: 'translateX(100%) translateY(100%)',
          },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
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
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'text-slide': 'text-slide 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        'img-loading': 'img-loading 1.8s infinite',
      },

    },
  },
  // eslint-disable-next-line global-require
  plugins: [
    require('tailwindcss-animate'),
    require('tailwindcss/plugin')(({ addVariant }) => {
      addVariant('search-cancel', '&::-webkit-search-cancel-button');
    }),
  ],
};
