<!--
 * @Author: shen
 * @Date: 2022-05-09 16:45:03
 * @LastEditors: shen
 * @LastEditTime: 2022-05-10 21:41:20
 * @Description: 
-->
<script lang="ts" setup>
import { ref } from "vue";
import { useData } from "vitepress";
import { insertLinkIcon, insertTableWrapper } from "../../utils";
import VPageNav from "./page-nav.vue";
import VTableOfContent from "./table-of-content.vue";

const { page } = useData();
const content = ref<{ $el: HTMLElement }>();

function updateDom() {
  insertLinkIcon(content);
  insertTableWrapper(content);
}
</script>

<template>
  <div class="doc-content-wrapper">
    <div class="doc-content-container">
      <Content
        ref="content"
        class="doc-content"
        @vnode-mounted="updateDom"
        @vnode-updated="updateDom"
      />
      <VPageNav />
    </div>
    <VTableOfContent v-if="page.headers" />
  </div>
</template>
