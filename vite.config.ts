/*
 * @Author: shen
 * @Date: 2022-05-09 08:30:15
 * @LastEditors: shen
 * @LastEditTime: 2022-05-11 16:28:10
 * @Description:
 */
import path from "path";
import Inspect from "vite-plugin-inspect";
import { defineConfig, loadEnv } from "vite";
import UnoCSS from "unocss/vite";
import mkcert from "vite-plugin-mkcert";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { MarkdownTransform } from "./.vitepress/plugins/markdown-transform";

import type { Alias } from "vite";

const alias: Alias[] = [
  {
    find: "~/",
    replacement: `${path.resolve(__dirname, "./.vitepress/vitepress")}/`,
  },
];
if (process.env.DOC_ENV !== "production") {
  alias.push(
    {
      find: /^@shene\/pro-table$/,
      replacement: path.resolve(__dirname, "./core/src"),
    },
    {
      find: /^@shene\/pro-table\/dist\/index.css$/,
      replacement: path.resolve(__dirname, "./core/src/style"),
    }
  );
}

export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    server: {
      host: true,
      https: !!env.HTTPS,
      fs: {
        allow: [],
      },
    },
    resolve: {
      alias,
    },
    plugins: [vueJsx(), UnoCSS(), MarkdownTransform(), Inspect(), mkcert()],
  };
});
