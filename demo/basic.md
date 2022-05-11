---
title: 基本用法
---

# 基本用法

下面示例介绍了组件的最基本功能，足以满足很多复杂的场景。

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

## 固定表头

纵向内容过多时，可选择固定表头。

:::demo 只要设置`scroll="{ y: 400 }"`，即可实现固定表头的表格，而不需要额外的代码。

basic/fixed-header

:::

## 固定列

横向内容过多时，可选择固定列。

:::demo 固定列需要使用列配置的 `fixed` 属性，它接受 Boolean 值 如果为 `true`, 列将被左侧固定. 它还接受传入字符串，left 或 right，表示左边固定还是右边固定。你需要设置 `scroll="{ x: 1000 }"` 或者 给每一列都设置宽度，当 `scrollX` 或 列宽总和超过表格宽度时出现滚动条。

basic/fixed-column

:::

## 固定列和表头

横纵内容过多时，可选择固定列和表头。

:::demo 固定列和表头可以同时使用，只需要将上述两个属性分别设置好即可。

basic/fixed-column-and-header

:::

## 表头吸顶

:::demo 对于长表格，需要滚动才能查看表头，那么现在可以设置跟随页面固定表头。设置`sticky` 为 `true` 或通过 `{offsetHeader: number}` 指定距离。

basic/stickyed

:::

## 固定高度

固定表格高度，不受内容多少的影响。

:::demo 只需设置`height`即可，`height` 和 `scroll.y` 一般只需要设置一个，当然你可以同时设置，组合出你想要的效果。

basic/fixed-height

:::

## 表头分组

数据结构比较复杂的时候，可使用表头分组来展现数据的层次关系。

:::demo 列配置`columns[n]` 可以内嵌 `children`，以渲染分组表头。

basic/grouping-header

:::

## 页脚

表格底部有额外内容时，可以使用

:::demo 使用插槽`footer`即可实现

basic/footer

:::

## 表尾总结栏

若表格尾部需要总显示数字合计或其他总结内容时可以使用。支持单行和多行配置。

:::demo 若只是简单的单行总结栏，可以使用列配置`columns[n]`中的`summaryRender`方法实现。若多行复杂的总结栏可以通过插槽`summary`实现，使用 pro-table-summary-row 设置一行，pro-table-summary-cell 设置列。具体使用查看文档或示例。使用插槽`summary`时列配置`summaryRender`将失效。

basic/summary

:::

表格的基本使用就介绍到这里，请看其他示例了解更复杂全面的功能。
