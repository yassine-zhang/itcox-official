import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 如果只想导入css变量
import 'element-plus/theme-chalk/dark/css-vars.css'
import './styles/dark/css-vars.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
