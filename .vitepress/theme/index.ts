/*
 * @Author: shen
 * @Date: 2022-05-09 08:25:29
 * @LastEditors: shen
 * @LastEditTime: 2022-05-09 16:41:23
 * @Description:
 */
import ElementPlus from "element-plus";
import ProTable from "@shene/pro-table";

import Layout, { globals, NotFound } from "../vitepress";
import { define } from "../utils/types";
import "element-plus/dist/index.css";
import "@shene/pro-table/style";
import "uno.css";

import type { Theme } from "vitepress";

export default define<Theme>({
  NotFound,
  Layout,
  enhanceApp: ({ app }) => {
    app.use(ElementPlus);
    app.use(ProTable);
    globals.forEach(([name, Comp]) => {
      app.component(name, Comp);
    });
  },
});
