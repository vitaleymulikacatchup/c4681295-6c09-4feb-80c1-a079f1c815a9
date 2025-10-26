/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'delray-teal': '#1a5f5f',
        'delray-dark-teal': '#0f4444',
        'delray-light-teal': '#2d7373',
        'delray-cream': '#f5f3f0',
        'delray-brown': '#8b4513',
        'delray-gold': '#d4af37'
      },
      fontFamily: {
        'serif': ['Georgia', 'Times New Roman', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif']
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      }
    },
  },
  plugins: [],
}