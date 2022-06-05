import { createApp } from 'vue'
import { createPinia } from 'pinia'
import FloatingVue from 'floating-vue'

import App from './App.vue'
import router from './router'

import './assets/base.css'
import 'floating-vue/dist/style.css'
import { FloatingVueConfig } from 'floating-vue/dist/config'

const app = createApp(App)

export const config: FloatingVueConfig = {
    themes: {
      tooltip: {
        // Default events that trigger the tooltip
        triggers: ['hover', 'focus'],
        // Close tooltip on click on tooltip target
        hideTriggers: events => [...events],
        // Delay (ms)
        delay: {
          show: 0,
          hide: 0,
        },
      },
    },
  }

app.use(createPinia())
app.use(FloatingVue, config)
app.use(router)

app.mount('#app')
