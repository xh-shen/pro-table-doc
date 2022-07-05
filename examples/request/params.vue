<template>
  <pro-table :columns="columns" :request="request" :params="params"></pro-table>
</template>

<script setup lang="ts">
import { reactive } from "vue";

interface DataItem {
  key: string;
  name: string;
  age: number;
  address: string;
}

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    ellipsis: true,
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    ellipsis: true,
  },
];

const params = reactive({
  name: "1",
  age: 12,
});

const request = (params) => {
  console.log(params);
  // 这里需要返回一个 Promise,在返回之前你可以进行数据转化
  // 如果需要转化参数可以在这里进行修改
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: [
          {
            key: "1",
            name: "John Brown",
            age: 32,
            address: "New York No. 1 Lake Park",
          },
          {
            key: "2",
            name: "Jim Green",
            age: 42,
            address: "London No. 1 Lake Park",
          },
          {
            key: "3",
            name: "Joe Black",
            age: 32,
            address: "Sidney No. 1 Lake Park",
          },
          {
            key: "4",
            name: "Jim Red",
            age: 32,
            address: "London No. 2 Lake Park",
          },
        ],
        // success 请返回 true，
        // 不然 table 会停止解析数据，即使有数据
        success: true,
        // 不传会使用 data 的长度，如果是分页一定要传
        total: 30,
      });
    }, 1000);
  });
};

setTimeout(() => {
  params.name = "222";
}, 2000);
</script>
