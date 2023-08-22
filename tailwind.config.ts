import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      background: '#222222',
      text: '#faebd7',
      accent: '#ffed50',
      succes: '#68ff77',
      error: '#ff5a5a',
    },
  },
  plugins: [],
};
export default config;
