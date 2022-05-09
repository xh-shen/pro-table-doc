/*
 * @Author: shen
 * @Date: 2022-05-09 08:58:55
 * @LastEditors: shen
 * @LastEditTime: 2022-05-09 16:41:02
 * @Description:
 */
import type { Component } from "vue";
import Home from "./components/home/index.vue";
import Layout from "./layout/index.vue";

import "./styles/app.scss";

export default Layout;

export { default as NotFound } from "./components/common/not-found.vue";

export const globals: [string, Component][] = [["Home", Home]];
