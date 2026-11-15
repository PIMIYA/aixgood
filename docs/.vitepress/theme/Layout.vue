<script setup>
import DefaultTheme from 'vitepress/theme'
import HeroLogos from './HeroLogos.vue'
import HeroManifesto from './HeroManifesto.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #home-hero-image>
      <HeroLogos />
    </template>
    <template #home-hero-actions-after>
      <HeroManifesto />
    </template>
  </Layout>
</template>
