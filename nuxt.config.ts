export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Модули
  modules: [
    '@nuxt/ui',
    // '@nuxt/image',
  ],

  // Глобальные CSS
  css: ['~/assets/css/main.css'],

  // Правила рендеринга
  routeRules: {
    '/': { prerender: true },           // SSG - главная
    '/cats': { ssr: false },        // CSR - все котики
    '/cats/[id]': { ssr: false },   // CSR - каждый котик отдельно
    '/about': { ssr: false },            // CSR - о нас
  },

  // SEO и Meta теги
  app: {
    baseURL: '/Catjoke/',  
    buildAssetsDir: '/static/',
    head: {
      title: 'CatJoke - Смешные коты и шутки',
      titleTemplate: '%s | CatJoke',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Генератор случайных шуток с милыми котиками. Смейся каждый день с CatJoke!' },
        { name: 'keywords', content: 'коты, котики, шутки, юмор, генератор шуток, смешные коты, приколы' },
        { name: 'author', content: 'CatJoke' },
        { name: 'theme-color', content: '#8B5CF6' },

        // Open Graph
        { property: 'og:title', content: 'CatJoke - Смешные коты и шутки' },
        { property: 'og:description', content: 'Генератор случайных шуток с милыми котиками' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/og-image.jpg' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/Catjoke/favicon.ico' },
        { rel: 'canonical', href: 'https://catjoke.com' },
      ],
      htmlAttrs: {
        lang: 'ru'
      }
    }
  },

  // Производительность
  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true
    }
  }
})
