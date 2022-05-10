---
title: 快速开始
---

# 快速开始

本节将介绍如何在项目中使用 Pro Table。

## 环境支持

由于 Vue 3 不再支持 IE11，Pro Table 也不再支持 IE 浏览器。

| ![IE](https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png) | ![Firefox](https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png) | ![Chrome](https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png) | ![Safari](https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png) |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| Edge ≥ 79                                                              | Firefox ≥ 78                                                                      | Chrome ≥ 64                                                                    | Safari ≥ 12                                                                    |

## 使用包管理器

我们建议您使用包管理器 (npm, [yarn](https://classic.yarnpkg.com/lang/en/), [pnpm](https://pnpm.io/)) 安装 Pro Table

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

### 全局注册

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

```vue
<script setup lang="ts">
interface DataItem {
  key: number;
  name: string;
  age: number;
  address: string;
}

const columns = [
  {
    title: "Full Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  //...
  {
    title: "Column 3",
    dataIndex: "address",
  },
  {
    title: "Column 4",
    dataIndex: "address",
  },
  { title: "Column 5", dataIndex: "address" },
];
const data: DataItem[] = [];
for (let i = 0; i < 1000; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: i + 1,
    address: `London Park no. ${i}`,
  });
}
</script>

<template>
  <pro-table :columns="columns" :data-source="dataSource"></pro-table>
</template>
```

### 局部注册

下面示例使用了单文件组件 \<script setup\> 方式，导入即可直接使用

```vue
<script setup lang="ts">
import ProTable from "@shene/pro-table";

interface DataItem {
  key: number;
  name: string;
  age: number;
  address: string;
}

const columns = [
  {
    title: "Full Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  //...
  {
    title: "Column 3",
    dataIndex: "address",
  },
  {
    title: "Column 4",
    dataIndex: "address",
  },
  { title: "Column 5", dataIndex: "address" },
];
const data: DataItem[] = [];
for (let i = 0; i < 1000; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: i + 1,
    address: `London Park no. ${i}`,
  });
}
</script>

<template>
  <ProTable :columns="columns" :data-source="dataSource"></ProTable>
</template>
```
