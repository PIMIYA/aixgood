import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import HeroLogos from './HeroLogos.vue'
import HeroManifesto from './HeroManifesto.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-image': () => h(HeroLogos),
      'home-hero-actions-after': () => h(HeroManifesto),
    })
  },
}
