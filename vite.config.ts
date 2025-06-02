import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/siteuniig/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});