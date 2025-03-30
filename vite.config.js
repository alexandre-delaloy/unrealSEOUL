import { defineConfig } from 'vite';

export default defineConfig({
  base: '/unrealSEOUL/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
});