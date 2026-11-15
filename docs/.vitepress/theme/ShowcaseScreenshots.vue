<script setup>
import { withBase } from 'vitepress'
import { useData } from 'vitepress'

const { lang } = useData()
</script>

<template>
  <section class="showcase-desk">
    <a
      class="showcase-card showcase-card--left"
      :href="withBase(lang === 'en' ? '/en/archilaw/webapp' : '/archilaw/webapp')"
    >
      <div class="showcase-frame">
        <img :src="withBase('/screenshots/archilaw-webapp.png')" :alt="lang === 'en' ? 'ArchiLAW Web App' : 'ArchiLAW Web App'" loading="lazy" />
      </div>
      <span class="showcase-label">ArchiLAW Web App</span>
    </a>
    <a
      class="showcase-card showcase-card--right"
      :href="withBase(lang === 'en' ? '/en/archigent/' : '/archigent/')"
    >
      <div class="showcase-frame">
        <img :src="withBase('/screenshots/archigent-workbench.png')" :alt="lang === 'en' ? 'Archigent Workbench' : 'Archigent 建築工作台'" loading="lazy" />
      </div>
      <span class="showcase-label">{{ lang === 'en' ? 'Archigent Workbench' : 'Archigent 建築工作台' }}</span>
    </a>
  </section>
</template>
