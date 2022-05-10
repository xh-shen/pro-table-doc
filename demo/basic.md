---
title: 基本用法
---

# 基本用法

## 简单表格

基础的表格展示用法

:::demo 最简单的用法。你只需要配置 `columns` 和 `dataSource` 即可展示表格。组件默认开启了分页

basic/basic

:::

## 带斑马纹表格

使用带斑马纹的表格，可以更容易区分出不同行的数据。

:::demo `stripe` 属性可以创建带斑马纹的表格。 如果 `true`, 表格将会带有斑马纹。

basic/striped

:::

## 带边框表格

:::demo 默认情况下，Table 组件是不具有竖直方向的边框的， 如果需要，可以使用 `bordered` 属性，把该属性设置为 `true` 即可启用。

basic/bordered

:::

## 表头吸顶

:::demo 对于长表格，需要滚动才能查看表头，那么现在可以设置跟随页面固定表头。设置`sticky` 为 `true` 或通过 `{offsetHeader: number}` 指定距离。

basic/stickyed

:::
