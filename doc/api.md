---
title: API
---

# API

## Table 属性

| 参数                   | 说明                                                                                 | 类型                                                                                          | 默认值                                                                    |
| ---------------------- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| toolbar                | 表格工具栏                                                                           | boolean                                                                                       | true                                                                      |
| title                  | 表格标题                                                                             | string                                                                                        | -                                                                         |
| subTitle               | 表格副标题                                                                           | string                                                                                        | -                                                                         |
| tipSubTitle            | 表格副标题 tooltip 展示                                                              | boolean                                                                                       | false                                                                     |
| animateRows            | 是否开启动画                                                                         | boolean                                                                                       | true                                                                      |
| bordered               | 是否展示外边框和列边框                                                               | boolean                                                                                       | false                                                                     |
| columns                | 表格列的配置描述，具体项见[下表](#column)                                            | array                                                                                         | -                                                                         |
| childrenColumnName     | 指定树形结构的列名                                                                   | string                                                                                        | `children`                                                                |
| dataSource             | 数据数组                                                                             | object\[]                                                                                     |                                                                           |
| rowHeight              | 行高度                                                                               | number\|Function(record, isExpandRow, baseHeight): number                                     |                                                                           |
| headerHeight           | 表头高度(表头分组时，不同高度可以使用数组)                                           | number[] \| number                                                                            |                                                                           |
| defaultExpandAllRows   | 初始时，是否展开所有行                                                               | boolean                                                                                       | false                                                                     |
| defaultExpandedRowKeys | 默认展开的行                                                                         | string\[]                                                                                     | -                                                                         |
| expandedRowKeys        | 展开的行，控制属性                                                                   | string\[]                                                                                     | -                                                                         |
| expandedRowRender      | 额外的展开行                                                                         | Function({record, index, indent, expanded}):VNode                                             | -                                                                         |
| expandFixed            | 控制展开图标是否固定，可选 true `left` `right`                                       | boolean \| string                                                                             | false                                                                     |
| expandIcon             | 自定义展开图标                                                                       | Function(props):VNode                                                                         | -                                                                         |
| expandRowByClick       | 通过点击行来展开子行                                                                 | boolean                                                                                       | `false`                                                                   |
| expandIconColumnIndex  | 自定义展开按钮的列顺序，`-1` 时不展示                                                | number                                                                                        | -                                                                         |
| footer                 | 表格尾部                                                                             | Function(currentPageData)                                                                     |                                                                           |
| loading                | 页面是否加载中                                                                       | boolean\|[object](#loading)                                                                   | false                                                                     |
| locale                 | 默认文案设置，目前包括排序、过滤、空数据文案                                         | object                                                                                        | filterConfirm: `确定` <br> filterReset: `重置` <br> emptyText: `暂无数据` |
| pagination             | 分页器，参考[配置项](#pagination)，设为 false 时不展示和进行分页                     | object                                                                                        |                                                                           |
| rowClassName           | 表格行的类名                                                                         | Function(record, index):string                                                                | -                                                                         |
| rowKey                 | 表格行 key 的取值，可以是字符串或一个函数                                            | string\|Function(record):string                                                               | 'key'                                                                     |
| rowSelection           | 列表项是否可选择，[配置项](#rowselection)                                            | object                                                                                        | null                                                                      |
| scroll                 | 表格是否可滚动，也可以指定滚动区域的宽、高，[配置项](#scroll)                        | object                                                                                        | -                                                                         |
| showHeader             | 是否显示表头                                                                         | boolean                                                                                       | true                                                                      |
| showSorterTooltip      | 表头是否显示下一次排序的 tooltip 提示。当参数类型为对象时，将被设置为 Tooltip 的属性 | boolean \| [Tooltip props](#tooltip)                                                          | true                                                                      |
| size                   | 表格大小                                                                             | default \| large \| small                                                                     | default                                                                   |
| sortDirections         | 支持的排序方式，取值为 `ascend` `descend`                                            | Array                                                                                         | \[`ascend`, `descend`]                                                    |
| sticky                 | 设置粘性头部和滚动条                                                                 | boolean \| `{offsetHeader?: number, offsetScroll?: number, getContainer?: () => HTMLElement}` | -                                                                         |
| indentSize             | 展示树形数据时，每层缩进的宽度，以 px 为单位                                         | number                                                                                        | 15                                                                        |
| rowExpandable          | 设置是否允许行展开                                                                   | (record) => boolean                                                                           | -                                                                         |
| customRow              | 设置行属性                                                                           | Function(record, index)                                                                       | -                                                                         |
| customCell             | 设置单元格属性, column 如配置了 `customCell`, 优先使用 column.customCell             | Function(obj: {record: any; rowIndex: number; column: ColumnType})                            | -                                                                         |
| summaryFixed           | 固定总结栏                                                                           | boolean                                                                                       | -                                                                         |
| columnDrag             | 列表头是否允许拖拽                                                                   | boolean                                                                                       | -                                                                         |
| rowHoverDelay          | 表格行 hover 延时，用于性能优化                                                      | number                                                                                        | 50                                                                        |

## Table 事件

| 事件名称           | 说明                                                       | 回调参数                                                                            |
| ------------------ | ---------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| expandedRowsChange | 展开的行变化时触发                                         | Function(expandedRows)                                                              |
| change             | 分页、排序、筛选变化时触发                                 | Function(pagination, filters, sorter, { action: 'paginate' \| 'sort' \| 'filter' }) |
| expand             | 点击展开图标时触发                                         | Function(expanded, record)                                                          |
| resizeColumn       | 拖动列时触发, 如果不需要内部自动更改宽度，可以返回 `false` | Function(width, column, action: 'start' \| 'move' \| 'end' ) => boolean \| void     |
| rowDragEnd         | 拖拽行结束时触发                                           | (opt: [DragRowEventInfo](#dragroweventinfo)) => boolean \| Promise \| void          |
| columnDragEnd      | 拖拽列结束时触发                                           | (opt: [DragColumnEventInfo](#dragcolumneventinfo)) => boolean \| Promise \| void    |

## Table 方法

| 事件名称 | 说明                                                   | 参数                                                                                                                               |
| -------- | ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| scrollTo | 滚动到指定位置, 优先级：left > columnIndex > columnKey | Function(pos: {left?: number; top?: number; columnIndex?: number; columnKey?: Key; rowKey?: Key; }, behavior?: 'auto' \| 'smooth') |

## Table 插槽

| 插槽名               | 说明                                                                                                  | 子标签                                     |
| -------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| -                    | 自定义默认内容 table 属性 columns 优先级更高                                                          | pro-table-column \| pro-table-column-group |
| expandedRowRender    | 额外的展开行内容 #expandedRowRender="{record, index, indent, expanded}"                               | -                                          |
| expandIcon           | 自定义展开图标 #expandIcon="props"                                                                    | -                                          |
| footer               | 自定义表格尾部 #footer="currentPageData"                                                              | -                                          |
| toolbar              | 自定义工具栏 #toolbar（#title、#actions 等失效）                                                      | -                                          |
| actions              | 自定义操作栏 #actions                                                                                 | -                                          |
| title                | 自定义标题 #title                                                                                     | -                                          |
| headerCell           | 自定义 header 单元格 #headerCell="{title, column}"                                                    | -                                          |
| bodyCell             | 自定义 body 单元格 #bodyCell="{text, record, index, column}"                                          | -                                          |
| customFilterDropdown | 自定义筛选菜单，需要配合 column.customFilterDropdown 使用 #customFilterDropdown="FilterDropdownProps" | -                                          |
| customFilterIcon     | 自定义筛选图标 #customFilterIcon="{filtered, column}"                                                 | -                                          |
| emptyText            | 当数据为空时自定义的内容 #emptyText                                                                   | -                                          |
| summary              | 当数据为空时自定义的内容 #summary                                                                     | pro-table-summary-row                      |

## 文档待完善
