import themePlugin from "@digital-go-jp/tailwind-theme-plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // もし独自に色を上書きしたい場合はここに追加
        'digital-blue': '#004ea1',
        'digital-blue-hover': '#0061d5',
      },
    },
  },
  plugins: [themePlugin],
};
