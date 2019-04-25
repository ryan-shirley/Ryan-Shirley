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
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.css' }
        ],
        script: [
            { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js', body: true },
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js', body: true },
            { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js', body: true },
            { src: 'https://cdn.emailjs.com/sdk/2.3.2/email.min.js' },
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.js' }
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
    [
      '@bazzite/nuxt-optimized-images',
    ],
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
    ]
    
  ],


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
  optimizedImages: {
    optimizeImages: true
  }
}
