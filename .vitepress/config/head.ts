/*
 * @Author: shen
 * @Date: 2022-05-08 21:10:38
 * @LastEditors: shen
 * @LastEditTime: 2022-05-09 19:26:35
 * @Description:
 */
import type { HeadConfig } from "vitepress";

export const head: HeadConfig[] = [
  [
    "link",
    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ],
  [
    "link",
    {
      rel: "stylesheet",
      href: "//unpkg.com/nprogress@0.2.0/nprogress.css",
    },
  ],
];
