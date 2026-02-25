import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// No custom domain: set base to repo sub-path
export default defineConfig({
  plugins: [react()],
  base: '/cozy-innovations/',
})

