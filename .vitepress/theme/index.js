import DefaultTheme from 'vitepress/theme'
import Giscus from '@giscus/vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Giscus', Giscus)
  }
}