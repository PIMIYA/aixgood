<script setup>
import { useData } from 'vitepress'
const { localeIndex } = useData()
</script>

<template>
  <p class="hero-manifesto">
    <template v-if="localeIndex === 'en'">
      AI as the architect's trusted assistant: every regulation cited, every step approved by the architect, every drawing kept on your own computer.
    </template>
    <template v-else>
      讓 AI 成為建築師可信賴的助手：法規有出處，每一步由建築師核准，圖面資料留在自己的電腦。
    </template>
  </p>
</template>
