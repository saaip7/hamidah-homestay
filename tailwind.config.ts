import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)", 
        'color-black': '#1D1D1D',
        'color-white': '#FFFFFF',
        'color-red': '#C33030',
        'color-gray': '#555555',
        'color-bg-red': '#FFF3F3',
        'color-stroke': '#E8E8E8'
      },
    },
  },
  plugins: [],
};
export default config;
