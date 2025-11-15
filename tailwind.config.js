/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 🥃 白州蒸溜所の背景のような "クリーム + ほんのり緑"
        hakushu: "#F5F7EC",
        hakushu2: "#EEF4E2", // 少し緑を強くしたバリエーション
        hakushu_soft: "#F9F8EE", // クリーム寄りで柔らかい
      },
    },
  },
  plugins: [],
};
