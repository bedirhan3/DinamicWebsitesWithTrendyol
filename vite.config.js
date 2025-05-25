import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/trendyol': {
        target: 'https://www.trendyol.com/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/trendyol/, ''),
        secure: false
      }
    }
  },
  build: {
    sourcemap: false,
    cssCodeSplit: false
  },
  css: {
    devSourcemap: false
  }
})
