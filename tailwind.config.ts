import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: { xl: "1140px" },
    },
    extend: {
      colors: {
        // Brand palette (flat keys used by 21st.dev / shadcn components)
        teal: "#0d7c7e",
        "teal-hover": "#096163",
        "teal-light": "#e0f4f4",
        ink: "#1b2537",
        "ink-soft": "#2e3f5c",
        amber: "#c2680a",
        "amber-bg": "#fef3e2",
        bg: "#f2f4f7",
        surface: "#ffffff",
        border: "#dde2eb",

        // Extended palette (nested, used by existing pages)
        "teal-ext": {
          DEFAULT: "#0d7c7e",
          hover: "#096163",
          light: "#e0f4f4",
          mid: "#b2e3e3",
        },
        "ink-ext": {
          DEFAULT: "#1b2537",
          soft: "#2e3f5c",
        },
        "amber-ext": {
          DEFAULT: "#c2680a",
          bg: "#fef3e2",
          border: "#fcd69a",
        },
        "site-bg": "#f2f4f7",
        muted: "#5a6a82",
        "text-light": "#8d9db5",
        blue: {
          DEFAULT: "#1a56a4",
          bg: "#deeafb",
        },
        green: {
          DEFAULT: "#16723d",
          bg: "#d4f1e3",
        },
        rose: {
          DEFAULT: "#b0264a",
          bg: "#fde4ec",
        },
        purple: {
          DEFAULT: "#5e3a9e",
          bg: "#ede8fb",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        base: ["15.5px", { lineHeight: "1.68" }],
      },
      borderRadius: {
        sm: "5px",
        DEFAULT: "10px",
        lg: "16px",
      },
      boxShadow: {
        xs: "0 1px 2px rgba(27,37,55,0.06)",
        sm: "0 2px 6px rgba(27,37,55,0.08)",
        DEFAULT: "0 4px 16px rgba(27,37,55,0.09)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "move-x": {
          from: { transform: "translateX(var(--move-x-from))" },
          to: { transform: "translateX(var(--move-x-to))" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
    },
  },
  plugins: [],
};

export default config;
