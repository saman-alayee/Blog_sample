import type { Config } from 'tailwindcss'
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        fadeInItem: "fadeInItem 1s ease-in-out",
        fadeOpenSearchBar: "fadeOpenSearchBar 0.25s ease-in-out",
        CloseSearchBar: "CloseSearchBar 0.25s ease-in-out"
      },
      keyframes: {
        fadeIn: {
          '0%': { height: '0' },
          '100%': { height: '4rem' },
        },
        fadeInItem: {
          '0%': { opacity: '0' },
          '100%': { opacity: '100' },
        },
        fadeOpenSearchBar: {
          '0%': { width: '0' },
          '100%': { width: '12rem' },
        },
        CloseSearchBar: {
          '0%': { width: 'full' },
          '100%': { width: '0' },
        }
      },
      colors: {
        darkestBlue: "rgb(4, 54, 74)",
        darkBlue: "rgb(23, 107, 135)",
        skyBlue: "rgb(100, 204, 197)",
        whiteBlue: "rgb(218, 255, 251)"
      },
      fontFamily: {
        splinesans: ['var(--font-spline-sans)'],
      },
    },
  },
  plugins: [nextui()],
  darkMode: "class",
}
export default config

