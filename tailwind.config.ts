import type { Config } from 'tailwindcss';

const plugin = require('tailwindcss/plugin');

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      dark: 'var(--color-dark)',
      'dark-lighter': 'var(--color-dark-lighter)',
      light: 'var(--color-light)',
      'light-darker': 'var(--color-light-darker)',
      accent: 'var(--color-accent)',
      success: 'var(--color-success)',
      error: 'var(--color-error)',
    },
  },
  plugins: [
    plugin(
      ({
        addVariant,
      }: {
        addVariant: (firstArgument: string, secondArgument: string) => void;
      }) => {
        addVariant('operational', '&.operational');
        addVariant('group-operational', ':merge(.group).operational &');
      },
    ),
  ],
};

export default config;
