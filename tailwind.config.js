/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.stories.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0045F8', //#EA3C12
        'primary-hover': '#1160DA',
        black: '#111322',
        'gray-50': '#7d7986',
        'gray-40': '#a4a1aa',
        'gray-30': '#cbc9cf',
        'gray-20': '#e5e4e7',
        'gray-10': '#f2f2f3',
        'gray-5': '#fafafa',
        white: '#ffffff',
        'red-40': '#1268EA', //#FF4040
        'red-30': '#F3F9FF', //#FF8D72
        'red-20': '#ECEFFF', //#FFAF9B
        'red-10': '#F1F6FF', //#FFEBE7
        'blue-20': '#0080FF',
        'blue-10': '#CCE6FF',
        'green-20': '#20A81E',
        'green-10': '#D4F7D4',
        kakao: '#FEE500',
      },
      boxShadow: {
        'modal-box': '0px 2px 8px 0px rgba(120, 116, 134, 0.25)',
      },
    },
  },
  plugins: [],
};
