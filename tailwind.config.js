/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          "100%": { transform: "translateX(100%)" }, //요소를 오른쪽으로 100% 이동하겠다
        },
      },
      animation: { shimmer: "shimmer 1.5s infinite" }, //해당 요소를 왼쪽 > 오른쪽 이동하고 반복하는데 1.5초 소요
    },
  },
  plugins: [],
};
