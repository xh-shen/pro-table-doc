/*
 * @Author: shen
 * @Date: 2022-05-09 12:53:21
 * @LastEditors: shen
 * @LastEditTime: 2022-05-10 16:03:19
 * @Description:
 */
const guideSidebars = [
  {
    text: "基础",
    children: [
      {
        text: "快速开始",
        link: "/guide/quickstart",
      },
    ],
  },
  {
    text: "进阶",
    children: [
      {
        text: "国际化",
        link: "/guide/i18n",
      },
      {
        text: "主题",
        link: "/guide/theming",
      },
    ],
  },
];

const docSidebars = [
  {
    text: "文档",
    children: [
      {
        text: "API",
        link: "/doc/api",
      },
    ],
  },
];

const demoSidebars = [
  {
    text: "基础",
    children: [
      {
        text: "基本用法",
        link: "/demo/basic",
      },
      {
        text: "分页",
        link: "/demo/pagination",
      },
      {
        text: "拖拽",
        link: "/demo/dragable",
      },
    ],
  },
];

const getSidebars = () => {
  return {
    "/guide/": guideSidebars,
    "/doc/": docSidebars,
    "/demo/": demoSidebars,
  };
};

export const sidebars = getSidebars();
