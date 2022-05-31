module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#9df2d1",
          "secondary": "#4bf24b",
          "accent": "#4579c1",
          "neutral": "#24233E",
          "base-100": "#35313A",
          "info": "#A2D4F1",
          "success": "#18AF75",
          "warning": "#BA8003",
          "error": "#F57091",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
