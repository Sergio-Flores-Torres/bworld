import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // Root directory where index.html is located
  root: './',

  // Directory to serve static assets (3D models, textures, sounds)
  publicDir: 'public',

  server: {
    port: 3000,
    open: true, // Automatically opens the app in your browser on startup
    host: true, // Exposes the server to your local network (great for testing on phones/tablets)
  },

  resolve: {
    alias: {
      // Allows clean imports like: import { MyScene } from '@/scene';
      '@': resolve(__dirname, './src'),
    },
  },

  build: {
    // Output directory for the final production build
    outDir: 'dist',
    // Clear the output directory before building
    emptyOutDir: true,
    // Generate source maps for production debugging (set to false to reduce bundle size)
    sourcemap: true,
    
    rollupOptions: {
      output: {
        // Rewrite manualChunks as a function for Vite 8 compatibility
        manualChunks(id) {
          if (id.includes('@babylonjs/core')) {
            return 'babylon';
          }
        },
      },
    },
    // Warn if a single chunk exceeds 1000kb (Babylon is large, so we raise the default limit)
    chunkSizeWarningLimit: 1000,
  },
});
