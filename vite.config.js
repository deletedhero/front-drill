import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

  // adding proxy  //

  server:{
    proxy:{
      '/api': 'http://localhost:3000',
    } 
  },
  plugins: [react()],
})
