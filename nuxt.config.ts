// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: '/css/plugin_theme_css.css' },
        { rel: 'stylesheet', href: '/css/responsive.css' },
        { rel: 'stylesheet', href: '/css/style.css' },
        { rel: 'stylesheet', href: '/venobox/venobox.css' }
      ],
      script: [
        { src: '/js/vendor/modernizr-2.8.3.min.js' },
      ]
    },
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
