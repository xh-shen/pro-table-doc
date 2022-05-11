/*
 * @Author: shen
 * @Date: 2022-05-08 21:03:38
 * @LastEditors: shen
 * @LastEditTime: 2022-05-11 21:04:00
 * @Description:
 */
import type { UserConfig } from "vitepress";
import { head } from "./config/head";
import { sidebars } from "./config/sidebars";
import { nav } from "./config/nav";
import { mdPlugin } from "./config/plugins";
import { baseUrl } from "./utils";

const buildTransformers = () => {
  const transformer = () => {
    return {
      props: [],
      needRuntime: true,
    };
  };

  const transformers = {};
  const directives = [
    "infinite-scroll",
    "loading",
    "popover",
    "click-outside",
    "repeat-click",
    "trap-focus",
    "mousewheel",
    "resize",
  ];
  directives.forEach((k) => {
    transformers[k] = transformer;
  });

  return transformers;
};

export const config: UserConfig = {
  title: "Pro Table",
  description: "An pro table based Vue3 and Element Plus",
  lastUpdated: true,
  lang: "",
  head,
  base: `${baseUrl}/`,
  themeConfig: {
    logo: "/images/logo_big.png",
    logoSmall: "/images/logo.png",
    sidebars,
    nav,
  },
  markdown: {
    config: (md) => mdPlugin(md),
  },
  vue: {
    template: {
      ssr: true,
      compilerOptions: {
        directiveTransforms: buildTransformers(),
      },
    },
  },
};

export default config;
