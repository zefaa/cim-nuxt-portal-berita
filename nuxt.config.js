import colors from 'vuetify/es5/util/colors'
import dotenv from 'dotenv'
const axios = require('axios')

dotenv.config()

const useLocal = process.env.USE_LOCAL

const cimColors = {
  darkgreen: '#0B9948',
  lightgreen: '#A8CC38',
  maroon: '#A85D40',
  orange: '#ED8122',
  white: '#FFFFFF'
}

const setting = {
  // Global page headers: https://go.nuxtjs.dev/config-head
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

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // '@/assets/main.scss',
    // '@/assets/_mq.scss'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/moment',
    // '@nuxtjs/google-analytics',
    // '@nuxtjs/gtm'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'cookie-universal-nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv'
  ],

  plugins: [
    // '~/plugins/both/bu.js',
    // '~/plugins/client/cu.client.js',
    // '~/plugins/client/format-date.js',
    // '~/plugins/TiptapVuetify',
    // '~/plugins/Countdown'
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.green.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: '#0B9948',
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vuetify/lib', 'tiptap-vuetify']
  },
  target: 'static',
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

let baseURL
if (useLocal === 'true') {
  baseURL = 'http://localhost:8888'
} else {
  baseURL = ''
}
setting.axios = {
  baseURL
}

export default setting
