import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a12",
        panel: "#0d0d17",
        deeper: "#060609",
        kyellow: "#fcee0a",
        kcyan: "#00f0ff",
        kmagenta: "#ff2a6d",
        kmuted: "#7a8597",
        ktext: "#e6e9ef",
      },
      fontFamily: {
        display: ["var(--font-orbitron)", "sans-serif"],
        heading: ["var(--font-rajdhani)", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.03em",
        wider: "0.08em",
        widest: "0.14em",
      },
    },
  },
  plugins: [],
};
export default config;
