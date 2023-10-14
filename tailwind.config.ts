import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        darkestBlue: "rgb(4, 54, 74)",
        darkBlue: "rgb(23, 107, 135)",
        skyBlue: "rgb(100, 204, 197)",
        whiteBlue: "rgb(218, 255, 251)"
      },
      fontFamily: {
        notosans: ['var(--font-noto-sans)'],
      },
    },
  },
  plugins: [],
}
export default config
