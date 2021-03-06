export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'catApi',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~plugins/axios'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],
  
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
  ],
  axios: {
    // proxyHeaders: false
  },
    bootstrapVue: {
      componentPlugins: [
        'NavbarPlugin',
        'LayoutPlugin',
        'FormPlugin',
        'FormCheckboxPlugin',
        'FormInputPlugin',
        'FormRadioPlugin',
        'ToastPlugin',
        'ModalPlugin',
        'CardPlugin',
        'FormPlugin',
        'ButtonPlugin',
        'LayoutPlugin',
        'AlertPlugin',
        'FormSelectPlugin',
        'ButtonPlugin',
        'IconsPlugin',
        'FormTextareaPlugin',
        'OverlayPlugin',
      ],
    },
  

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
