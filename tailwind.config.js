/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-900': '#044E54',
        'primary-800': '#0A6C74',
        'primary-700': '#0E7C86',
        'primary-600': '#14919B',
        'primary-500': '#2CB1BC',
        'primary-400': '#38BEC9',
        'primary-300': '#54D1DB',
        'primary-200': '#87EAF2',
        'primary-100': '#BEF8FD',
        'primary-50':  '#E0FCFF',
        'neutral-900': '#102A43',
        'neutral-800': '#243B53',
        'neutral-700': '#334E68',
        'neutral-600': '#486581',
        'neutral-500': '#627D98',
        'neutral-400': '#829AB1',
        'neutral-300': '#9FB3C8',
        'neutral-200': '#BCCCDC',
        'neutral-100': '#D9E2EC',
        'neutral-50':  '#F0F4F8',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
