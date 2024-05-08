import { defineConfig } from 'vitepress'
import { genFeed } from './genFeed.js'

export default defineConfig({
  title: 'Ali shared',
  // description: 'The official blog for the Vue.js project',
  cleanUrls: true,
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'https://theovan.cn/avatar.png'
      }
    ]
  ],
  buildEnd: genFeed
})
