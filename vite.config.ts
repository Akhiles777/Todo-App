/*
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ghPages from 'vite-plugin-gh-pages'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),ghPages()],
})
*/


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  base: '/Todo-App/', // <-- обязательно!
})
