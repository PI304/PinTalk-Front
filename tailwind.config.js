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
    extend: {
      fontFamily: {
        Pretendard: ['Pretendard-Regular', 'sans-serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'custom-main': '#2F80ED',
        'custom-sub': '#D0DFFB',
        'custom-inactive': '#EEEEF2',
        'custom-bg': '#F8F8F8',
        'custom-bg-gradi1': '#F4F8FB',
        'custom-bg-gradi2': '#DDECFA',
        'custom-gradi': '#70A0E0',
        'custom-text1': '#404040',
        'custom-text2': '#4F4F4F',
        'custom-text3': '#626262',
        'custom-text4': '#7B7B7B',
        'custom-text5': '#A7A7A7',
        'custom-text6': '#B1B1B1',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
