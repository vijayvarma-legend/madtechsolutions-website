/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Brand blue palette — matches logo
        blue: {
          DEFAULT: '#2563EB',
          light: '#60A5FA',
          bright: '#3B82F6',
          dark: '#1D4ED8',
          deeper: '#1E3A8A',
          muted: 'rgba(37,99,235,0.15)',
          glow: 'rgba(96,165,250,0.2)',
        },
        navy: {
          DEFAULT: '#0D1B3E',
          light: '#162040',
          deep: '#080F20',
        },
        // Keep gold as accent for subtle warmth
        gold: {
          DEFAULT: '#C9A85D',
          light: '#E8C87A',
          dark: '#9E7A30',
          muted: 'rgba(201,168,93,0.1)',
        },
        surface: {
          0: '#030508',
          1: '#080d14',
          2: '#0d1520',
          3: '#121d2b',
          4: '#1a2535',
        },
      },
      fontSize: {
        display: ['clamp(3.5rem, 9vw, 7.5rem)', { lineHeight: '0.9', letterSpacing: '-0.04em', fontWeight: '900' }],
        h1: ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1', letterSpacing: '-0.03em', fontWeight: '800' }],
        h2: ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.05', letterSpacing: '-0.025em', fontWeight: '700' }],
        h3: ['clamp(1.4rem, 2.5vw, 2rem)', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'brand-gradient': 'linear-gradient(135deg, #60A5FA 0%, #2563EB 50%, #1D4ED8 100%)',
        'brand-gradient-h': 'linear-gradient(90deg, #1D4ED8 0%, #2563EB 50%, #60A5FA 100%)',
        'surface-gradient': 'linear-gradient(180deg, #030508 0%, #080d14 100%)',
      },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0%)' }, '100%': { transform: 'translateX(-50%)' } },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'pulse-blue': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(37,99,235,0.4)' },
          '50%': { boxShadow: '0 0 0 8px rgba(37,99,235,0)' },
        },
        'glow-line': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(400%)' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 4s linear infinite',
        'pulse-blue': 'pulse-blue 2s ease-in-out infinite',
        'glow-line': 'glow-line 3s ease-in-out infinite',
      },
      boxShadow: {
        blue: '0 0 40px rgba(37,99,235,0.25)',
        'blue-sm': '0 0 20px rgba(37,99,235,0.15)',
        'blue-lg': '0 0 80px rgba(37,99,235,0.2)',
        'card-hover': '0 20px 60px rgba(0,0,0,0.6)',
        glow: '0 0 80px rgba(37,99,235,0.1)',
        'inner-blue': 'inset 0 1px 0 rgba(96,165,250,0.1)',
      },
    },
  },
  plugins: [],
}
