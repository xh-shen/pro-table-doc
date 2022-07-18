<!--
 * @Author: shen
 * @Date: 2022-07-07 09:13:29
 * @LastEditors: shen
 * @LastEditTime: 2022-07-15 14:07:42
 * @Description: 
-->
<template>
  <div style="height: 600px">
    <pro-table
      :columns="columns"
      :data-source="data"
      :toolbar="toolbar"
      :columns-state="columnsState"
      :options="options"
      summary-fixed
      column-drag
      :pagination="false"
      bordered
      height="100%"
    >
      <template #title> 这里是标题 </template>
      <template #actions>
        <ElButton type="primary" @click="onAdd">添加</ElButton>
        <ElButton>导出</ElButton>
      </template>
      <!-- <template #settings>
      <div>测试1</div>
    </template> -->
      <template #footer>
        <div>aaa</div>
        <div>aaa</div>
      </template>
    </pro-table>
  </div>
</template>

<script setup lang="tsx">
import { ref } from "vue";
interface DataItem {
  key: number;
  name: string;
  date: string;
  age: number;
  address: string;
  address1: string;
  address2: string;
  address3: string;
  address4: string;
  address5: string;
  address6: string;
  address7: string;
  address8: string;
  address9: string;
  address10: string;
  address11: string;
  address12: string;
  address13: string;
  address14: string;
  info: {
    scal: number;
    phone: number;
  };
}
const columns = ref([
  {
    title: "日期",
    dataIndex: "date",
    width: 150,
    resizable: true,
    rowDrag: true,
    fixed: true,
    align: "center",
  },
  {
    title: "年龄",
    dataIndex: "age",
    resizable: true,
    width: 100,
    align: "center",

    // 可以使用jsx
    summaryRender: ({ total }) => <div style="color: red">{total}</div>,
  },
  {
    title: "Full Name",
    dataIndex: "name",
    resizable: true,
    width: 150,
  },
  {
    title: "Address11",
    dataIndex: "address",
    hideInTable: true,
    resizable: true,
    width: 150,
  },
  {
    key: "address-grou1",
    title: "地址分组1",
    width: 200,
    align: "center",
    children: [
      {
        title: "地址分组1-1",
        key: "address-grou2",
        resizable: true,
        width: 200,
        children: [
          {
            title: "Address8",
            dataIndex: "address8",
            resizable: true,
            width: 150,
          },
          {
            title: "Address7",
            dataIndex: "address7",
            resizable: true,
            width: 150,
          },
        ],
      },
      {
        title: "地址分组1-2",
        dataIndex: "address2",
        resizable: true,
        align: "center",
        width: 150,
      },
    ],
  },

  {
    title: "地址分组2",
    key: "address-grou3",
    children: [
      {
        title: "Address3",
        dataIndex: "address3",
        resizable: true,
        colSpan: 2,
        width: 150,
      },
      {
        title: "Address4",
        dataIndex: "address4",
        resizable: true,
        colSpan: 0,
        width: 150,
      },
      {
        title: "Address5",
        dataIndex: "address5",
        resizable: true,
        width: 150,
      },
      {
        title: "Address6",
        dataIndex: ["info", "phone"],
        resizable: true,
        width: 150,
      },
    ],
  },
]);

// setTimeout(() => {
//   columns.value = [
//     {
//       title: "Address6",
//       dataIndex: "address6",
//       width: 150,
//     },
//   ];
// }, 2000);
const data: DataItem[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    date: "2016-05-03",
    name: "Tom",
    age: i + 1,
    address: "No. 189, Grove St, Los Angeles",
    address1: "No. 189, Grove St, Los Angeles",
    address2: "No. 189, Grove St, Los Angeles",
    address3: "No. 189, Grove St, Los Angeles",
    address4: "No. 189, Grove St, Los Angeles",
    address5: "No. 189, Grove St, Los Angeles",
    address6: "No. 189, Grove St, Los Angeles",
    address7: "No. 189, Grove St, Los Angeles",
    address8: "No. 189, Grove St, Los Angeles",
    address9: "No. 189, Grove St, Los Angeles",
    address10: "No. 189, Grove St, Los Angeles",
    address11: "No. 189, Grove St, Los Angeles",
    address12: "No. 189, Grove St, Los Angeles",
    address13: "No. 189, Grove St, Los Angeles",
    address14: "No. 189, Grove St, Los Angeles",
    info: {
      scal: i,
      phone: 1111,
    },
  });
}

const toolbar = {
  title: "这里是标题",
  subTitle: "这里是子标题",
  // tooltip: "这是一个段描述",
  // search: true,
  onSearch: (value: string) => {
    alert(value);
  },
};

const columnsState = ref<any>({
  // value: {
  //   address1: {
  //     show: false,
  //   },
  // },
  persistenceKey: "pro-table-toolbar-demos",
  persistenceType: "localStorage",
  onChange: (states) => {
    console.log("states", states);
  },
});

const options = {
  setting: {
    draggable: true,
    checkable: true,
    // checkedReset: false,
  },
  fullScreen: (toggle) => {
    toggle();
  },
};

// setTimeout(() => {
//   columnsState.value.value = {
//     address1: {
//       show: false,
//     },
//     address2: {
//       show: false,
//     },
//   };
// }, 4000);

const onAdd = () => {
  alert("add");
};
</script>
