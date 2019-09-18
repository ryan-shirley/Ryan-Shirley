import pkg from './package'

export default {
  mode: 'universal',

    /*
    ** Headers of the page
    */
    head: {
        title: pkg.name,
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: pkg.description }
        ],
        link: [
            { rel: 'icon', sizes: '32x32', href: '/favicon/favicon-32.png' },
            { rel: 'icon', sizes: '76x76', href: '/favicon/favicon-76.png' },
            { rel: 'icon', sizes: '96x96', href: '/favicon/favicon-96.png' },
            { rel: 'icon', sizes: '128x129', href: '/favicon/favicon-128.png' },
            { rel: 'icon', sizes: '152x152', href: '/favicon/favicon-152.png' },
            { rel: 'icon', sizes: '180x180', href: '/favicon/favicon-180.png' },
            { rel: 'icon', sizes: '129x192', href: '/favicon/favicon-192.png' },
            { rel: 'icon', sizes: '196x196', href: '/favicon/favicon-196.png' },
            { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.css' }
        ],
        script: [
            { 
              src: 'https://code.jquery.com/jquery-3.3.1.min.js', 
              type: "text/javascript",
              body: true 
            },
            { 
              src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js', 
              type: "text/javascript", 
              body: true 
            },
            { 
              src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js', 
              type: "text/javascript",
              body: true 
            },
            { 
              src: 'https://cdn.emailjs.com/sdk/2.3.2/email.min.js',
              type: "text/javascript",
            },
            { 
              src: 'https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.js',
              type: "text/javascript",
            }
        ],
    },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/main.scss' // use our build, as entered via main.scss
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/globalComponent',
    '~/plugins/cookieNotice',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    [ '@nuxtjs/sitemap' ],
    [ '@nuxtjs/google-analytics' ],
    [ '@nuxtjs/redirect-module' ],
    // Doc: https://bootstrap-vue.js.org/docs/
    [
        '@nuxtjs/bootstrap-vue', { 
            css: false 
        }
    ], // don't include a default build, use ours
    [
        'nuxt-fontawesome', {
            imports: [
            {
                set: '@fortawesome/free-solid-svg-icons',
                icons: ['fas']
            },
            {
                set:'@fortawesome/free-brands-svg-icons',
                icons: ['fab']
            }
            ]
        }
    ],
    [
        'vue-scrollto/nuxt', { 
            duration: 600 
        }
    ],
  ],

  /*
  ** Build 404 page
  */
  generate: {
    routes: ['404']
  },


  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // Disable a plugin by passing false as value 
        'precss': {},
        'autoprefixer': {}
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: true
        }
      }
    }
  },

  /*
  ** Router configuration
  */
  router: {
    linkActiveClass: 'active'
  },

  /*
  ** Image Optimisation
  */
  // optimizedImages: {
  //   optimizeImages: true
  // },

  /*
  ** Sitemap
  */
//   sitemap: {
//     hostname: 'https://ryanshirley.ie',
//     path: '/sitemap.xml',
//     gzip: true,
//     exclude: [
//       '/foundation/**'
//     ],
//     routes: [],
//     defaults: {
//       changefreq: 'monthly',
//       priority: 1,
//       lastmod: new Date(),
//       lastmodrealtime: true
//     }
//   },

  /*
  ** Google Analytics
  */
  googleAnalytics: {
    id: 'UA-46498242-2'
  },

  /*
  ** Page Redirects
  */
  redirect: [
    // Redirect options here
    { from: '^/portfolio', to: '/work', statusCode: 301 }, // 301 permanent
    { from: '^/services', to: '/', statusCode: 301 } // 301 permanent
  ]
}
