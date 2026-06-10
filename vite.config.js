import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const root = dirname(fileURLToPath(import.meta.url))

// Multi-page setup: each section of the portfolio is its own .html entry.
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        sobre: resolve(root, 'sobre.html'),
        projetos: resolve(root, 'projetos.html'),
        blog: resolve(root, 'blog.html'),
        contato: resolve(root, 'contato.html'),
      },
    },
  },
})
