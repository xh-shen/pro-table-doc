/*
 * @Author: shen
 * @Date: 2022-05-09 08:58:55
 * @LastEditors: shen
 * @LastEditTime: 2022-05-10 16:49:30
 * @Description:
 */
import type { Component } from "vue";
import Home from "./components/home/index.vue";
import Layout from "./layout/index.vue";
import Demo from "./components/demo/index.vue";

import "./styles/css-vars.scss";
import "./styles/app.scss";

export default Layout;

export { default as NotFound } from "./components/common/not-found.vue";

export const globals: [string, Component][] = [
  ["Home", Home],
  ["Demo", Demo],
];
