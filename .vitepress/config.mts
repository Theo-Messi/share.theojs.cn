import { defineConfig } from 'vitepress'
import { getPosts } from '@theojs/solis/utils'

export default defineConfig({
  title: '阿里云盘资源分享',
  description:
    '阿里云盘资源分享 - 热门资源/电视剧/电影/综艺/动漫/大陆/日本/韩国/欧美',
  metaChunk: true,
  cleanUrls: true,
  sitemap: { hostname: 'https://share.theojs.cn' },
  themeConfig: {
    posts: await getPosts(7),
    logo: { src: 'https://i.theojs.cn/docs/202405101119004.png' },
    nav: [
      { text: '主页', link: '/' },
      { text: '分类', link: '/pages/category' },
      { text: '归档', link: '/pages/archives' },
      { text: '标签', link: '/pages/tags' }
    ],
    outline: [2, 3],
    outlineTitle: '文章摘要',
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
    socialLinks: [{ icon: 'github', link: 'https://github.com/Theo-Messi' }],
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
  }
})
