import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" permite publicar en cualquier subcarpeta (GitHub Pages, Netlify, etc.)
export default defineConfig({ plugins: [react()], base: "./" });
