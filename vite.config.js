import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  base: "./portfolio",
  plugins: [react()],
  server: {
    host: process.env.VITE_HOST || "0.0.0.0",
    port: process.env.VITE_PORT || 4010,
  },
  // divind the chunk file
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
});
