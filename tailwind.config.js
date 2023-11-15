/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: 'Montserrat',
        obidee: 'Odibee Sans',
        lobster: 'Lobster Two',
      },
      colors: {
        night: '#141115',
        aqua: '#B5FED9',
        yellow: '#F3D34A',
        verdigris: '#41BEBE',
      },
      fontWeight: {
        bolder: '5000',
      },
      backgroundImage: {
        'thai-food': 'url("/thai-food.jpg")',
        'typing-robot': 'url("/typing-robot.jpg")',
      },
    },
  },
  plugins: [],
};
