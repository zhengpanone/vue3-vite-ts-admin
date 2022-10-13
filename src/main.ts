import { createApp } from 'vue'
import '@/style.css'
// 引入路由
import router from '@/router/index'
import App from './App.vue'

// console.log(import.meta.env.VITE_BASE_URL)

createApp(App).use(router).mount('#app')
