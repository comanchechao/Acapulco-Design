import colors from 'vuetify/es5/util/colors'

export default {
  router: {
    prefetchLinks: false,
  },
  server: {
    port: 8000, // default: 3000
    host: 'Localhost', // default: localhost
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - Limited Custom Handmade Merchendise',
    title: 'Acapulco',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/icon.ico',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  components: false,
  // Middleware

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    // '~/plugins/fireauth.js',
    // '~plugins/animate.css',
    // '~plugins/firebase.js',
    // '~/plugins/axios.js',
    // { src: '~/plugins/vue-scroll-reveal', ssr: false },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/pwa',
    'nuxt-gsap-module',
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/tailwindcss',
  ],

  gsap: {
    extraPlugins: {
      // scrollTo: true,
      easel: true,
      scrollTrigger: true,
    },
    // extraEases: {
    //   expoScaleEase: true,
    // },
  },
  // pageTransition: {
  //   name: 'page',
  //   mode: 'out-in',
  //   css: false,

  //   beforeEnter(el) {
  //     this.$gsap.set(el, {
  //       opacity: 0,
  //     })
  //   },

  //   enter(el, done) {
  //     this.$gsap.to(el, {
  //       opacity: 1,
  //       duration: 0.5,
  //       ease: 'power2.inOut',
  //       onComplete: done,
  //     })
  //   },

  //   leave(el, done) {
  //     this.$gsap.to(el, {
  //       opacity: 0,
  //       duration: 0.5,
  //       ease: 'power2.inOut',
  //       onComplete: done,
  //     })
  //   },
  // },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyC77kzTcPi7rJsGKgmH0j62YYj1PUX_uWE',
          authDomain: 'acapulco-e86b9.firebaseapp.com',
          projectId: 'acapulco-e86b9',
          storageBucket: 'acapulco-e86b9.appspot.com',
          messagingSenderId: '652596111912',
          appId: '1:652596111912:web:a64d3ae42f255f2944a31d',
          measurementId: 'G-15G0W8Q4G2',
        },
        services: {
          auth: {
            persistence: 'local', // default
            initialize: {
              onAuthStateChangedMutation: 'setUser',
              // onAuthStateChangedAction: 'onAuthStateChangedAction',
              subscribeManually: false,
            },
          },
          firestore: true,
          storage: true,
        },
      },
    ],
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // vuetify: {
  //   customVariables: ['~/assets/variables.scss'],
  //   theme: {
  //     dark: true,
  //     themes: {
  //       dark: {
  //         primary: colors.blue.darken2,
  //         accent: colors.grey.darken3,
  //         secondary: colors.amber.darken3,
  //         info: colors.teal.lighten1,
  //         warning: colors.amber.base,
  //         error: colors.deepOrange.accent4,
  //         success: colors.green.accent3,
  //       },
  //     },
  //   },
  // },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
