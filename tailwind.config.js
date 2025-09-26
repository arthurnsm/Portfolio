/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. Onde o Tailwind vai procurar por classes no seu projeto
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  
  // 2. Extensões e configurações personalizadas
  theme: {
    extend: {
      // Cores personalizadas
      colors: {
        'dark-bg': '#121212',
        'purple-neon': '#9B51E0',
      },

      // Animações
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'fade-in-up': 'fadeInUp 1s ease-out',
      },
      
      // Keyframes (como a animação se comporta)
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  
  // 3. Plugins adicionais
  plugins: [
    require('tailwindcss-animation-delay'),
  ],
}