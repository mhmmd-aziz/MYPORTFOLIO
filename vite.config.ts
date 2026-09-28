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
        manualChunks: {
          // Core React — always needed
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          // Animation — loaded upfront but separate from vendor
          'vendor-framer': ['framer-motion'],
          // Three.js ecosystem — only loaded when Lanyard is triggered
          'vendor-three': ['three', 'meshline'],
          'vendor-r3f': ['@react-three/fiber', '@react-three/drei'],
          'vendor-rapier': ['@react-three/rapier'],
        },
      },
    },
    // Increase chunk size warning threshold (Three.js is inherently large)
    chunkSizeWarningLimit: 1000,
  },
})
