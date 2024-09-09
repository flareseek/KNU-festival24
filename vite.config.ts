import { defineConfig } from "vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin(),
    svgr({
      svgrOptions: {
        dimensions: false, // svg의 width, height 속성을 제거하고 css에 의존이 되도록 함
      }
    }),
  ],
});
