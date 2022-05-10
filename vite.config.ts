/*
 * @Author: shen
 * @Date: 2022-05-09 08:30:15
 * @LastEditors: shen
 * @LastEditTime: 2022-05-10 20:04:09
 * @Description:
 */
import path from "path";
import Inspect from "vite-plugin-inspect";
import { defineConfig, loadEnv } from "vite";
import UnoCSS from "unocss/vite";
import mkcert from "vite-plugin-mkcert";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { MarkdownTransform } from "./.vitepress/plugins/markdown-transform";

export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const optimizeDeps = ["vue", "@vue/shared", "nprogress"];
  return {
    server: {
      host: true,
      https: !!env.HTTPS,
      fs: {
        allow: [],
      },
    },
    resolve: {
      alias: [
        {
          find: "~/",
          replacement: `${path.resolve(__dirname, "./.vitepress/vitepress")}/`,
        },
        {
          find: /^@shene\/pro-table$/,
          replacement: path.resolve(__dirname, "./core/src"),
        },
        {
          find: /^@shene\/pro-table\/style$/,
          replacement: path.resolve(__dirname, "./core/src/style"),
        },
      ],
    },
    plugins: [vueJsx(), UnoCSS(), MarkdownTransform(), Inspect(), mkcert()],
    optimizeDeps: {
      include: optimizeDeps,
    },
  };
});
