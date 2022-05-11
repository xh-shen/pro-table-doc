<template>
  <pro-table
    :columns="columns"
    :data-source="data"
    :scroll="{ y: 200 }"
    :pagination="false"
  ></pro-table>
  <el-pagination background layout="prev, pager, next" :total="1000" />
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
    title: "Address",
    dataIndex: "address",
  },
];
const data: DataItem[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    date: "2016-05-03",
    name: "Tom" + i,
    address: "No. 189, Grove St, Los Angeles",
  });
}
</script>
