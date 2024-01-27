import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath, URL } from "url";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: fileURLToPath(new URL("./client/public/assets", import.meta.url)),
      src: fileURLToPath(new URL("./client/src", import.meta.url)),
    },
  },
});
