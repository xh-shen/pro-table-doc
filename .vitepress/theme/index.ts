/*
 * @Author: shen
 * @Date: 2022-05-09 08:25:29
 * @LastEditors: shen
 * @LastEditTime: 2022-07-02 09:27:15
 * @Description:
 */
import ElementPlus from "element-plus";
import ProTable, { setLicenseKey } from "@shene/pro-table";
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
    setLicenseKey(
      "c9e6b0af0c28246b2708c64f6c0c757dRE9NQUlOPXd3dy5iYWlkdS5jb20sRVhQSVJZPTE2NjI3MTM4MDM2Mjc="
    );
    app.use(ElementPlus as any);
    app.use(ProTable);
    globals.forEach(([name, Comp]) => {
      app.component(name, Comp as any);
    });
  },
});
