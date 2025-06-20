/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'shooting-star-1': 'shootingStar1 3s ease-in-out infinite',
        'shooting-star-2': 'shootingStar2 4s ease-in-out infinite 1s',
        'shooting-star-3': 'shootingStar3 5s ease-in-out infinite 2s',
        'rocket-up': 'rocketUp 12s linear infinite',
        'rocket-diagonal': 'rocketDiagonal 15s linear infinite',
        'rocket-curve': 'rocketCurve 18s ease-in-out infinite',
        'rocket-hero': 'rocketHero 8s ease-in-out infinite',
        'rocket-orbit': 'rocketOrbit 20s linear infinite',
        'rocket-orbit-reverse': 'rocketOrbitReverse 25s linear infinite',
      },
      keyframes: {
        shootingStar1: {
          '0%': { transform: 'translateX(-100px) translateY(0px)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateX(100vw) translateY(-100px)', opacity: '0' },
        },
        shootingStar2: {
          '0%': { transform: 'translateX(-100px) translateY(0px)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateX(100vw) translateY(100px)', opacity: '0' },
        },
        shootingStar3: {
          '0%': { transform: 'translateX(100vw) translateY(0px)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateX(-100px) translateY(-100px)', opacity: '0' },
        },
        rocketUp: {
          '0%': { transform: 'translateY(100vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-100px) rotate(0deg)', opacity: '0' },
        },
        rocketDiagonal: {
          '0%': { transform: 'translate(-100px, 100vh) rotate(45deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translate(100vw, -100px) rotate(45deg)', opacity: '0' },
        },
        rocketCurve: {
          '0%': { transform: 'translate(0, 100vh) rotate(90deg)', opacity: '0' },
          '25%': { transform: 'translate(25vw, 50vh) rotate(45deg)', opacity: '1' },
          '50%': { transform: 'translate(50vw, 25vh) rotate(0deg)', opacity: '1' },
          '75%': { transform: 'translate(75vw, 50vh) rotate(-45deg)', opacity: '1' },
          '100%': { transform: 'translate(100vw, 100vh) rotate(-90deg)', opacity: '0' },
        },
        rocketHero: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        rocketOrbit: {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        },
        rocketOrbitReverse: {
          '0%': { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg) translateX(120px) rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};