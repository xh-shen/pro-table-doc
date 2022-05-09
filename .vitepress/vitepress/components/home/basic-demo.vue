<template>
  <div class="home-demo container">
    <pro-table
      ref="tableRef"
      :columns="columns"
      :data-source="dataSource"
      :pagination="false"
      :scroll="{ y: 400 }"
      :row-height="54"
      :row-selection="rowSelection"
      :custom-row="customRow"
      @resizeColumn="handleResize"
    >
      <template #footer>
        <div class="table-footer">
          复杂表格依旧流畅如初；
          <br />
          姓名、年龄列宽可以拖动调整哦，点击年龄排序，体验动画效果，然后快速拖动到最右侧，快速输入编辑吧；
          <br />
          更多功能点击右上角查看更多示例！！！
        </div>
      </template>
      <template #expandedRowRender="{ record }">
        <p style="margin: 0">
          {{ record.description }}
        </p>
      </template>
      <template #bodyCell="{ column, record, recordIndexs }">
        <template v-if="column.dataIndex === 'info'">
          <div>
            <input
              v-if="record.info"
              v-model="dataSource[recordIndexs[0]].info"
              style="
                width: 240px;
                height: 30px;
                border: 1px solid #dcdfe6;
                padding: 0 5px;
                border-radius: 3px;
              "
            />
            <template v-else>
              {{ record.info }}
            </template>
          </div>
        </template>
        <template v-else-if="column.key === 'action'">
          <el-space wrapp>
            <el-link :underline="false" type="primary">详情</el-link>
            <el-link
              :underline="false"
              type="primary"
              @click="handleDelete(recordIndexs[0])"
              >删除</el-link
            >
          </el-space>
        </template>

        <template v-else-if="column.dataIndex.indexOf('other') >= 0"
          >--</template
        >
      </template>
    </pro-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch, nextTick } from "vue";
import { random } from "lodash-es";

export default defineComponent({
  name: "App",

  setup() {
    const visible = ref(false);
    const tableRef = ref<any>();
    const autoRowHeight = ref(false);
    const virtual = ref(true);
    const loading = ref(false);
    const bordered = ref(true);
    const selectedRowKeys = ref([]);
    const expandedRowKeys = ref([]);
    const inputRef = ref();
    const editableState = reactive<Record<string, boolean>>({});

    const incomes = new Array(12).fill(1).map((_, index) => ({
      title: `${index + 1} 月`,
      dataIndex: `income_${index + 1}`,
      key: `income_${index + 1}`,
      width: 100,
    }));
    const others = new Array(100).fill(1).map((_, index) => ({
      title: `其它_${index}`,
      dataIndex: `other_${index}`,
      key: `other_${index}`,
      width: 100,
    }));
    const columns = [
      {
        title: "姓名",
        width: 150,
        minWidth: 80,
        dataIndex: "name",
        key: "name",
        fixed: true,
        resizable: true,
        ellipsis: true,
        rowDrag: true,
      },
      {
        title: "年龄",
        width: 80,
        dataIndex: "age",
        key: "age",
        resizable: true,
        align: "center",
        sorter: (a: any, b: any) => a.age - b.age,
      },
      {
        title: "身份证号",
        dataIndex: "id",
        key: "id",
        align: "center",
        width: 210,
        copyable: true,
      },
      {
        title: "性别",
        dataIndex: "gender",
        align: "center",
        width: 70,
      },
      {
        title: "职业",
        dataIndex: "job",
        width: 150,
      },
      {
        title: "公司",
        dataIndex: "company",
        width: 140,
      },
      {
        title: "毕业学校",
        dataIndex: "school",
        width: 150,
        // autoHeight: true,
      },
      { title: "电话", dataIndex: "phone", width: 150 },
      { title: "手机", dataIndex: "telephone", width: 150 },
      { title: "QQ", dataIndex: "qq", width: 150 },
      { title: "微信", dataIndex: "wechat", width: 150 },
      { title: "钉钉", dataIndex: "dingTalk", width: 150 },
      { title: "国籍", dataIndex: "country", width: 150 },
      { title: "民族", dataIndex: "nationality", width: 100 },
      { title: "婚姻", dataIndex: "marital", width: 150 },
      { title: "地址", dataIndex: "address", width: 200 },
      {
        title: "收入",
        key: "income",
        children: incomes,
        align: "left",
      },
      {
        title: "其它",
        key: "other",
        children: others,
      },
      {
        title: "备注",
        dataIndex: "info",
        key: "info",
        width: 300,
        resizable: true,
      },
      {
        title: "操作",
        key: "action",
        width: 100,
        fixed: "right",
      },
    ];

    interface DataItem {
      key: number;
      name: string;
      age: number;
      address: string;
      [key: string]: any;
    }

    const data: DataItem[] = [];
    const nationality = ["汉族", "壮族", "苗族"];
    const marital = ["已婚", "未婚", "未知"];
    const job1 = ["前端工程师", "后端工程师"];
    const job2 = ["项目经理", "产品经理", ""];
    const gender = ["男", "女"];
    const income1 = [12000, 8900, 18000, 13000, 6800];
    const income2 = [2000, 8900, 8000, 3000, 6800];

    for (let i = 0; i < 10000; i++) {
      const age = random(18, 40);
      const item = {
        key: i,
        id: "12345678909876xxxx",
        name: `shen ${i}`,
        age,
        address: `Changchun nanhu no. ${i}`,
        gender: i === 3 ? "男" : gender[random(0, 1)],
        job: i === 3 ? "架构师" : age > 35 ? job2[random(1)] : job1[random(1)],
        company: i === 3 ? "星瀚" : "中国某汽xxx 大厂",
        school: i === 3 ? "星瀚艺术" : `吉大第 ${i} 大学`,
        phone: "0431-88888888",
        telephone: `1858888xxx${random(0, 9)}`,
        qq: "123456xxx",
        wechat: "987654xxx",
        dingTalk: `**shen_${i}`,
        country: "中国",
        nationality: nationality[random(0, 2)],
        marital: marital[random(0, 2)],
        health: age > 30 ? random(1, 3) : random(4, 5),
        info: "随便写点啥吧",
        jobImg: "",
        description: "你可以展示更多数据，甚至是子表格也没有任何问题",
      };
      if (age > 35) {
        new Array(12).fill(1).forEach((_, index) => {
          item[`income_${index + 1}`] = income1[random(0, 4)];
        });
      } else {
        new Array(12).fill(1).forEach((_, index) => {
          item[`income_${index + 1}`] = income2[random(0, 4)];
        });
      }
      data.push(item);
    }
    const rowSelection = reactive({
      type: "checkbox",
      getCheckboxProps: (record: any) => {
        if (record.key === 3) {
          return { disabled: true };
        }
        return { disabled: false };
      },
    });
    watch(rowSelection, () => {
      console.log(rowSelection);
    });
    const rowHeight = ref((data, baseHeight) =>
      autoRowHeight.value ? undefined : baseHeight
    );
    const pagination = ref({
      current: 1,
      pageSize: data.length,
      showSizeChanger: true,
    });
    const changeAutoHeight = () => {
      autoRowHeight.value = !autoRowHeight.value;
    };
    const changeVirtual = () => {
      virtual.value = !virtual.value;
    };
    const changeLoading = () => {
      loading.value = !loading.value;
    };
    const changeBordered = () => {
      bordered.value = !bordered.value;
    };
    const goToPage = (num: number) => {
      pagination.value.current = num;
    };
    const handleEditable = (
      rowIndex: number,
      dataIndex: string,
      status: boolean
    ) => {
      editableState[`${rowIndex}-${dataIndex}`] = status;
      if (status) {
        nextTick(() => {
          inputRef.value.focus();
        });
      }
    };
    const getRowProps = ({ rowIndex }: any) => {
      return rowIndex < 2
        ? {
            class: "editable-row",
          }
        : {};
    };
    const changeRowSelectionType = () => {
      rowSelection.type =
        rowSelection.type === "checkbox" ? "radio" : "checkbox";
    };
    const handleChange = (e, record: any) => {
      const index = dataSource.value.findIndex((d) => d.key == record.key);
      dataSource.value[index].info = e.target.value;
    };
    const dataSource = ref(data);
    const handleDelete = (index) => {
      dataSource.value.splice(index, 1);
      dataSource.value = [].concat(dataSource.value as any);
    };
    const cols = ref(columns);
    const handleResize = (w, col) => {
      col.width = w;
    };
    return {
      handleResize,
      visible,
      tableRef,
      dataSource,
      columns: cols,
      size: ref("default"),
      rowHeight,
      autoRowHeight,
      changeAutoHeight,
      resizeRowsHeight: () => tableRef.value.resizeRowsHeight(),
      changeVirtual,
      changeLoading,
      virtual,
      loading,
      pagination,
      goToPage,
      bordered,
      changeBordered,
      selectedRowKeys,
      expandedRowKeys,
      rowSelection,
      changeRowSelectionType,
      getRowProps,
      editableState,
      handleEditable,
      inputRef,
      handleChange,
      handleDelete,
      customRow: (record) => {
        if (record.name === "shen 3") {
          return {
            style: {
              background: "#fef3ee",
            },
          };
        }
        return {};
      },
    };
  },
});
</script>
<style lang="scss">
.home-demo {
  padding-bottom: 30px;
  &.container {
    margin: 0 auto;
    max-width: var(--vp-screen-max-width);
  }
}
.table-footer {
  color: rgba(0, 0, 0, 0.65);
}
.editable-cell {
  position: relative;
}

.editable-cell-value-wrap {
  padding: 1px 12px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.pro-table__row-hover.editable-row .editable-cell-value-wrap {
  padding: 0px 11px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
}
.custom-row-class .surely-table-cell {
  background-color: #fef3ee !important;
}
.custom-cell-id {
  .anticon {
    color: #1890ff;
  }
}
</style>
