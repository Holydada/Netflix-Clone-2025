import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Matches Netlify's publish directory
  },
  base: "/Netflix-Clone-2025/", // Matches homepage for GitHub Pages
});
