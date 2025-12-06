/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0f1014', // var(--bg-color)
        card: '#1a1c23', // var(--card-bg)
        sub: '#94a3b8', // var(--text-sub)
        accent: {
          DEFAULT: '#00DC82', // var(--accent-color)
          glow: 'rgba(0, 220, 130, 0.4)',
        },
        border: '#2d3748',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-fira)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
