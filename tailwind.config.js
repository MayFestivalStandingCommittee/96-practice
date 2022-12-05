module.exports = {
  content: [
    "./app.vue", 
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}"
  ],
  theme: {
    extend: {
      
    },
  },
  plugins: [],
}

//わざわざstyleタグまでいかなくてもどのcssが聞いてるのかが一目でわかる。のでtailwindいれた