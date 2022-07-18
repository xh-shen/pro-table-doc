<template>
  <pro-table
    :columns="columns"
    :data-source="dataSource"
    :scroll="{ y: 400, x: 2000 }"
    :pagination="false"
    auto-header-height
  >
  </pro-table>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

interface DataItem {
  key: number;
  name: string;
  age: number;
  address: string;
}

export default defineComponent({
  setup() {
    const columns = [
      {
        title: "Full NameFull NameFull Name",
        dataIndex: "name",
        fixed: "left",
        width: 150,
        resizable: true,
      },
      {
        title: "Age",
        dataIndex: "age",
        fixed: "left",
        width: 100,
        resizable: true,
      },
      {
        title: "Column 1",
        key: "address1",
        dataIndex: "address",
      },
      {
        title: "Column 2",
        key: "address2",
        dataIndex: "address",
      },
      {
        title: "Column 3",
        key: "address3",
        dataIndex: "address",
      },
      {
        title: "Column 4",
        key: "address4",
        dataIndex: "address",
      },
      { title: "Column 5", key: "address5", dataIndex: "address" },
    ];
    const data: DataItem[] = [];
    for (let i = 0; i < 1000; i++) {
      data.push({
        key: i,
        name: `Full Name ${i}`,
        age: i + 1,
        address: `Test Address no. ${i}`,
      });
    }
    return {
      dataSource: ref(data),
      columns: ref(columns),
    };
  },
});
</script>
