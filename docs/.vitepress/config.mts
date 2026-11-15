import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AIxGood',
  description: '洪建全基金會 AIxGood 計畫 — ArchiLAW 與 Archigent 服務文件',
  base: '/aixgood/',
  head: [
    ['meta', { name: 'theme-color', content: '#FAFAF6' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['script', {}, `
      ;(function(){
        var k='vitepress-theme-appearance';
        if(!localStorage.getItem(k)){
          document.documentElement.classList.remove('dark');
          localStorage.setItem(k,'light');
        }
      })();
    `],
  ],
  locales: {
    root: {
      label: '繁體中文',
      lang: 'zh-TW',
      themeConfig: {
        nav: [
          { text: '首頁', link: '/' },
          { text: 'ArchiLAW', link: '/archilaw/' },
          { text: 'Archigent', link: '/archigent/' },
        ],
        sidebar: {
          '/archilaw/': [
            {
              text: 'ArchiLAW 法規知識庫',
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
              text: 'Archigent 建築工作台',
              items: [
                { text: '介紹', link: '/archigent/' },
                { text: '安裝與設定', link: '/archigent/setup' },
                { text: '使用說明', link: '/archigent/usage' },
                { text: '圖文使用手冊', link: '/archigent/guide' },
                { text: '常見問題', link: '/archigent/faq' },
              ],
            },
          ],
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
    },
    en: {
      label: 'English',
      lang: 'en',
      description: 'Hong Foundation AIxGood Program -- ArchiLAW and Archigent documentation',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'ArchiLAW', link: '/en/archilaw/' },
          { text: 'Archigent', link: '/en/archigent/' },
        ],
        sidebar: {
          '/en/archilaw/': [
            {
              text: 'ArchiLAW Knowledge Base',
              items: [
                { text: 'Overview', link: '/en/archilaw/' },
                { text: 'Features', link: '/en/archilaw/features' },
                { text: 'MCP Guide', link: '/en/archilaw/mcp-guide' },
                { text: 'Web App', link: '/en/archilaw/webapp' },
                { text: 'FAQ', link: '/en/archilaw/faq' },
              ],
            },
          ],
          '/en/archigent/': [
            {
              text: 'Archigent Workbench',
              items: [
                { text: 'Overview', link: '/en/archigent/' },
                { text: 'Setup', link: '/en/archigent/setup' },
                { text: 'Usage', link: '/en/archigent/usage' },
                { text: 'Illustrated Guide', link: '/en/archigent/guide' },
                { text: 'FAQ', link: '/en/archigent/faq' },
              ],
            },
          ],
        },
        outline: {
          label: 'On this page',
        },
        docFooter: {
          prev: 'Previous',
          next: 'Next',
        },
        lastUpdated: {
          text: 'Last updated',
        },
      },
    },
  },
  themeConfig: {
    logo: {
      light: '/hong-mark.svg',
      dark: '/hong-mark.svg',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/PIMIYA/aixgood' },
    ],
    footer: {
      message: '洪建全基金會',
      copyright: 'Copyright 2026 洪建全基金會',
    },
    search: {
      provider: 'local',
    },
  },
  lastUpdated: true,
})
