import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join, resolve } from 'path'
import eslintPlugin from 'vite-plugin-eslint'
import StylelintPlugin from 'vite-plugin-stylelint'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Inspect from 'vite-plugin-inspect'
const pathSrc = resolve(__dirname, './src')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin(),
    StylelintPlugin({ fix: true }),
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue'],
      resolvers: [
        // ElementPlusResolver(),
        // 自动导入图标组件
        /*  IconsResolver({
          prefix: 'Icon'
        }) */
      ],
      dts: resolve(pathSrc, 'auto-imports.d.ts')
    }),
    Components({
      resolvers: [
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ['ep']
        }),
        ElementPlusResolver()
      ],
      dts: resolve(pathSrc, 'components.d.ts')
    }),
    Icons({
      autoInstall: true
    }),
    Inspect()
  ],
  resolve: {
    // 配置路径别名
    alias: [
      {
        find: '@',
        replacement: pathSrc
      },
      {
        find: /~(.+)/,
        replacement: join(process.cwd(), 'node_modules/$1')
      }
    ],
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '@/assets/style/main.scss';`
      }
    }
  },
  base: './', // 打包路径
  server: {
    host: '0.0.0.0', // 通过ip的形式访问
    port: 4000, // 端口号
    open: true, // 服务器启动时是否自动打开浏览器
    cors: true // 允许跨域
    // 配置代理，不推荐前端去代理，
    // 因为打包后便不会在有代理
    /* proxy: {
      '/api': {
          target: 'http://API网关所在域名',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
      },
    } */
  }
})
