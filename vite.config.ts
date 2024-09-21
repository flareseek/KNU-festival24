import { defineConfig } from "vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { imagetools } from "vite-imagetools";
import compression from "vite-plugin-compression2";

export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin(),
    compression({
      include: /\.(js|css|html|svg)$/, // 압축할 파일 확장자 지정
      threshold: 1400, // 1.4kb 이상 파일만 압축
    }),
    svgr({
      svgrOptions: {
        dimensions: false, // svg의 width, height 속성을 제거하고 css에 의존이 되도록 함
      },
    }),
    imagetools({
      exclude: "**/*.webp",
      defaultDirectives: () =>
        new URLSearchParams({
          format: "webp",
          quality: "80", // 품질을 80%로 설정하여 손실 압축 적용
          removeMetadata: "",
          h: "1080",
        }),
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id: string) => {
          if (id.includes("node_modules")) {
            const module: string = id.split("node_modules/").pop()!.split("/")[0];
            if (module.includes("react")) {
              return "react-vendor";
            }
            // if (module.includes("poo")) {
            //   return "poo-vendor";
            // }
            return `vendor-${module}`;
          }
        },
      },
    },
  },
});
