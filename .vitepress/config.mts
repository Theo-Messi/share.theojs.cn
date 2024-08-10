import { defineConfig } from 'vitepress'
import { getPosts } from './theme/serverUtils'
import type { DefaultTheme } from 'vitepress'

// 每页的文章数量
const pageSize = 10

export default defineConfig({
  title: '阿里云盘资源分享',
  description:
    '阿里云盘资源分享 - 热门资源/电视剧/电影/综艺/动漫/大陆/日本/韩国/欧美',
  cacheDir: './node_modules/vitepress_cache',
  ignoreDeadLinks: true,
  sitemap: { hostname: 'https://share.theojs.cn' },
  vite: {
    resolve: {
      alias: [
        { find: /^.*\/VPFooter\.vue$/, replacement: '@theo-messi/tm-fe/Footer' }
      ]
    },
    define: {
      FooterData: JSON.stringify(require('./data/footerData').Footer_Data)
    }
  },
  cleanUrls: true,
  themeConfig: {
    posts: await getPosts(pageSize),
    logo: { src: 'https://i.theojs.cn/docs/202405101119004.png' },
    nav: [
      { text: '主页', link: '/' },
      { text: '分类', link: '/pages/category' },
      { text: '归档', link: '/pages/archives' },
      { text: '标签', link: '/pages/tags' }
    ],
    search: {
      provider: 'local'
    },
    outline: [2, 3],
    outlineTitle: '文章摘要',
    socialLinks: [{ icon: 'github', link: 'https://github.com/Theo-Messi' }]
  } as DefaultTheme.Config,

  srcExclude: ['README.md']
})
