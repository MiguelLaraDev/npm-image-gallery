import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
    }),
  ],
  resolve: {
    alias: [
      { find: "@assets", replacement: path.resolve(__dirname, "src/assets") },
      { find: "@styles", replacement: path.resolve(__dirname, "src/styles") },
    ],
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "MLaraDevImageGallery",
      fileName: (format) => `mlaradev-image-gallery.${format}.js`,
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: [],
      output: {
        inlineDynamicImports: true,
        preserveModules: false,
        manualChunks: undefined,
      },
    },
    emptyOutDir: true,
    sourcemap: false,
    manifest: false,
    cssCodeSplit: false,
    copyPublicDir: false,
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
