import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'RAG全栈技术笔记',
  description: '从基础到精通，打造高精准AI应用',
  lang: 'zh-CN',
  base: '/RAG-study/', // 使用仓库名称作为 base 路径
  lastUpdated: true,
  ignoreDeadLinks: false,

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
      level: [1, 4],
      label: '目录'
    },

    // 文档分页导航
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    // 编辑链接
    editLink: {
      pattern: 'https://github.com/XingChenBigData/RAG-study/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    nav: [
      { text: '首页', link: '/' },
      { text: '技术书籍', link: '/base/chapter1/项目介绍' },
      { text: '慕课-RAG', link: '/慕课-RAG/chapter1/项目介绍' }
    ],

    sidebar: {
      '/base/': [
        {
          text: '第一部分 · RAG基础入门',
          collapsible: true,
          items: [
            {
              text: 'Chapter 1 · 项目介绍',
              items: [
                { text: '项目介绍', link: '/base/chapter1/项目介绍' }
              ]
            }
          ]
        },
        {
          text: '第二部分 · RAG核心技术',
          collapsible: true,
          items: [
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
                { text: '7-4 项目架构设计', link: '/base/chapter7/7-4 项目架构设计_ev' }
              ]
            }
          ]
        },
        {
          text: '第三部分 · RAG评估与优化',
          collapsible: true,
          items: [
            {
              text: 'Chapter 8 · RAG评估',
              items: [
                { text: '8-2 RAG迭代的关键：评估', link: '/base/chapter8/8-2 RAG迭代的关键：评估_ev- 笔记' },
                { text: '8-3 RAG评估的三大步骤', link: '/base/chapter8/8-3 RAG评估的三大步骤_ev- 笔记' },
                { text: '8-4 RAG评价神器：Ragas框架', link: '/base/chapter8/8-4 RAG评价神器：Ragas框架_ev- 笔记' },
                { text: '8-5 实战：用Ragas评估制度问答模块的性能', link: '/base/chapter8/8-5 实战：用Ragas评估制度问答模块的性能_ev- 笔记' }
              ]
            }
          ]
        }
      ],
      '/慕课-RAG/': [
        {
          text: '第一部分 · RAG基础入门',
          collapsible: true,
          items: [
            {
              text: 'Chapter 1 · 项目介绍',
              items: [
                { text: '项目介绍', link: '/慕课-RAG/chapter1/项目介绍' }
              ]
            }
          ]
        },
        {
          text: '第二部分 · RAG核心技术',
          collapsible: true,
          items: [
            {
              text: 'Chapter 6 · 文档分块',
              items: [
                { text: '6-5 文档分块：递归文本分块和语义智能分块', link: '/慕课-RAG/chapter6/6-5 文档分块：递归文本分块和语义智能分块_ev' }
              ]
            },
            {
              text: 'Chapter 7 · 项目架构设计',
              items: [
                { text: '7-4 项目架构设计', link: '/慕课-RAG/chapter7/7-4 项目架构设计_ev' }
              ]
            }
          ]
        },
        {
          text: '第三部分 · RAG评估与优化',
          collapsible: true,
          items: [
            {
              text: 'Chapter 8 · RAG评估',
              items: [
                { text: '8-2 RAG迭代的关键：评估', link: '/慕课-RAG/chapter8/8-2 RAG迭代的关键：评估_ev- 笔记' },
                { text: '8-3 RAG评估的三大步骤', link: '/慕课-RAG/chapter8/8-3 RAG评估的三大步骤_ev- 笔记' },
                { text: '8-4 RAG评价神器：Ragas框架', link: '/慕课-RAG/chapter8/8-4 RAG评价神器：Ragas框架_ev- 笔记' },
                { text: '8-5 实战：用Ragas评估制度问答模块的性能', link: '/慕课-RAG/chapter8/8-5 实战：用Ragas评估制度问答模块的性能_ev- 笔记' }
              ]
            }
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