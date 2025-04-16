import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "ImageGallery",
      fileName: (format) => `image-gallery.${format}.js`,
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    },
  },
  server: {
    open: "/demo/index.html",
  },
  css: {
    modules: {
      scopeBehaviour: "local",
    },
  },
});
