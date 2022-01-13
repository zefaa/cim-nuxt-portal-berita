import dotenv from 'dotenv'
dotenv.config()

const env = {
  CTF_SPACE_ID: process.env.CTF_SPACE_ID,
  CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN
}
const setting = {
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
   css: [
  ],

  components: true,
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/moment',
    // '@nuxtjs/google-analytics',
    '@nuxtjs/gtm'
  ],
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/gtm',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit'
  ],
  moment: {
    defaultLocale: 'id',
    locales: ['id']
  },
  plugins: [
    { src: '~/plugins/underscore', ssr: false },
    // '~/plugins/contentful'
  ],
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

  /*
  ** Plugins to load before mounting the App
  */

  /*
  ** Nuxt.js dev-modules
  */


  /*
  ** Nuxt.js modules
  */

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
     async routes (callback) {
      let cimUrl = 'http://localhost:3005/cim/'
      let imaviUrl = 'http://localhost:3005/imavi/'
      if (useLocal === 'false') {
        cimUrl = 'https://api.imavi.org/cim/'
        imaviUrl = 'https://api.imavi.org/imavi/'
      }
      const allArticles = await axios.get(imaviUrl + 'articles/get-all', {
        headers: {
          Id: process.env.APP_ID,
          Secret: process.env.APP_SECRET,
          Partner: process.env.PARTNER
        }
      }).then((res) => {
        return res.data
      }).catch(callback)

      const allNews = await axios.get(imaviUrl + 'news/get-all', {
        headers: {
          Id: process.env.APP_ID,
          Secret: process.env.APP_SECRET,
          Partner: process.env.PARTNER
        }
      }).then((res) => {
        return res.data
      }).catch(callback)

      const routeList =
      [
        {
          route: '/articles/list',
          payload: allArticles
        },
        {
          route: '/news/list',
          payload: allNews
        }
      ]

      const ujianSingle = await axios.get(cimUrl + 'ujians/view/616634a20ed367297d87e26b', {
        headers: {
          Id: process.env.APP_ID,
          Secret: process.env.APP_SECRET
        }
      }).then((res) => {
        const payload = res.data
        return {
          route: '/member/ujians/do',
          payload
        }
      }).catch(callback)
      routeList.push(ujianSingle)

      const coursesAll = await axios.get(cimUrl + 'courses/get-all', {
        headers: {
          Id: process.env.APP_ID,
          Secret: process.env.APP_SECRET,
          Partner: process.env.PARTNER
        }
      }).then((res) => {
        const payload = res.data
        const innerRoutes = [{
          route: '/courses/list',
          payload
        }]
        payload.forEach((subElement) => {
          innerRoutes.push({
            route: '/courses/' + subElement.slug,
            payload: subElement
          })
        })
        return innerRoutes
      }).catch(callback)
      coursesAll.forEach((element) => {
        routeList.push(element)
      })

      allArticles.forEach((element) => {
        routeList.push({
          route: '/articles/' + element.slug,
          payload: element
        })
      })

      allNews.forEach((element) => {
        routeList.push({
          route: '/news/' + element.slug,
          payload: element
        })
      })
      callback(null, routeList)
    }
  }
}
