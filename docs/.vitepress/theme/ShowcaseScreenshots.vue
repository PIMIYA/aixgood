<script setup>
import { withBase } from 'vitepress'
import { useData } from 'vitepress'

const { lang } = useData()

const items = [
  {
    key: 'archilaw',
    img: '/screenshots/archilaw-webapp.png',
    zh: 'ArchiLAW Web App',
    en: 'ArchiLAW Web App',
    linkZh: '/archilaw/webapp',
    linkEn: '/en/archilaw/webapp',
  },
  {
    key: 'archigent',
    img: '/screenshots/archigent-workbench.png',
    zh: 'Archigent 建築工作台',
    en: 'Archigent Workbench',
    linkZh: '/archigent/',
    linkEn: '/en/archigent/',
  },
]
</script>

<template>
  <section class="showcase">
    <a
      v-for="item in items"
      :key="item.key"
      :href="withBase(lang === 'en' ? item.linkEn : item.linkZh)"
      class="showcase-card"
    >
      <div class="showcase-frame">
        <img :src="withBase(item.img)" :alt="lang === 'en' ? item.en : item.zh" loading="lazy" />
      </div>
      <span class="showcase-label">{{ lang === 'en' ? item.en : item.zh }}</span>
    </a>
  </section>
</template>
