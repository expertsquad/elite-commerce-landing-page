import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        light: "var(--primary-light)",
        DEFAULT: "var(--primary)",
      },
      secondary: {
        light: "var(--secondary-light)",
        DEFAULT: "var(--secondary)",
      },
      blue: {
        DEFAULT: "var(--blue)",
        light: "var(--blue-light)",
      },
      violet: {
        DEFAULT: "var(--violet)",
        light: "var(--violet-light)",
      },
      white: {
        transparent: "var(--white-transparent)",
        15: "var(--white-15)",
        DEFAULT: "var(--white)",
      },
      red: {
        DEFAULT: "var(--red)",
        light: "var(--red-light)",
      },
      yellow: {
        DEFAULT: "var(--yellow)",
        light: "var(--yellow-light)",
      },
      black: {
        transparent: "var(--black-transparent)",
        10: "var(--black-10)",
        15: "var(--black-15)",
        30: "var(--black-30)",
        50: "var(--black-50)",
        70: "var(--black-70)",
        80: "var(--black-80)",
        DEFAULT: "var(--black)",
      },
      transparent: "var(--transparent)",
    },

    // gradient bg color
    backgroundImage: {
      "gradient-primary": "var(--gradient-primary)",
      "gradient-primary-reverse": "var(--gradient-primary-reverse)",
      "gradient-primary-light": "var(--gradient-primary-light)",
      "gradient-secondary": "var(--gradient-secondary)",
      "gradient-secondary-light": "var(--gradient-secondary-light)",
      "gradient-positive": "var(--gradient-positive)",
      "gradient-positive-light": "var(--gradient-positive-light)",
      "gradient-danger-light": "var(--gradient-danger-light)",
      "gradient-warning-light": "var(--gradient-warning-light)",
      "gradient-purple-light": "var(--gradient-purple-light)",
      "gradient-blue-light": "var(--gradient-blue-light)",
    },
    // z index
    zIndex: {
      "-1": "-1",
      0: "0",
      1: "1",
      10: "10",
      20: "20",
      50: "50",
    },
    boxShadow: {
      "custom-technology": "0px 4px 15px rgba(0, 0, 0, 0.06)",
      "get-help-form-shadow": "0px 4.29697px 21.4849px rgba(0, 0, 0, 0.1)",
      "button-shadow": "0px 0px 20px rgba(0, 0, 0, 0.2)",
    },
    extend: {
      animation: {
        pulseColor: "pulseColor 5s infinite",
        "serviceloop-scroll": "serviceloop-scroll 40s linear infinite",
        "loop-scroll": "loop-scroll 60s linear infinite",
        "right-scroll": "right-scroll 40s linear infinite",
        "left-scroll": "left-scroll 20s linear infinite",
        "right-Slow-scroll": "right-Slow-scroll 30s linear infinite",
        "four-scroll": "four-scroll 30s linear infinite",
        moveAndSpin: "moveAndSpin 65s ease-in-out infinite",
      },
      keyframes: {
        moveAndSpin: {
          "0%": { transform: "translate(0, 0) rotate(360deg)" }, // Start at top-left
          "12.5%": { transform: "translate(200px, 120px) rotateX(360deg)" }, // Top-right
          "25%": { transform: "translate(200px, 200px) rotate(-360deg)" }, // Bottom-right
          "37.5%": { transform: "translate(0, 100px) rotate(360deg)" }, // Bottom-left
          "45.5%": { transform: "translate(190px, 100px) rotate(280deg)" }, // Bottom-left
          "50%": { transform: "translate(0, 0) rotate(360deg)" }, // Back to top-left
          "62.5%": { transform: "translate(120px, 200px) rotate(-360deg)" }, // Cross to center
          "75%": { transform: "translate(100px, 100px) rotate(360deg)" }, // Cross to bottom-right
          "87.5%": { transform: "translate(0, 0) rotate(315deg)" }, // Cross to top-left
          "100%": { transform: "translate(0, 0) rotate(360deg)" }, // Return to start
        },
        "serviceloop-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "loop-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "right-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        "right-Slow-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "left-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "four-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        pulseColor: {
          "0%, 100%": { backgroundColor: "#D9D9D9" }, // Default color
          "50%": { backgroundColor: "#FF0000" }, // The color change in the middle of the animation
        },
      },
    },
    variants: {
      extend: {
        backdropFilter: ["responsive"],
      },
    },
  },
  plugins: [require("tailwindcss-filters")],
};
export default config;
