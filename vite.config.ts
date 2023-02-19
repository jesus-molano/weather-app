import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@styles': '/src/styles',
      '@types': '/src/types',
      '@utils': '/src/utils',
      '@api': '/src/api',
      '@hooks': '/src/hooks'
    }
  }
})
