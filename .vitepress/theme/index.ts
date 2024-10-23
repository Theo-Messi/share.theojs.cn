import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'

import { Archives, Category, Tags, Page, Twikoo, Info } from '@theojs/solis'
import { DocAsideLogo, HomeFooter, ShareButton, DocLinks } from '@theojs/lumen'
import { Aside_Data, Footer_Data, Twikoo_Data } from '../data'
import googleAnalytics from 'vitepress-plugin-google-analytics'
import imageViewer from 'vitepress-plugin-image-viewer'

import '@theojs/lumen/theme'
import 'viewerjs/dist/viewer.min.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'aside-top': () => h(DocAsideLogo, { Aside_Data }),
      'layout-bottom': () => h(HomeFooter, { Footer_Data }),
      'doc-after': () => h(Twikoo, { Twikoo_Data }),
      'aside-outline-after': () => h(ShareButton),
      'doc-before': () => h(Info)
    })
  },
  enhanceApp: ({ app }) => {
    googleAnalytics({ id: 'G-EQQ8C8W01B' })
    app.component('Tags', Tags)
    app.component('Category', Category)
    app.component('Archives', Archives)
    app.component('Page', Page)
    app.component('Links', DocLinks)
  },
  setup() {
    const route = useRoute()
    imageViewer(route)
  }
}
