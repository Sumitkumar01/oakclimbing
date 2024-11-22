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
        primary: "#017A3A",
        secondary: "#1C1D21",
        dark: "#343434",
        normal: "#777777",
        bgLight: "#FCF9F2",
      },
    },
  },
  plugins: [],
};
export default config;
