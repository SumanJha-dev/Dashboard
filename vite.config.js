import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import fixMimePlugin from "./vite-plugin-fix-mime";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), fixMimePlugin()],
  server: {
    headers: {
      // Ensure JavaScript modules are served with the correct MIME type
      '*.js': {
        'Content-Type': 'application/javascript; charset=utf-8',
      },
      '*.mjs': {
        'Content-Type': 'application/javascript; charset=utf-8',
      },
      '*.ts': {
        'Content-Type': 'application/javascript; charset=utf-8',
      },
      '*.jsx': {
        'Content-Type': 'application/javascript; charset=utf-8',
      },
      '*.tsx': {
        'Content-Type': 'application/javascript; charset=utf-8',
      },
    },
    // Prevent CORS issues
    cors: true,
  },
  build: {
    sourcemap: true,
    // Ensure assets are properly handled
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        format: 'es',
        // Ensure proper chunking
        manualChunks: undefined,
      },
    },
  },
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
  },
});












