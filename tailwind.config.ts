import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        black: '#000000',
        white1: '#ffffff',
        black1: '#172123',
        black2: '#121017',
        blackBlur: 'rgba(0, 0, 0, 0.5)',
        neutral1: '#FFFFFF',
        neutral2: '#F9FAFB',
        neutral3: '#E5E7EB',
        neutral4: '#C4C9D3',
        neutral5: '#6B7280',
        neutral7: '#374151',
        neutral8: '#374151',
        neutral9: '#111827',
        darkBlue: '#0F0A32',
        primary5: '#597EF7',

        purple1: '#DED2F5',
        purple2: '#A978B2',
        characterDown: '#F759AB',
        characterBackground1: '#0C111D',
        characterBackground2: '#1F242F',
        characterBackground3: '#171C27',
        characterUpcoming: '#294B86',

        brandColorTertiary: '#50E796',
        error2: '#FF4D4F',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        roc: ['var(--font-roc)', 'sans-serif'],
      },
      backgroundImage: {
        registerButton:
          'radial-gradient(143.26% 97.73% at 50% 2.27%, rgba(29, 15, 64, 0.00) 0%, rgba(147, 34, 165, 0.63) 100%)',
        ensofiUnique:
          'radial-gradient(145.08% 125.15% at 3.89% 1.72%, rgba(133, 82, 204, 0.11) 0%, rgba(133, 82, 204, 0.00) 100%), linear-gradient(132deg, rgba(255, 255, 255, 0.08) 8.3%, rgba(232, 232, 232, 0.08) 24.86%, rgba(153, 153, 153, 0.00) 100%)',
        ensofiUniqueWrapper:
          'radial-gradient(145.08% 125.15% at 3.89% 1.72%, rgba(133,82,204,0.5) 0%, rgba(133, 82, 204, 0.00) 100%), linear-gradient(132deg, rgba(255, 255, 255, 0.3) 8.3%, rgba(232, 232, 232, 0.2) 24.86%, rgba(153, 153, 153, 0.00) 100%)',
        dividerBg:
          'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(176,125,246,1) 50%, rgba(255,255,255,0) 100%)',
        claimButton:
          'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%);',
        crossChain:
          'linear-gradient(180deg, rgba(169, 163, 194, 0.2) 0%, rgba(169, 163, 194, 0.047) 100%);',
      },
      boxShadow: {
        shadowHeader: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        shadowClaimButton: '0px 3px 20px 0px #A44FD466',
      },
      keyframes: {
        popUp: {
          from: {
            opacity: '0',
            transform: 'translate(-50%, -48%) scale(0.96)',
          },
          to: {
            opacity: '1',
            transform: 'translate(-50%, -50%) scale(1)',
          },
        },
        fadeIn: {
          from: {
            opacity: '0',
          },

          to: {
            opacity: '1',
          },
        },
        revealUp: {
          from: {
            opacity: '0',
            transform: 'translatey(-10%)',
          },

          to: {
            opacity: '1',
            transform: 'translatey(0%)',
          },
        },
        revealLeft: {
          from: {
            opacity: '0',
            transform: 'translatex(-35%)',
          },

          to: {
            opacity: '1',
            transform: 'translatex(0%)',
          },
        },

        revealRight: {
          from: {
            opacity: '0',
            transform: 'translatex(35%)',
          },

          to: {
            opacity: '1',
            transform: 'translatex(0%)',
          },
        },

        slide: {
          '0%': { transform: 'translateX(calc(0% - 50px))' },
          '100%': { transform: 'translateX(calc(-220%))' },
        },
      },
      animation: {
        fadeIn: '3s fadeIn ease',
        revealUp: '1.5s revealUp ease',
        hovering: 'hovering 3s infinite',
        revealLeft: '1.5s revealLeft ease',
        revealRight: '1.5s revealRight ease',
        slide: 'slide 20s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
