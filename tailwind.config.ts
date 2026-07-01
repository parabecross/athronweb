import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(0 0% 4%)",
        foreground: "hsl(0 0% 98%)",
        card: "hsl(0 0% 7%)",
        secondary: "hsl(0 0% 12%)",
        muted: {
          DEFAULT: "hsl(0 0% 14%)",
          foreground: "hsl(0 0% 60%)",
        },
        border: "hsl(0 0% 16%)",
        primary: {
          DEFAULT: "hsl(14 100% 50%)",
          foreground: "#fafafa",
        },
        accent: {
          DEFAULT: "hsl(24 95% 53%)",
          foreground: "#fafafa",
        },
        destructive: "hsl(0 72% 51%)",
        brand: {
          orange: "#f97316",
          "orange-dark": "#ea580c",
          red: "#ef4444",
        },
      },
      borderRadius: {
        lg: "0.75rem",
        md: "calc(0.75rem - 2px)",
        sm: "calc(0.75rem - 4px)",
      },
      boxShadow: {
        "glow-primary": "0 0 40px hsl(14 100% 50% / 0.25)",
        "glow-primary-lg": "0 0 80px hsl(14 100% 50% / 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
