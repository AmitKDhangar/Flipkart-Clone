import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   build: {
    rollupOptions: {
      input: '/src/utilities/main.jsx'  // <-- update this path to your new main.jsx location
    }
  }
})
