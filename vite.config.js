import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/simple-e-commerce-website-React.js",
  plugins: [react(),tailwindcss(),],
})
