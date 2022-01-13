import dotenv from 'dotenv'
dotenv.config()

const env = {
  CTF_SPACE_ID: process.env.CTF_SPACE_ID,
  CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN
}

export default {
  env,
  ssr: false,
  // mode: 'universal',
  /*
  ** Headers of the page
  */
  manifest: {
    short_name: 'cimnuxt',
    name: 'Centrum Ivan Merz',
    icons: [
      {
        src: '/icons/apple-touch-icon-120x120.png',
        type: 'image/png',
        sizes: '120x120'
      }
    ],
    start_url: '/?utm_source=homescreen',
    background_color: '#FFFFFF',
    theme_color: '#ffffff',
    display: 'standalone'
  },
  head: {
    title: 'Centrum Ivan Merz - Kursus Teologi Katolik',
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#',
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, viewport-fit=cover'
      },
      { hid: 'description', name: 'description', content: 'Centrum Ivan Merz - Kursus Teologi Katolik Keuskupan Surabaya - IMAVI' },
      { hid: 'og:description', name: 'og:description', content: 'Centrum Ivan Merz - Kursus Teologi Katolik Keuskupan Surabaya - IMAVI' },
      { hid: 'og:title', name: 'og:title', content: 'Centrum Ivan Merz - Kursus Teologi Katolik Keuskupan Surabaya - IMAVI' },
      { hid: 'og:image', name: 'og:image', content: 'https://static.imavi.org/logo/favicon.png' },
      { hid: 'og:url', name: 'og:url', content: 'https://imerz.imavi.org/' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Fira+Sans:400i,400,600i' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'apple-touch-icon', href: '/img/icons/apple-touch-icon.png' }
    ],
    script: [
      {
        src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
        type: 'text/javascript'
      }
      // {
      //   src: '/js/',
      //   type: 'text/javascript'
      // }
    ]
    // googleAnalytics: {
    //   id: 'UA-'
    // },

  },
  gtm: {
    id: 'G-0R4NMGYBN0', // Used as fallback if no runtime config is provided
    pageTracking: true,
    enabled: true
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/underscore', ssr: false },
    // '~/plugins/contentful'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/moment',
    // '@nuxtjs/google-analytics',
    '@nuxtjs/gtm'
  ],
  moment: {
    defaultLocale: 'id',
    locales: ['id']
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/gtm',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  styleResources: {
    scss: [
      'assets/scss/_colors.scss',
      'assets/scss/_mixins.scss',
      'assets/scss/global.scss'
    ]
  },
  markdownit: {
    injected: true,
    html: true
  },
  axios: {
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        light: {
          primary: '#c0e24b',
          secondary: '#ffc107',
          accent: '#65b4e4',
          error: '#b71f3b',
          warning: '#ed9822',
          info: '#00bcd4',
          success: '#8bc34a'
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  generate: {
    async routes () {
      return await getEverything()
    }
  }
}
