import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1400px',
          xl: '1140px',
          lg: '960px',
          md: '768px',
          sm: '640px',
          xs: '480px',
        },
      },colors: {
        background: '#070708',
        'background-secondary': '#131316',
        'background-tertiary': '#1C1C1C',
        'txt': '#62646C',
        foreground: '#E4E4E6',
        'txt-secondary': '#AFB0B6',
        'txt-tertiary': '#D6D0FB',
        btn: '#4A2BED',
        'accordion-txt': '#797C86',
      },
    },
  },
  plugins: [],
};
export default config;
