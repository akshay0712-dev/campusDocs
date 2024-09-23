/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        instagram: {
          yellow: '#FCAF45',
          orange: '#F77737',
          pink: '#E1306C',
          purple: '#C13584',
          blue: '#833AB4',
        },
        linkedin: '#0A66C2',
        github: '#181717',
      },
      backgroundImage: {
        'instagram-gradient': 'linear-gradient(45deg, #FCAF45, #F77737, #E1306C, #C13584, #833AB4)',
      },
    },
  },
  plugins: [],
}
