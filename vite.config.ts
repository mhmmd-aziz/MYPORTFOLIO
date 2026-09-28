import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  assetsInclude: ['**/*.glb'],
  build: {
    rollupOptions: {
      output: {
        // Function form required by Rollup's ManualChunksFunction type
        manualChunks(id) {
          if (id.includes('@react-three/rapier') || id.includes('@dimforge')) {
            return 'vendor-rapier'
          }
          if (id.includes('@react-three/fiber') || id.includes('@react-three/drei')) {
            return 'vendor-r3f'
          }
          if (id.includes('/three/') || id.includes('/meshline/')) {
            return 'vendor-three'
          }
          if (id.includes('framer-motion')) {
            return 'vendor-framer'
          }
          if (
            id.includes('/react/') ||
            id.includes('/react-dom/') ||
            id.includes('react-router-dom')
          ) {
            return 'vendor-react'
          }
        },
      },
    },
    // Increase chunk size warning threshold (Three.js is inherently large)
    chunkSizeWarningLimit: 1000,
  },
})
