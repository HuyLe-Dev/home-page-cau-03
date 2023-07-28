/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        footer: "url('/src/img/network.jpg')",
        header:
          "url('https://reading-time.co.kr/resources/img/sub/sub_vis02.jpg')",
        post: "url('/src/img/bg-banner-shapes.jpg')",
      },
    },
  },
  plugins: [],
};
