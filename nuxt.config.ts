import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devServer: {
    port: 3456,
    host: '0.0.0.0',
  },
  app: {
    baseURL: process.env.BASE_URL || '/nuxtapp202504114/',
    head: {
      link: [
        { rel: 'stylesheet', href: process.env.BASE_URL + 'assets/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: process.env.BASE_URL + 'assets/venobox/venobox.css' },
        { rel: 'stylesheet', href: process.env.BASE_URL + 'assets/css/plugin_theme_css.css' },
        { rel: 'stylesheet', href: process.env.BASE_URL + 'assets/css/style.css' },
        { rel: 'stylesheet', href: process.env.BASE_URL + 'assets/css/responsive.css' },
      ],
      script: [
        { src: process.env.BASE_URL + 'assets/js/vendor/modernizr-2.8.3.min.js' },
        { src: process.env.BASE_URL + 'assets/js/vendor/jquery-3.5.1.min.js' },
        { src: process.env.BASE_URL + 'assets/js/swiper-bundle.min.js' },
      ],
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
