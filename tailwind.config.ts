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
      },
      boxShadow: {
        '3xl': 'box-shadow: 0px 0px 4px 0px #89E2FF33;',
      },
      fontFamily: {
        mainFont: "var(--font-earth-orbiter)",
        secondaryFont: "var(--secondaryFont)",
        // inputFont:'var(----inputFont)',
      },
    },
  },
  plugins: [],
};
export default config;
