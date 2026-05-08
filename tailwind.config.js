export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#8b5cf6',
        neon: '#00f5ff',
        dark: '#050816',
        panel: '#111827'
      },
      boxShadow: {
        neon: '0 0 25px rgba(0,245,255,.45)',
        purple: '0 0 30px rgba(139,92,246,.45)'
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 2s infinite',
        gradient: 'gradient 10s ease infinite'
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        pulseGlow: {
          '0%,100%': { boxShadow: '0 0 10px rgba(0,245,255,.3)' },
          '50%': { boxShadow: '0 0 25px rgba(0,245,255,.9)' }
        },
        gradient: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        }
      }
    }
  },
  plugins: []
}
