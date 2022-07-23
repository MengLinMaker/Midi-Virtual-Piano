import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
const favicon = './assets/favicon.590551ac.svg'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src',
  build: {
    outDir: '../docs'
  },
  plugins: [
    react(),
    VitePWA({
      includeAssets: [favicon],
      manifest: {
        theme_color: '#ffffff',
        icons: [
          {
            src: favicon,
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'maskable any'
          }
        ]
      },
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      }
    })
  ]
})
