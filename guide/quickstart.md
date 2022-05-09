---
title: 快速开始
---

# 快速开始

本节将介绍如何在项目中使用 Pro Table。

## 环境支持

Pro Table 可以在支持 [ES2018](https://caniuse.com/?feats=mdn-javascript_builtins_regexp_dotall,mdn-javascript_builtins_regexp_lookbehind_assertion,mdn-javascript_builtins_regexp_named_capture_groups,mdn-javascript_builtins_regexp_property_escapes,mdn-javascript_builtins_symbol_asynciterator,mdn-javascript_functions_method_definitions_async_generator_methods,mdn-javascript_grammar_template_literals_template_literal_revision,mdn-javascript_operators_destructuring_rest_in_objects,mdn-javascript_operators_spread_spread_in_destructuring,promise-finally) and [ResizeObserver](https://caniuse.com/resizeobserver).
的浏览器上运行。 如果您确实需要支持旧版本的浏览器, 请自行添加 [Babel](https://babeljs.io/) 和相应的 Polyfill 。

由于 Vue 3 不再支持 IE11，Pro Table 也不再支持 IE 浏览器。

| ![IE](https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png) | ![Firefox](https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png) | ![Chrome](https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png) | ![Safari](https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png) |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| Edge ≥ 79                                                              | Firefox ≥ 78                                                                      | Chrome ≥ 64                                                                    | Safari ≥ 12                                                                    |

## 使用包管理器

我们建议您使用包管理器 (npm, [yarn](https://classic.yarnpkg.com/lang/en/), [pnpm](https://pnpm.io/)) 安装 Pro Table, 然后您就可以使用打包工具，例如 [Vite](https://vitejs.dev) 和
[webpack](https://webpack.js.org/)

```shell
# 选择一个你喜欢的包管理器

# npm
$ npm install @shene/pro-table --save

# yarn
$ yarn add @shene/pro-table

# pnpm
$ pnpm install @shene/pro-table
```

## 在项目中使用

我们建议直接在入口处导入进行全局注册，组件内部会自动注册子组件（`ProTableColumn`、 `ProTableColumnGroup`、 `ProTableSummary`、 `ProTableSummaryRow`、 `ProTableSummaryCell`）：

```ts
import { createApp } from "vue";
import ProTable from "@shene/pro-table";
import App from "./App.vue";
import "@shene/pro-table/dist/index.css";

const app = createApp(App);

app.use(ProTable);
app.mount("#app");
```

在模板中的对应使用的组件名称为下划线，如：`ProTable` 对应 `pro-table` 等等：

```html
<pro-table :columns="columns" :data-source="dataSource"></pro-table>
```
