import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AIxGood',
  description: '洪建全文教基金會 AIxGood 計畫 — ArchiLAW 與 Archigent 服務文件',
  lang: 'zh-TW',
  base: '/aixgood/',
  head: [
    ['meta', { name: 'theme-color', content: '#1a1a2e' }],
  ],
  themeConfig: {
    nav: [
      { text: '首頁', link: '/' },
      { text: 'ArchiLAW', link: '/archilaw/' },
      { text: 'Archigent', link: '/archigent/' },
    ],
    sidebar: {
      '/archilaw/': [
        {
          text: 'ArchiLAW',
          items: [
            { text: '服務介紹', link: '/archilaw/' },
            { text: '功能說明', link: '/archilaw/features' },
            { text: 'MCP 連接指南', link: '/archilaw/mcp-guide' },
            { text: 'Web App 使用', link: '/archilaw/webapp' },
            { text: '常見問題', link: '/archilaw/faq' },
          ],
        },
      ],
      '/archigent/': [
        {
          text: 'Archigent',
          items: [
            { text: 'App 介紹', link: '/archigent/' },
            { text: '安裝與設定', link: '/archigent/setup' },
            { text: '使用說明', link: '/archigent/usage' },
            { text: '常見問題', link: '/archigent/faq' },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/PIMIYA/aixgood' },
    ],
    footer: {
      message: '洪建全文教基金會 AIxGood 計畫',
      copyright: 'Copyright 2026 Hong Foundation',
    },
    search: {
      provider: 'local',
    },
    outline: {
      label: '本頁目錄',
    },
    docFooter: {
      prev: '上一頁',
      next: '下一頁',
    },
    lastUpdated: {
      text: '最後更新',
    },
  },
  lastUpdated: true,
})
