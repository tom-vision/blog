import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tom's Blog",
  description: "Excerpts related to technology at work",
  head: [
    [
      'script',
      {},
      `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?a7e4a6fe9356ca4a331be2f1b8f94631";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
      `
    ]
  ],
  base: '/blog/',
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
      { text: '开发语言', link: '/todo' },// （JavaScript / Node.js / TS / Vue / Midway 等）
      { text: '应用框架', link: '/todo' },
      { text: '数据库', link: '/database/mysql/8/ssl' },
      { text: '平台架构', link: '/todo' }, //（项目搭建 / 服务治理 / 权限流程等）
      { text: '项目总结', link: '/todo' },
      { text: '工具与工程化', link: '/tools/todesk/uuid' }, //（Git / Vite / Docker / CI 等）
      { text: '服务器优化', link: '/server/ubuntu/firewall' }, //（Git / Vite / Docker / CI 等）
    ],

    sidebar: {
      '/database/': [
        {
          text: 'MySQL',
          items: [
            { text: 'V8', link: '/database/mysql/8/ssl' },
          ]
        }
      ],
      '/server/': [
        {
          text: 'Ubuntu',
          items: [
            { text: '防火墙', link: '/server/ubuntu/firewall' },
          ]
        },
        {
          text: '麒麟',
          items: [
            { text: '防火墙', link: '/server/kylin/firewall' },
          ]
        },
        {
          text: 'Waf',
          items: [
            { text: 'SSL', link: '/server/waf/ssl' },
          ]
        },
        {
          text: 'Nginx',
          items: [
            { text: '日志切割', link: '/server/nginx/logCut' },
          ]
        }
      ],
      '/tools/': [
        {
          text: 'todesk',
          items: [
            { text: 'uuid', link: '/tools/todesk/uuid' },
          ]
        }
      ]
    },

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
