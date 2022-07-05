<template>
  <pro-table
    :pagination="pagination"
    :loading="loading"
    :columns="columns"
    :data-source="dataSource"
    @change="onTableChange"
  />
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";

const loading = ref(false);

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    filterType: "text",
    sorter: {
      multiple: 1,
    },
    localSort: false,
    onFilter: false,
    ellipsis: true,
  },
  {
    title: "Age",
    dataIndex: "age",
    filterType: "number",
    sorter: {
      multiple: 2,
    },
    localSort: false,
    onFilter: false,
  },
  {
    title: "Address",
    dataIndex: "address",
    ellipsis: true,
    filters: [
      { text: "London", value: "London" },
      { text: "New York", value: "New York" },
    ],
    filterType: "radio",
    sorter: {
      multiple: 3,
    },
    localSort: false,
    onFilter: false,
  },
];

const dataSource = ref<any>([]);

const request = (params, sorter = {}, filter = {}) => {
  loading.value = true;
  return new Promise((resolve) => {
    setTimeout(() => {
      dataSource.value = [
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
      ];
      pagination.total = 200;
      loading.value = false;
    }, 1000);
  });
};

const pagination = reactive({
  currentPage: 1,
  pageSize: 20,
  total: 0,
});

const onTableChange = ({ pageSize, currentPage }, sorter, filter) => {
  pagination.pageSize = pageSize;
  pagination.currentPage = currentPage;
  request(pagination, sorter, filter);
};

onMounted(() => {
  request(pagination);
});
</script>
