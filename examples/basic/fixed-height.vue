<template>
  <pro-table
    :columns="columns"
    :pagination="false"
    :data-source="data"
    :height="200"
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
    title: "Address",
    dataIndex: "address",
  },
];
const data: DataItem[] = [];
for (let i = 0; i < 1; i++) {
  data.push({
    key: i,
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  });
}
</script>
