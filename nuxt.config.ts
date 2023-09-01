// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/prismic",'@nuxtjs/tailwindcss'],
  prismic: {
    endpoint: "quepaje-landing"
  },
  app: {
    head: {
      link: [
        {
          rel: 'icon', type : 'image/png', href: 'favicon.png'
        }
      ]
    }
  },
  build: {
    transpile: ['gsap'],
  },
})