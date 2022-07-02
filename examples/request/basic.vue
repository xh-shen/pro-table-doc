<template>
  <pro-table
    :columns="columns"
    :pagination="false"
    :data-source="data"
    :request="request"
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
for (let i = 0; i < 4; i++) {
  data.push({
    key: i,
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  });
}

const request = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: [
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
        ],
        success: true,
        total: 0,
      });
    }, 1000);
  });
};
</script>
