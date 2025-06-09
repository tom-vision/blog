import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tom's Blog",
  description: "Excerpts related to technology at work",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    lastUpdated: true,
    logo: '/logo.svg',

    search: {
      provider: "local",
    },

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © Tom",
    },
    
    nav: [
      { text: '首页', link: '/' },
      { text: '开发语言', link: '/todo' },
      { text: '应用框架', link: '/todo' },
      { text: '数据库', link: '/database/mysql/8/ssl' },
      { text: '平台架构', link: '/todo' },
      { text: '项目总结', link: '/todo' },
      { text: '工具与工程化', link: '/todo' },
    ],

    sidebar: {
      '/database/': [
        {
          text: 'MySQL',
          items: [
            { text: 'V8', link: '/database/mysql/8/ssl' },
          ]
        }
      ]
    },

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
