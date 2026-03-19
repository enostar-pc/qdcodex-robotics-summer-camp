/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      colors: {
        brand: {
          50:  '#f0f0ff',
          100: '#e0e0fe',
          200: '#c4c4fd',
          300: '#a3a3fb',
          400: '#8080f8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        purple: {
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(168,85,247,0.15) 100%)',
        'cta-gradient': 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
        'glow-blue': 'radial-gradient(ellipse at center, rgba(99,102,241,0.3) 0%, transparent 70%)',
        'glow-purple': 'radial-gradient(ellipse at center, rgba(168,85,247,0.3) 0%, transparent 70%)',
        'qd-logo': "url('/qdlogo1.png')",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'spin-slow': 'spin 20s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(99,102,241,0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(168,85,247,0.8)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(99,102,241,0.4)',
        'glow': '0 0 30px rgba(99,102,241,0.5)',
        'glow-lg': '0 0 50px rgba(168,85,247,0.5)',
        'glow-purple': '0 0 30px rgba(168,85,247,0.6)',
        'card': '0 8px 32px rgba(0,0,0,0.3)',
        'card-hover': '0 16px 48px rgba(99,102,241,0.3)',
      },
    },
  },
  plugins: [],
}
