<!--
 * @Author: shen
 * @Date: 2022-05-09 16:35:47
 * @LastEditors: shen
 * @LastEditTime: 2022-05-09 16:37:46
 * @Description: 
-->
<script setup lang="ts">
import { isClient } from "@vueuse/core";

const goHome = () => {
  if (!isClient) return;
  window.location.href = `/`;
};
</script>

<template>
  <el-result icon="error" title="资源未找到" sub-title="您请求的页面不存在">
    <template #extra>
      <el-button @click="goHome">返回首页</el-button>
    </template>
  </el-result>
</template>

<style scoped>
.el-result {
  height: 100vh;
  width: 100vw;
}
</style>
