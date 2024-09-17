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
      white: {
        transparent: "var(--white-transparent)",
        15: "var(--white-15)",
        DEFAULT: "var(--white)",
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
      frame: "var(--frame-bg)",
    },

    // gradient bg color
    backgroundImage: {
      "gradient-primary": "var(--gradient-primary)",
      "gradient-primary-reverse": "var(--gradient-primary-reverse)",
      "gradient-primary-light": "var(--gradient-primary-light)",
      "gradient-secondary": "var(--gradient-secondary)",
      "gradient-secondary-reverse": "var(--gradient-secondary-reverse)",
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
    extend: {},
  },
  plugins: [],
};
export default config;
