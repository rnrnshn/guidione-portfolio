import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        'custom': '0.765101 / 1',
      },
      fontFamily: {
        sans: ['var(--font-inter_tight)'],
        serif: ['var(--font-baskervville)'],
      },
      gridTemplateColumns: {
        'header-title': '12% 1fr 12%',
      }
    },
  },
  plugins: [],
};
export default config;
