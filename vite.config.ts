import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import {nodePolyfills} from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills()],
  server: {
    host: "127.0.0.1",
    port: 3000,
  },
  base: '/my-twa/'
});
