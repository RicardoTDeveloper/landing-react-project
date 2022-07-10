import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react()],
   resolve: {
      alias: {
         services: path.resolve(__dirname, "./src/services"),
         hooks: path.resolve(__dirname, "./src/hooks"),
      },
   },
});
