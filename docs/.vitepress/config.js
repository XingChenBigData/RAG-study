import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'RAG全栈技术笔记',
  description: '从基础到精通，打造高精准AI应用',
  lang: 'zh-CN',
  base: '/RAG-study/', // 使用仓库名称作为 base 路径
  lastUpdated: true,
  ignoreDeadLinks: true,

  head: [
    ['meta', { name: 'theme-color', content: '#3c8772' }]
  ],

  markdown: {
    lineNumbers: true,
    mermaid: true,
    math: true,
    image: {
      lazyLoading: false
    }
  },

  vite: {
    assetsInclude: ['**/*.PNG', '**/*.JPG', '**/*.JPEG', '**/*.GIF', '**/*.SVG']
  },

  themeConfig: {
    returnToTopLabel: '返回顶部',

    outline: {
      level: [1, 4]
    },

    nav: [
      { text: '首页', link: '/' },
      { text: '基础笔记', link: '/base/chapter1/项目介绍' }
    ],

    sidebar: {
      '/base/': [
        {
          text: 'Chapter 1 · 项目介绍',
          items: [
            { text: '项目介绍', link: '/base/chapter1/项目介绍' }
          ]
        },
        {
          text: 'Chapter 6 · 文档分块',
          items: [
            { text: '6-5 文档分块：递归文本分块和语义智能分块', link: '/base/chapter6/6-5 文档分块：递归文本分块和语义智能分块_ev' }
          ]
        },
        {
          text: 'Chapter 7 · 项目架构设计',
          items: [
            { text: '项目介绍', link: '/base/chapter7/项目介绍' },
            { text: '7-4 项目架构设计_ev', link: '/base/chapter7/7-4 项目架构设计_ev' }
          ]
        },
        {
          text: 'Chapter 8 · RAG评估',
          items: [
            { text: '8-2 RAG迭代的关键：评估_ev- 笔记', link: '/base/chapter8/8-2 RAG迭代的关键：评估_ev- 笔记' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/XingChenBigData/RAG-study' }
    ],

    search: {
      provider: 'local'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    footer: {
      message: '基于 Apache-2.0 许可发布',
    },
  },
})