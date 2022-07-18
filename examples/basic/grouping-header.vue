<!--
 * @Author: shen
 * @Date: 2022-05-11 09:28:47
 * @LastEditors: shen
 * @LastEditTime: 2022-07-18 15:15:52
 * @Description: 
-->
<template>
  <pro-table
    :columns="columns"
    :pagination="false"
    :data-source="data"
  ></pro-table>
</template>

<script setup lang="ts">
interface DataItem {
  key: number;
  name: string;
  date: string;
  address: string;
}
const columns = [
  {
    title: "Date",
    dataIndex: "date",
  },
  {
    title: "Full Name",
    dataIndex: "name",
  },
  {
    title: "Group",
    children: [
      {
        title: "Address1",
        key: "address1",
        dataIndex: "address",
      },
      {
        title: "Address2",
        key: "address2",
        dataIndex: "address",
      },
      {
        title: "Address3",
        key: "address3",
        dataIndex: "address",
      },
    ],
  },
];
const data: DataItem[] = [];
for (let i = 0; i < 4; i++) {
  data.push({
    key: i,
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  });
}
</script>
