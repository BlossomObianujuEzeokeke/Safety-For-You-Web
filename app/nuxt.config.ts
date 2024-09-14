// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app : {
    head: {
      htmlAttrs: {
        lang: 'en' // Set the language code you want, e.g., 'en' for English
      },
      title: "Safety For You Services Ltd",
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {name: 'description', content: 'Everything about Nuxt 3'}
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favico.png' },
        // You can add more icons for different formats/devices if needed
      ],
    },

    pageTransition: { name: 'page', mode: 'out-in' }
  },
  router: {
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition; // Use saved scroll position when navigating back
      } else if (to.hash) {
        return { el: to.hash, behavior: 'smooth', top: 100 }; // Default behavior for hashes
      }
      return { top: 0 }; // Scroll to top for normal route navigation
    }
  },
  modules: [
    '@nuxtjs/sanity',
    // [
    //   '@nuxtjs/google-fonts',
    //   {
    //     families: {
    //       'IBM Plex Mono': [500, 700],
    //       Inter: [500, 700, 800],
    //       'PT Serif': [400, 700],
    //       download: true,
    //       inject: true,
    //     },
    //   },
    // ],
  ],

  sanity: {
    projectId: process.env.NUXT_SANITY_PROJECT_ID,
    dataset: process.env.NUXT_SANITY_DATASET,
    useCdn: true, // `false` if you want to ensure fresh data
    apiVersion: process.env.NUXT_SANITY_API_VERSION || '2024-03-15',
    visualEditing: {
      studioUrl: process.env.NUXT_SANITY_STUDIO_URL || 'http://localhost:3333',
      token: process.env.NUXT_SANITY_API_READ_TOKEN,
      stega: true,
    },
  },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      autoprefixer: {},
      tailwindcss: {},
      'postcss-nested': {},
    },
  },
  compatibilityDate: '2024-08-12',

})


