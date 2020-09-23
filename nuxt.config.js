export default {
  publicRuntimeConfig: {
    MAIL_HOST: process.env.MAIL_HOST,
    MAIL_PORT: process.env.MAIL_PORT,
    CONTACT_MAIL: process.env.CONTACT_MAIL,
    BASE_URL: process.env.BASE_URL,
    API_URL: process.env.API_URL,
    GOOGLE_RECAPTCHA_KEY: process.env.GOOGLE_RECAPTCHA_KEY,
  },
  privateRuntimeConfig: {},
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    htmlAttrs: {
      lang: 'vi',
    },
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'author',
        content: 'njim',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' }],
  },
  loading: {
    color: '#ec600b',
  },
  layoutTransition: {
    name: 'layout',
    mode: 'out-in',
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/custom.css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['~plugins/vee-validate', '~/plugins/jsonld'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/device',
    'nuxt-purgecss',
    [
      '@nuxtjs/google-analytics',
      {
        id: process.env.GOOGLE_ANALYTICS_ID,
      },
    ],
  ],
  purgeCSS: {
    // your settings here
    whitelist: ['body', 'html', 'nuxt-progress'],
    whitelistPatterns: [
      /-(leave|enter|appear)(|-(to|from|active))$/,
      /^(?!(|.*?:)cursor-move).+-move$/,
      /^router-link(|-exact)-active$/,
      /^cool-lightbox/,
    ],
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    [
      'nuxt-mail',
      {
        smtp: {
          host: process.env.MAIL_HOST,
          port: process.env.MAIL_PORT,
          secure: false, // true for 465, false for other ports
          auth: {
            user: process.env.MAIL_USERNAME, // generated ethereal user
            pass: process.env.MAIL_PASSWORD, // generated ethereal password
          },
        },
      },
    ],
    '@nuxtjs/sitemap',
  ],
  // Sitemap configuration
  sitemap: {
    hostname: process.env.BASE_URL,
    gzip: true,
    exclude: [
      '/bangGia',
      '/chinhSach',
      '/hoiDap',
      '/huongDan',
      '/lienHe',
      '/tinhNang',
    ],
    routes: [],
    defaults: {
      changefreq: 'monthly',
      priority: 1,
      lastmod: new Date(),
      lastmodrealtime: true,
    },
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: { transpile: ['vee-validate/dist/rules'] },

  serverMiddleware: [
    {
      path: 'api/validate-captcha',
      handler: '~server/api/validate-recaptcha',
    },
  ],

  router: {
    extendRoutes(routes, resolve) {
      routes.push(
        {
          name: 'tinh-nang-i-notary',
          path: '/tinh-nang-i-notary',
          component: resolve(__dirname, 'pages/tinhNang.vue'),
        },
        {
          name: 'bang-gia',
          path: '/bang-gia',
          component: resolve(__dirname, 'pages/bangGia.vue'),
        },
        {
          name: 'huong-dan',
          path: '/huong-dan',
          component: resolve(__dirname, 'pages/huongDan.vue'),
        },
        {
          name: 'hoi-dap',
          path: '/hoi-dap',
          component: resolve(__dirname, 'pages/hoiDap.vue'),
        },
        {
          name: 'lien-he',
          path: '/lien-he',
          component: resolve(__dirname, 'pages/lienHe.vue'),
        },
        {
          name: 'chinh-sach-va-dieu-khoan-su-dung',
          path: '/chinh-sach-va-dieu-khoan-su-dung',
          component: resolve(__dirname, 'pages/chinhSach.vue'),
        }
      )
    },
  },
}
