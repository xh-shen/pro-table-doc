/*
 * @Author: shen
 * @Date: 2022-05-09 12:53:21
 * @LastEditors: shen
 * @LastEditTime: 2022-05-09 21:46:20
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

const exampleSidebars = [
  {
    text: "基本用法",
    link: "/example/basic",
  },
  {
    text: "分页",
    link: "/example/pagination",
  },
  {
    text: "拖拽",
    link: "/example/dragable",
  },
];

const getSidebars = () => {
  return {
    "/guide/": guideSidebars,
    "/example/": exampleSidebars,
  };
};

export const sidebars = getSidebars();
