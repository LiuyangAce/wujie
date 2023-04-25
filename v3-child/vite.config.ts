import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5176,
    host: '127.0.0.1',
    https: false
  },
  plugins: [vue()],
})
