/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jungle: {
          950: '#060c09',
          900: '#09130e',
          850: '#0c1a13',
          800: '#102219',
          700: '#162e22',
          600: '#1e3d2e',
        },
        templeGold: {
          200: '#fae8c8',
          300: '#f0d199',
          400: '#e5b869',
          500: '#d4a359',
          600: '#b8863b',
          700: '#946626',
        },
        cream: {
          50: '#FAF8F5',
          100: '#F5F2EB',
          200: '#EBE5D8',
          300: '#DED5C0',
        },
        onyx: {
          900: '#08080A',
          800: '#0E0F12',
          700: '#15171C',
          600: '#1E2128',
        },
        thaiGold: '#E5B869',
        brazilEmerald: '#10B981',
      },
      fontFamily: {
        cinzel: ['"Cinzel"', 'serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        display: ['"Syne"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Geist Mono"', 'monospace'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.9' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseSlow: 'pulseSlow 4s ease-in-out infinite',
        shimmer: 'shimmer 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
