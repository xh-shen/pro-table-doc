---
title: 分页展示
---

# 分页展示

组件内的分页组件使用的是 `Element Plus` 的分页组件

## 基本分页

当数据量过多时，使用分页分解数据。

:::demo 组件默认开启了分页，你不需要做任何事情就可以显示分页。

pagination/basic

:::

## 分页配置

自定义分页展示内容，可以配置分页参数

:::demo 通过`pagination`属性配置，如果值为`false`则不显示分页，通过配置`{pageSize: 40,pageSizes: [10, 20, 30, 40],layout: "total, sizes, prev, pager, next, jumper"}`来配置分页参数，参数等同于`Element Plus`分页组件。具体参数请查看文档。

pagination/options

:::

## 自定义分页

关闭自带的分页，自行实现分页

:::demo 通过把`pagination`属性配置为`false`，关闭自带的分页功能，而是使用一个独立的分页组件，来自行实现分页逻辑，也可以结合服务端分页实现服务端分页，本示例没有任何交互实现，只是展示示例。

pagination/custom

:::

分页内容就先介绍到这，更多配置请参考文档或 Element Plus 分页组件，内置分页并没有接入全部的 Element Plus 分页组件属性，请注意！
