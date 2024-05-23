/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gold: "#928652",
        blue: "#001844",
        "gold-3": "#d3ceb9",
        black: "#000",
        darkslategray: {
          100: "#333",
          200: "rgba(51, 51, 51, 0.09)",
        },
        "light-grey": "#f4f4f4",
        gainsboro: {
          100: "#e5e7eb",
          200: "#e6e6e6",
          300: "#dbdbdb",
          400: "rgba(230, 230, 230, 0.09)",
        },
        steelblue: {
          100: "#334a78",
          200: "rgba(51, 74, 120, 0.09)",
        },
        "gold-2": "#442c00",
        darkolivegreen: {
          100: "#8a7847",
          200: "#786e38",
          300: "#785e33",
        },
        gray: "rgba(255, 255, 255, 0)",
        brown: "rgba(137, 26, 26, 0)",
        tan: "#a29061",
        lightgray: "#cccfd1",
        crimson: "#ef4444",
        mediumspringgreen: "#22c55e",
        whitesmoke: "#eee",
      },
      spacing: {
        "globals-deskop-width": "1440px",
      },
      fontFamily: {
        "text-small-link": "Roboto",
        paragraph: "Play",
        h3: "'Major Mono Display'",
        btn: "'Nunito Sans'",
        quicksand: "Quicksand",
        consolas: "Consolas",
      },
      borderRadius: {
        "6xl": "25px",
        xl: "20px",
        "3xs": "10px",
        "9980xl": "9999px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      lg: "18px",
      "9xl": "28px",
      "3xl": "22px",
      "29xl": "48px",
      "19xl": "38px",
      "10xl": "29px",
      xl: "20px",
      "37xl": "56px",
      "26xl": "45px",
      "15xl": "34px",
      smi: "13px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  plugins: [],
};
