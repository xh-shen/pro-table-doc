/*
 * @Author: shen
 * @Date: 2022-05-08 21:10:38
 * @LastEditors: shen
 * @LastEditTime: 2022-05-11 20:52:14
 * @Description:
 */
import type { HeadConfig } from "vitepress";
import { baseUrl } from "../utils";

export const head: HeadConfig[] = [
  [
    "link",
    {
      rel: "icon",
      href: `${baseUrl}/favicon.ico`,
    },
  ],
];
