import { defineConfig } from 'vitepress'
import { getPosts } from '@theojs/solis/utils'
import { figure } from '@mdit/plugin-figure'
import { RSSOptions, RssPlugin } from 'vitepress-plugin-rss'

const posts = { posts: await getPosts(10) }
const baseUrl = 'https://share.theojs.cn'
const icon = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><circle cx="6.18" cy="17.82" r="2.18" fill="currentColor"></circle><path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z" fill="currentColor"></path></svg>`

const RSS: RSSOptions = {
  title: '阿里云盘资源分享',
  icon,
  baseUrl,
  description:
    '阿里云盘资源分享 - 热门资源/电视剧/电影/综艺/动漫/大陆/日本/韩国/欧美',
  id: baseUrl,
  link: baseUrl,
  language: 'zh-cn',
  image: 'https://i.theojs.cn/docs/202405101119004.png',
  favicon: 'https://share.theojs.cn/favicon.ico',
  copyright: `Copyright (c) 2019-${new Date().getFullYear()}, Theo-Messi`,
  url: `${baseUrl}/feed.rss`,
  filter(value) {
    return value.url.startsWith('/posts/') && !value.url.endsWith('/posts/')
  }
}

export default defineConfig({
  title: '阿里云盘资源分享',
  description: `阿里云盘资源分享 - 热门资源/电视剧/电影/综艺/动漫/大陆/日本/韩国/欧美`,
  lang: 'zh-cn',
  metaChunk: true,
  cleanUrls: true,
  sitemap: {
    hostname: 'https://share.theojs.cn',
    transformItems(items) {
      return items.filter((item) => item.url.includes('posts'))
    }
  },
  markdown: {
    image: { lazyLoading: true },
    config: (md) => {
      md.use(figure, { figcaption: 'alt', copyAttrs: '^class$', lazy: true })
    }
  },
  vite: {
    plugins: [RssPlugin(RSS)],
    css: { preprocessorOptions: { scss: { api: 'modern' } } }
  },
  themeConfig: {
    ...posts,
    logo: { src: 'https://i.theojs.cn/docs/202405101119004.png' },
    nav: [
      { text: '主页', link: '/' },
      { text: '分类', link: '/pages/category' },
      { text: '归档', link: '/pages/archives' },
      { text: '标签', link: '/pages/tags' }
    ],
    outline: [2, 3],
    outlineTitle: '文章摘要',

    // 上次更新
    lastUpdated: {
      text: '最后更新于',
      formatOptions: { dateStyle: 'medium', timeStyle: 'medium' }
    },
    // GitHub编辑页面
    editLink: {
      pattern: 'https://github.com/Theo-Messi/share.theojs.cn/edit/main/:path',
      text: '为此页提供修改建议'
    },

    // 文章翻页
    docFooter: { prev: '上一篇', next: '下一篇' },
    // 移动端 - 返回顶部
    returnToTopLabel: '返回顶部',

    // 移动端 - menu
    sidebarMenuLabel: '文章',

    // 主题模式切换
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    darkModeSwitchLabel: '主题模式',

    // 语言切换
    langMenuLabel: '切换语言',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Theo-Messi/share.theojs.cn' }
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索资源',
                buttonAriaLabel: '搜索资源'
              },
              modal: {
                displayDetails: '显示详细列表',
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                backButtonTitle: '关闭搜索',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  selectKeyAriaLabel: '输入',
                  navigateUpKeyAriaLabel: '上箭头',
                  navigateDownKeyAriaLabel: '下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'esc'
                }
              }
            }
          }
        }
      }
    }
  },
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-48x48.png',
        sizes: '48x48'
      }
    ],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      }
    ],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'MyWebSite' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'author', content: 'Theo-Messi' }],
    ['meta', { name: 'copyright', content: 'Theo-Messi' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'evisit-after', content: '1 day' }],
    [
      'meta',
      {
        name: 'description',
        content:
          '阿里云盘资源分享 - 热门资源/电视剧/电影/综艺/动漫/大陆/日本/韩国/欧美'
      }
    ],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'zh-cn' }],
    ['meta', { name: 'og:site_name', content: '阿里云盘资源分享' }],
    ['meta', { name: 'og:title', content: '阿里云盘资源分享' }],
    ['meta', { name: 'og:url', content: 'https://share.theojs.cn' }],
    [
      'meta',
      {
        name: 'og:image',
        content: 'https://i.theojs.cn/docs/202405101119004.png'
      }
    ],
    [
      'meta',
      {
        name: 'og:description',
        content:
          '阿里云盘资源分享 - 热门资源/电视剧/电影/综艺/动漫/大陆/日本/韩国/欧美'
      }
    ],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@TheoMessi_' }],
    ['meta', { name: 'twitter:title', content: '阿里云盘资源分享' }],
    [
      'meta',
      {
        name: 'twitter:description',
        content:
          '阿里云盘资源分享 - 热门资源/电视剧/电影/综艺/动漫/大陆/日本/韩国/欧美'
      }
    ],
    [
      'meta',
      {
        name: 'twitter:image',
        content: 'https://i.theojs.cn/docs/202405101119004.png'
      }
    ],
    [
      'script',
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          url: 'https://share.theojs.cn',
          name: '阿里云盘资源分享',
          description:
            '阿里云盘资源分享 - 热门资源/电视剧/电影/综艺/动漫/大陆/日本/韩国/欧美',
          author: {
            '@type': 'Person',
            name: 'Theo-Messi'
          }
        })
      }
    ]
  ]
})
