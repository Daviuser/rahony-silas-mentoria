import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#04141c", deep: "#0a2530", teal: "#16586b",
        burn: "#e8743b", copper: "#b8693a", amber: "#f0a050",
        warm: "#f6ede4", mute: "#9fb3ba", rust: "#a24f1f",
      },
      fontFamily: { sans: ["var(--font-manrope)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
