import path, { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "FormWizardReact",
      fileName: (format) => `index.${format}.js`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        assetFileNames: "style.css", // Ensure CSS is output as expected
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    outDir: "dist", // Ensure the build output goes to the 'dist' folder
    emptyOutDir: true, // Clear the output directory before building
  },
  plugins: [react(), dts()],
  server: {
    host: true,
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      src: "/src",
    },
  },
});
