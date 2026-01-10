import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// For custom domain: set base to '/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})

