import { defineConfig } from 'vite'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  // Reemplaza por el nombre exacto de tu repositorio
  base: '/plan-de-estudio/',

  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        embudos: resolve(__dirname, 'embudos.html'),
        dataScience: resolve(__dirname, 'data-science.html')
      }
    }
  }
})
