/*
 * @Author: shen
 * @Date: 2022-05-08 21:03:38
 * @LastEditors: shen
 * @LastEditTime: 2022-05-09 21:11:02
 * @Description:
 */
import type { UserConfig } from "vitepress";
import { head } from "./config/head";
import { sidebars } from "./config/sidebars";
import { nav } from "./config/nav";

export const config: UserConfig = {
  title: "Pro Table",
  description: "An pro table based Vue3 and Element Plus",
  lastUpdated: true,
  head,
  themeConfig: {
    logo: "/images/logo_big.png",
    logoSmall: "/images/logo.png",
    sidebars,
    nav,
  },
};

export default config;
