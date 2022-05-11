<template>
  <pro-table
    :columns="columns"
    :data-source="data"
    :scroll="{ y: 200 }"
    :pagination="pagination"
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
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    date: "2016-05-03",
    name: "Tom" + i,
    address: "No. 189, Grove St, Los Angeles",
  });
}

const pagination = {
  pageSize: 40,
  pageSizes: [10, 20, 30, 40],
  layout: "total, sizes, prev, pager, next, jumper",
};
</script>
