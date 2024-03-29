import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      rotate: {
        minus45: '-45deg',
      },
      colors: {
        'primary-dark': '#428DFF',
        'primary-light': '#0252CD',
        'secondary-dark': '#FFBE62',
        'morrent-background': '#416CEA',
        'morrent-button': '#5a89ff',
        'jobit-background': '#0BAB7C',
        'jobit-button': '#42bf9a',
        'portfolio-background': '#ec8d52',
        'portfolio-button': '#ffae58',
        'hipnode-background': '#1e252b',
        'hipnode-button': '#ff571a',
        'white-900': '#FFFFFF',
        'white-800': '#F3F8FF',
        'white-500': '#6F74A7',
        'black-400': '#778295',
        'black-300': '#192333',
        'black-200': '#151E2C',
        'line-gray': 'rgba(255,255,255,0.5)',
        'line-black': 'rgba(21,30,44,0.4)',
        'heading-red': '#E15A46',
        'heading-green': '#02BC7D',
        'input-border': '#CCE1FF',
        'error-background': '#f3f4f6',
      },
      boxShadow: {
        cardShadow: '-25px 47px 66px 0px',
        cardShadowSmall: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
        cardShadowLarge: '3px 7px 7px 2px rgba(0, 0, 0, 0.5)',
        cardShadowSmallBlue: '6px 3px 10px 0px rgba(2, 82, 205, 0.25)',
        cardShadowLargeBlue: '3px 7px 7px 2px rgba(2, 82, 205, 0.25)',
        cardShadowLargeWhite: '3px 7px 7px 2px #F3F8FF',
      },
      screens: {
        vs: '355px',
        s: '450px',
        plusLarge: '1120px',
        l: '1452px',
        xlPlus: '1800px',
      },
      backgroundImage: {
        BGLarge: "url('/assets-png/BGPatternLarge.png')",
        BGSmall: "url('/assets-png/BGPatternSmall.png')",
      },
      spacing: {
        '4.5': '1.125rem',
      },
    },
  },
  darkMode: ['class'],
  plugins: [nextui()],
};

export default config;
