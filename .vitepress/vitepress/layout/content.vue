<!--
 * @Author: shen
 * @Date: 2022-05-09 16:31:00
 * @LastEditors: shen
 * @LastEditTime: 2022-05-10 10:25:26
 * @Description: 
-->
<script setup lang="ts">
import { computed, onUpdated, watch, ref, nextTick } from "vue";
import nprogress from "nprogress";
import { useData, useRoute } from "vitepress";
import useSidebar from "../hooks/useSidebar";
import VDocContent from "./content/doc-content.vue";
import VNotFound from "../components/common/not-found.vue";

const { frontmatter } = useData();
const route = useRoute();
const isNotFound = computed(() => route.component === VNotFound);
const isHeroPost = computed(() => frontmatter.value.page === true);
const { hasSidebar } = useSidebar();

const props = defineProps<{ isSidebarOpen: boolean }>();

const shouldUpdateProgress = ref(true);

watch(
  () => props.isSidebarOpen,
  (val) => {
    nextTick(() => {
      shouldUpdateProgress.value = !val;
    });
  }
);

onUpdated(() => {
  if (shouldUpdateProgress.value) {
    nprogress.done();
  }
});
</script>

<template>
  <main :class="{ 'page-content': true, 'has-sidebar': hasSidebar }">
    <VNotFound v-if="isNotFound" />
    <div class="hero-content" v-else-if="isHeroPost">
      <Content />
    </div>
    <VDocContent v-else>
      <template #content-top><slot name="content-top" /></template>
      <template #content-bottom><slot name="content-bottom" /></template>
    </VDocContent>
  </main>
</template>
