/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontWeight: {
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    extend: {
      fontFamily: {
        PretendardRegular: ['Pretendard-Regular', 'sans-serif'],
        PretendardMedium: ['Pretendard-Medium', 'sans-serif'],
        PretendardSemibold: ['Pretendard-SemiBold', 'sans-serif'],
        PretendardBold: ['Pretendard-Bold', 'sans-serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        10: '0.625rem',
        11: '0.688rem',
        12: '0.75rem',
        13: '0.813rem',
        14: '0.875rem',
        15: '0.938rem',
        16: '1rem',
        17: '1.063rem',
        18: '1.125rem',
        19: '1.188rem',
        20: '1.25rem',
        21: '1.313rem',
        22: '1.375rem',
        23: '1.438rem',
        24: '1.5rem',
        25: '1.563rem',
        26: '1.625rem',
        27: '1.688rem',
        28: '1.75rem',
        29: '1.813rem',
        30: '1.875rem',
        31: '1.938rem',
        32: '2rem',
        33: '2.063rem',
        34: '2.125rem',
        35: '2.188rem',
        36: '2.25rem',
        37: '2.313rem',
        38: '2.375rem',
        39: '2.438rem',
        40: '2.5rem',
        44: '2.75rem',
        48: '3rem',
        60: '3.75rem',
        64: '4rem',
        72: '4.5rem',
        80: '5rem',
      },
      colors: {
        border: { 1: '#DDDDDD', 2: '#CAD2E7' },
        blue: {
          main: '#2F80ED',
          deep: '#1E71E1',
          sub: '#D0DFFB',
          sub2: '#EDF1F8',
          chat: '#DEE4F3',
          icon: '#7CB4FF',
        },
        custom_red: '#EB5757',
        red_sub: '#FCE4E4',
        BG: {
          1: '#F8F8F8',
          2: '#F3F5FA',
          3: '#64799E',
          4: '#FBFBFC',
          navy: '#1C253A',
          inactive: '#EEEEF2',
        },
        gradi: {
          1: '#F4F8FB',
          2: '#DDECFA',
          3: '#70A0E0',
        },
        text: {
          1: '#404040',
          2: '#4F4F4F',
          3: '#626262',
          4: '#7B7B7B',
          5: '#A7A7A7',
          6: '#B1B1B1',
        },
      },
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(47.92% 71.28% at 27.45% 52.08%,var(--tw-gradient-stops))',
        'gradient-custom':
          'linear-gradient(28.48deg, #2F80ED 30.84%, #2F80ED 30.85%, #70A0E0 114.81%)',
      },
    },
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
      'sm-min': '640px',
      // => @media (min-width: 640px) { ... }

      'md-min': '768px',
      // => @media (min-width: 768px) { ... }

      'lg-min': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl-min': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl-min': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    boxShadow: {
      custom: '0 0px 8px 15px rgba(231, 236, 242, 0.5)',
      custom2: '0px 4px 30px rgba(193, 200, 214, 0.5)',
      admin: '0px 3px 15px rgba(122, 145, 172, 0.25)',
      profile: '0px 8px 15px rgba(186, 186, 186, 0.1)',
      chat: '0px 4px 30px rgba(193, 200, 214, 0.5)',
      chat2: '0px 3.67268px 27.5451px rgba(193, 200, 214, 0.5)',
      admin: '0px 4px 30px rgba(2, 47, 107, 0.35)',
      message: '2px 7px 15px rgba(231, 234, 238, 0.85)',
      search: '0px -3px 25px rgba(122, 145, 172, 0.25)',
    },
  },
  plugins: [],
};
