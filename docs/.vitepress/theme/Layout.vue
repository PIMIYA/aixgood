<script setup>
import DefaultTheme from 'vitepress/theme'
import HeroLogos from './HeroLogos.vue'
import HeroManifesto from './HeroManifesto.vue'
import ShowcaseScreenshots from './ShowcaseScreenshots.vue'

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
    <template #home-features-after>
      <ShowcaseScreenshots />
    </template>
  </Layout>
</template>
