import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-space)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      colors: {
        accent: {
          DEFAULT: '#00D8A4',
          dark: '#00B389',
        },
        surface: {
          DEFAULT: '#0D1117',
          card: '#161B22',
          border: '#30363D',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scroll-progress': 'scroll-progress linear',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0,216,164,0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(0,216,164,0.7)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
