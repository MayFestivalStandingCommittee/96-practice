// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: "node"
  },
  modules: ["@nuxtjs/tailwindcss"],
  // buildModules: ['@nuxtjs/tailwindcss'], // <= コメントアウト
  css: ["@/assets/styles/tailwind.css", "@/assets/styles/main.scss"]
});
