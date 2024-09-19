import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  base: '/', // или '/my-project/' если проект размещается в подпапке
})
