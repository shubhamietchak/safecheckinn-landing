/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        apple: {
          bg: '#000000',
          card: '#0e0e11',
          cardBorder: 'rgba(255, 255, 255, 0.08)',
          cardHover: '#16161a',
          accent: '#2997ff',
          accentGlow: 'rgba(41, 151, 255, 0.35)',
          emerald: '#30d158',
          textMuted: '#86868b',
          gold: '#ffd60a'
        }
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "San Francisco",
          "SF Pro Display",
          "SF Pro Text",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif"
        ]
      },
      animation: {
        'scan': 'scan 2.5s ease-in-out infinite alternate',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
        'glow': 'glow 4s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s infinite linear'
      },
      keyframes: {
        scan: {
          '0%': { top: '8%', opacity: '0.9' },
          '50%': { opacity: '1' },
          '100%': { top: '88%', opacity: '0.9' }
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(0.98)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 20px rgba(41, 151, 255, 0.25))' },
          '100%': { filter: 'drop-shadow(0 0 50px rgba(41, 151, 255, 0.65))' }
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' }
        }
      }
    },
  },
  plugins: [],
}
