---
title: 行列拖拽
---

# 行列拖拽

支持列宽拖拽、列拖拽排序、行拖拽排序，拖拽后并没有做任何缓存，刷新会重置，可以自行做缓存处理。

## 列宽拖拽

:::demo 列宽拖拽需要设置`column`的 `resizable`，它接受 Boolean 值 如果为 `true`, 列可以被拖拽修改宽度，通过设置 `minWidth`、`maxWidth` 控制列宽的最小宽度和最大宽度，当然这都是可选的配置。 当有些列没有设置 `width` 时，该列将会是自动伸缩，其它可拖拽的列大小改变时，会重新计算自动伸缩列的宽度。

dragable/column-width

:::

## 列拖拽排序

:::demo 设置 `columnDrag = true`, 启用全列拖拽(选择、展开除外)。也可以单独为 `column` 设置 `drag`, 个性化配置。`Full Name`和`Address`列可以长按拖拽，`Date`列无法拖拽。

dragable/column-drag

:::

## 行拖拽排序

:::demo 行拖拽排序需要设置`column`的 `rowDrag`，该列将添加拖拽图标。rowDrag 同样可以是一个返回 boolean 类型的函数，用来自定义不同的行是否允许 拖拽。

dragable/row-drag

:::
