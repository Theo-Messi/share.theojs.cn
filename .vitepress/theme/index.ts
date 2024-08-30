import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'

import { Archives, Category, Tags, Page } from '@theojs/solis'
import { Announcement, DocAsideLogo, HomeFooter } from '@theojs/lumen'
import { Aside_Data, Footer_Data } from '../data'
import googleAnalytics from 'vitepress-plugin-google-analytics'
import imageViewer from 'vitepress-plugin-image-viewer'

import '@theojs/lumen/theme'
import 'viewerjs/dist/viewer.min.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-info-before': () => h(Announcement),
      'aside-outline-after': () => h(DocAsideLogo, { Aside_Data }),
      'layout-bottom': () => h(HomeFooter, { Footer_Data })
    })
  },
  enhanceApp: (ctx) => {
    const { app } = ctx
    // 注册全局组件
    googleAnalytics({ id: 'G-EQQ8C8W01B' })
    app.component('Tags', Tags)
    app.component('Category', Category)
    app.component('Archives', Archives)
    app.component('Page', Page)
  },
  setup() {
    const route = useRoute()
    imageViewer(route)
  }
}
