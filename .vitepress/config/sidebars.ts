/*
 * @Author: shen
 * @Date: 2022-05-09 12:53:21
 * @LastEditors: shen
 * @LastEditTime: 2022-05-11 16:10:30
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
        text: "分页展示",
        link: "/demo/pagination",
      },
      {
        text: "行列拖拽",
        link: "/demo/dragable",
      },
      {
        text: "排序和过滤",
        link: "/demo/filter",
      },
      {
        text: "多选和单选",
        link: "/demo/selection",
      },
      {
        text: "树形和展开行",
        link: "/demo/tree",
      },
      {
        text: "合并单元格",
        link: "/demo/group",
      },
    ],
  },
  {
    text: "进阶",
    children: [
      {
        text: "自定义样式",
        link: "/demo/style",
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
