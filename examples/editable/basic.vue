<template>
  <pro-table
    ref="tableRef"
    :columns="columns"
    :pagination="false"
    :data-source="data"
    header-title="基本用法"
    :scroll="{ y: 300, x: 800 }"
    :editable="{
      type: 'auto',
    }"
    bordered
  >
    <template #actions>
      <el-button @click="onCreate">新建一行</el-button>
      <el-button @click="onSaveAll">保存</el-button>
      <el-button @click="onResetAll">重置</el-button>
    </template>
  </pro-table>
</template>

<script setup lang="tsx">
import { ref } from "vue";
import { ElLink, ElButton } from "element-plus";
interface DataItem {
  key: number;
  age: number;
  name: string;
  date: string;
  sex: number;
  address: string;
}

const tableRef = ref();
const columns = [
  // {
  //   key: "rowDrag",
  //   rowDrag: true,
  //   width: 40,
  // },
  {
    title: "年龄",
    dataIndex: "age",
    valueType: "input-number",
    editable: (text, record, index) => {
      return record.key.toString().startsWith("new-");
    },
  },
  {
    title: "开始日期",
    dataIndex: "date",
    valueType: "date-picker",
    editable: true,
    fieldProps: {
      rules: [{ required: true, message: "开始日期不能为空" }],
    },
  },
  {
    title: "姓名",
    dataIndex: "name",
    fieldProps: {
      rules: [{ required: true, message: "姓名不能为空" }],
    },
    editable: true,
    // customRender: ({ record }) => {
    //   return <div style={{ color: "red" }}>{record.name}</div>;
    // },
  },
  {
    title: "性别",
    dataIndex: "sex",
    valueType: "select",
    valueOptions: [
      { value: 0, text: "女" },
      { value: 1, text: "男" },
    ],
    fieldProps: {
      rules: [{ required: true, message: "性别不能为空" }],
    },
    editable: true,
  },
  // {
  //   title: "操作",
  //   key: "action",
  //   width: 120,
  //   fixed: "right",
  //   customRender: ({ record, isEditable }) => {
  //     return (
  //       <div>
  //         <ElButton link type="primary" onClick={() => onDelete(record.key)}>
  //           删除
  //         </ElButton>
  //       </div>
  //     );
  //   },
  // },
  {
    title: "操作",
    key: "action",
    width: 120,
    fixed: "right",
    customRender: ({ record, isEditable }) => {
      if (isEditable) {
        return (
          <div>
            <ElButton link type="primary" onClick={() => onSave(record)}>
              保存
            </ElButton>
            <ElButton type="primary" link onClick={() => onCancel(record)}>
              取消
            </ElButton>
          </div>
        );
      }
      return (
        <div>
          <ElButton link type="primary" onClick={() => onUpdated(record)}>
            编辑
          </ElButton>
          <ElButton link type="primary" onClick={() => onDelete(record.key)}>
            删除
          </ElButton>
        </div>
      );
    },
  },
];
const data: DataItem[] = [];
for (let i = 0; i < 20; i++) {
  data.push({
    key: i,
    age: i + 1,
    date: "2016-05-03",
    name: "Tom",
    sex: i % 2,
    address: "No. 189, Grove St, Los Angeles",
  });
}

const rowSelection = {
  type: "checkbox",
  selections: true,
  fixed: true,
};

const onUpdated = (record: any) => {
  tableRef.value?.startEditable(record.key);
};

const onCancel = (record: any) => {
  tableRef.value?.cancelEditable(record.key);
};

const onCreate = () => {
  tableRef.value?.addEditRecord(
    {
      key: "new-" + (Math.random() * 1000000).toFixed(0),
      // name: "新的一行",
    },
    {
      position: "top",
    }
  );
};
const onSave = async (record: any) => {
  try {
    const result = await tableRef.value?.saveEditable(record.key);
    console.log(result);
  } catch (error) {
    console.log("error", error);
  }
};

const onSaveAll = async () => {
  try {
    const result = await tableRef.value?.saveEditable();
    console.log(result);
  } catch (error) {
    console.log("error", error);
  }
};

const onResetAll = () => {
  tableRef.value?.resetEditable();
};
const onDelete = (recordKey: any) => {
  tableRef.value?.deleteEditRecord(recordKey);
};
</script>
