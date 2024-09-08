/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        // menu-hight
        '53': '53px', // 사용자 정의 높이 값 추가
      },
      boxShadow: {
        'custom-lg': '0px 0px 5px rgba(0, 0, 0, 0.25)', // 투명도를 추가한 그림자
      },
    },
  },
  plugins: [],
}

