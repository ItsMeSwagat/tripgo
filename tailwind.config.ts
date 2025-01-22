import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "767px",
      lg: "1023px",
      xl: "1279px",
      dxl: "1440px",
      ddxl: "1600px",
    },
    extend: {
      colors: {
        primary: {
          hover: "#E64251",
          DEFAULT: "#FD4C5C",
        },
        secondary: {
          hover: "#05977C",
          DEFAULT: "#00BB98",
        },
        white: {
          DEFAULT: "#FFFFFF",
        },
        text: "#444444",
        accent: "#111B19",
        light: "#999999",
        border: "#E6E6E6",
        bg1: "#F5F5F5",
        bg2: "#F2FBFA",
        bg3: "#1A1A3D",
        red: "#982E37",
        green: "#3BC1B1",
        blue: "#008DD0",
        yellow: "#008DD0",
      },
      fontFamily: {
        "hk-grotesk": ["var(--font-grotesk)"],
        "la-bella": ["var(--font-labella)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
