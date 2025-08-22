import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: '/css/plugin_theme_css.css' },
        { rel: 'stylesheet', href: '/css/responsive.css' },
        { rel: 'stylesheet', href: '/css/style.css' },
        { rel: 'stylesheet', href: '/venobox/venobox.css' },
      ],
      script: [{ src: '/js/vendor/modernizr-2.8.3.min.js' }],
    },
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'https://api.yoursite.com',
    },
    dbHost: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
});
