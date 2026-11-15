<script setup>
import { useData, withBase } from 'vitepress'
const { localeIndex } = useData()
</script>

<template>
  <div class="hero-logos">
    <a :href="withBase(localeIndex === 'en' ? '/en/archilaw/' : '/archilaw/')" class="hero-logo-item">
      <img :src="withBase('/archilaw-icon.png')" alt="ArchiLAW">
      <span>ArchiLAW</span>
    </a>
    <a :href="withBase(localeIndex === 'en' ? '/en/archigent/' : '/archigent/')" class="hero-logo-item">
      <img :src="withBase('/archigent-icon.png')" alt="Archigent">
      <span>Archigent</span>
    </a>
  </div>
</template>
