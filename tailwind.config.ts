import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        judea: {
          gold: '#d97706',
          stone: '#44403c',
        }
      }
    },
  },
  plugins: [],
};
export default config;
