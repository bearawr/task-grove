import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa' // added 

// https://vite.dev/config/
export default defineConfig({
  plugins: [ // expanded
    react(),
    VitePWA({ // added VitePWA
        registerType: 'autoUpdate',
        includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
        manifest: {
            name: 'Task Grove',
            short_name: 'Grove',
            description: 'Priority task management with nature theme.',
            theme_color: '#109780',
            background_color: '#ffffff',
            display: 'standalone',
            icons: [
                {
                    src: 'pwa-192x192.png', // TODO
                    sizes: '192x192',
                    type: 'image/png'
                },
                {
                    src: 'pwa-512x512.png',
                    sizes: '512x512',
                    type: 'image/png'
                }
            ]
        },
        workbox: {
            globPatterns: ['**/*.{js,css,html,ico,png,svg}']
        }
    })
]
})
