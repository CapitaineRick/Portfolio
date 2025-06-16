import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react']
  },
  publicDir: 'public',
  server: {
    watch: {
      usePolling: true,
    },
    // Configuration pour servir les fichiers statiques correctement
    middlewareMode: false,
    fs: {
      // Permettre l'accès aux fichiers dans public
      allow: ['..']
    }
  },
  build: {
    rollupOptions: {
      output: {
        // nécessaire pour les workers dans certaines configs
        manualChunks: undefined,
      },
    },
  },
  // Configuration pour éviter que React Router intercepte les fichiers PHP
  appType: 'spa',
  base: './'
});