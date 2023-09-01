// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/prismic",'@nuxtjs/tailwindcss'],
  ssr: false,
  spaLoadingTemplate: false,
  prismic: {
    endpoint: "quepaje-landing"
  },
  app: {
    head: {
      link: [
        {
          rel: 'icon', type : 'image/png', href: 'favicon.png'
        },
        {
          rel: 'preconnect', href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect', href: 'https://fonts.gstatic.com'
        },
        {
          rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;800&display=swap'
        }
      ]
    }
  },
  build: {
    transpile: ['gsap'],
  },
})