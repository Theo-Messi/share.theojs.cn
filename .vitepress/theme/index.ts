import { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import {
  NewLayout,
  Archives,
  Category,
  Tags,
  Page,
  Comment
} from './components'
import googleAnalytics from 'vitepress-plugin-google-analytics'

import './custom.css'
import '@theojs/lumen/theme'

const theme: Theme = {
  ...DefaultTheme,
  Layout: NewLayout,
  enhanceApp: (ctx) => {
    const { app } = ctx
    // 注册全局组件
    googleAnalytics({ id: 'G-EQQ8C8W01B' })
    app.component('Tags', Tags)
    app.component('Category', Category)
    app.component('Archives', Archives)
    app.component('Page', Page)
    app.component('Comment', Comment)
  }
}

export default theme
