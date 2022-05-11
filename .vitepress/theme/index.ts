/*
 * @Author: shen
 * @Date: 2022-05-09 08:25:29
 * @LastEditors: shen
 * @LastEditTime: 2022-05-11 16:30:58
 * @Description:
 */
import ElementPlus from "element-plus";
import ProTable from "@shene/pro-table";
// import zhCn from "element-plus/es/locale/lang/zh-cn";
import Layout, { globals, NotFound } from "../vitepress";
import { define } from "../utils/types";
import "element-plus/dist/index.css";
import "@shene/pro-table/dist/index.css";
import "./style.css";
import "uno.css";

import type { Theme } from "vitepress";

export default define<Theme>({
  NotFound,
  Layout,
  enhanceApp: ({ app }) => {
    app.use(ElementPlus, {
      // locale: zhCn,
    });
    app.use(ProTable);
    globals.forEach(([name, Comp]) => {
      app.component(name, Comp);
    });
  },
});
