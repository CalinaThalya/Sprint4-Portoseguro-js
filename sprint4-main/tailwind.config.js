/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'rgb-190-190-202': 'rgb(190, 190, 202)',
      },
      padding: {
        '2.7': '0.675rem',
        '2.8': '0.685rem',
      },
    },
  },
  plugins: [],
}
