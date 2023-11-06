import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

// https://vitejs.dev/config/
const config = defineConfig({
  plugins: [react()],
  base: '',
  build: {
    minify: true,
    outDir: 'dist',
    assetsDir: 'assets',
    assetsInlineLimit: 0, // Disable inlining assets
    chunkSizeWarningLimit: 1500, // Adjust chunk size warning limit if needed
    rollupOptions: {
      output: {
        dir: "dist",
        entryFileNames: "main.js",
        assetFileNames: "main.[ext]",
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@scss': path.resolve(__dirname, './src/scss'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@components': path.resolve(__dirname, './src/components'),
      '@blocks': path.resolve(__dirname, './src/components/blocks'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@contexts': path.resolve(__dirname, './src/contexts'),
      '@reducers': path.resolve(__dirname, './src/reducers'),
    },
  },
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@import "./src/scss/style.scss";`, // Import your main styles file
      },
    },
  },
});

// Check if OZOPANEL_DEBUG environment variable is not set or set to a truthy value
if (!process.env.OZOPANEL_DEBUG) {
  config.base = '/wp-content/plugins/ozopanel/dist/';
  config.build.rollupOptions.input = {
    main: 'src/main.tsx',
  };
}

export default config;