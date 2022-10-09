import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {join,resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 配置路径别名
    alias: [{
      find: '@',replacement: resolve(__dirname,'src')
    },
    {
      find: /~(.+)/,
      replacement: join(process.cwd(), "node_modules/$1")
    }]
  },
  base: "./", // 打包路径
  server: {
    port: 4000,
    open: true, // 服务器启动时是否自动打开浏览器
    cors: true // 允许跨域
  }
})
