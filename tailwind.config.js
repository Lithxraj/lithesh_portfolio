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
        dark: {
          950: '#030712',
          900: '#090d16',
          850: '#0f172a',
          800: '#1e293b',
          700: '#334155',
        },
        electric: {
          blue: '#00d2ff',
          neon: '#00f0ff',
          glow: '#3a86ff',
          deep: '#0066cc',
        },
        cyber: {
          purple: '#8a2be2',
          cyan: '#00f5d4',
          accent: '#38bdf8',
          emerald: '#10b981',
        }
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'spin-slow': 'spin 22s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(1deg)' },
        }
      },
      boxShadow: {
        'glow-blue': '0 0 30px -5px rgba(0, 210, 255, 0.35)',
        'glow-cyan': '0 0 35px 2px rgba(0, 240, 255, 0.45)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.4)',
      }
    },
  },
  plugins: [],
}
