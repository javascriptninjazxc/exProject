export default {
  render: {
    csp: false,
  },
  dev: process.env.NODE_ENV !== 'production',
  target: 'static',
  ssr: false,
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  loading: false,
  head: {
    title: 'Cheats.im',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~assets/styles/include.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~plugins/axios', '~plugins/storage', '~plugins/animejs', '~plugins/v-mask', '~plugins/select2', '~plugins/vue-js-modal', '~plugins/v-click-outside'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/google-fonts',
    '@nuxtjs/google-analytics',
    'nuxt-animejs',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/image',
    ['nuxt-clipboard', { autoSetContainer: true }],
    [
      '@rkaliev/nuxtjs-yandex-metrika',
      {
        id: 82143082,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
      },
    ],
  ],

  googleAnalytics: {
    id: 'G-KGH9GMX858',
    autoTracking: {
      screenview: true,
    },
  },

  publicRuntimeConfig: {
    yandexMetrika: {
      id: 82143082,
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
    },
    contacts: {
      mail: 'mailto:gamesenseis@protonmail.com',
      discord: {
        base: 'https://discord.gg/MJBSwP4w9Z',
        support: 'https://discord.gg/MJBSwP4w9Z',
      },
      telegram: {
        base: 'https://t.me/basicblog',
        support: null,
      },
      vkontakte: {
        base: 'https://vk.com/gamesenseis',
        support: 'https://vk.com/im?sel=-205259695',
      },
    },
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    credentials: false,
    baseURL:
      process.env.NODE_ENV !== 'production'
        ? 'https://api.gamesense.is/'
        : 'https://api.gamesense.is/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend: (config) => {
      config.module.rules.push({
        test: /.scss$/,
        use: 'webpack-import-glob-loader',
      })
    },
  },

  googleFonts: {
    download: true,
    inject: true,
    /* overwriting: true, */
    families: {
      Poppins: [400, 500, 600, 700, 800, 900],
    },
  },

  generate: {
    interval: 2000,
  },
}

