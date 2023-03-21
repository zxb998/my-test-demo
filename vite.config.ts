import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue(),
  ],
  resolve: {
    // 设置别名
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    port: 8080,
    hmr: true,
    cors: true,
    open: true,
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'your https address',
        changeOrigin: true,
        // rewrite: (path: string) => path.replace(/^\/api/, '')
      }
    }
  }
})
