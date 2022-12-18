// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',
  nitro: {
    preset: "node",
    prerender: {
      routes: ['/kikaku/400','/kikaku/401']
    }
  },
  modules: ["@nuxtjs/tailwindcss"],
  // buildModules: ['@nuxtjs/tailwindcss'], // <= コメントアウト
  css: ["@/assets/styles/tailwind.css"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: ['@use "@/assets/styles/main.scss" as *;']
        },
      },
    },
  },
});
