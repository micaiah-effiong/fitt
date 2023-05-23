/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sora: [
          'Sora-Bold',
          'Sora-ExtraBold',
          'Sora-ExtraLight',
          'Sora-Light',
          'Sora-Medium',
          'Sora-Regular',
          'Sora-SemiBold',
          'Sora-Thin',
        ],
      },
    },
  },
  variants: {},
};
