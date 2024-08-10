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

import './custom.css'
// import '@fortawesome/fontawesome-free/css/all.min.css'
import '@theo-messi/tm-fe/theme'

const theme: Theme = {
  ...DefaultTheme,
  Layout: NewLayout,
  enhanceApp({ app }) {
    // 注册全局组件
    app.component('Tags', Tags)
    app.component('Category', Category)
    app.component('Archives', Archives)
    app.component('Page', Page)
    app.component('Comment', Comment)
  }
}

export default theme
