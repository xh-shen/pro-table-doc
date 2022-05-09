<!--
 * @Author: shen
 * @Date: 2022-05-09 09:07:45
 * @LastEditors: shen
 * @LastEditTime: 2022-05-09 21:26:51
 * @Description: 
-->
<script setup lang="ts">
import { onMounted } from "vue";
import { useStorage, useToggle, isClient } from "@vueuse/core";
import { breakpoints } from "../constant";
import nprogress from "nprogress";
import useToggleWidgets from "../hooks/useToggleWidgets";
import useSidebar from "../hooks/useSidebar";
import VHeader from "./header.vue";
import VContent from "./content.vue";
import VSidebar from "./sidebar.vue";

const [isSidebarOpen, toggleSidebar] = useToggle(false);
const { hasSidebar } = useSidebar();

useToggleWidgets(isSidebarOpen, () => {
  if (!isClient) return;
  if (window.outerWidth >= breakpoints.lg) {
    toggleSidebar(false);
  }
});

onMounted(async () => {
  if (!isClient) return;
  window.addEventListener(
    "click",
    (e) => {
      const link = (e.target as HTMLElement).closest("a");
      if (!link) return;

      const { protocol, hostname, pathname, target } = link;
      const currentUrl = window.location;
      const extMatch = pathname.match(/\.\w+$/);
      if (
        !e.ctrlKey &&
        !e.shiftKey &&
        !e.altKey &&
        !e.metaKey &&
        target !== `_blank` &&
        protocol === currentUrl.protocol &&
        hostname === currentUrl.hostname &&
        !(extMatch && extMatch[0] !== ".html")
      ) {
        e.preventDefault();
        if (pathname !== currentUrl.pathname) {
          nprogress.start();
        }
      }
    },
    { capture: true }
  );
});
</script>

<template>
  <div class="App">
    <VHeader />
    <VSidebar :open="isSidebarOpen" @close="toggleSidebar(false)">
      <template #bottom>
        <slot name="sidebar-bottom" />
      </template>
    </VSidebar>
    <VContent :is-sidebar-open="isSidebarOpen">
      <template #content-top>
        <slot name="content-top" />
      </template>
      <template #content-bottom>
        <slot name="content-bottom" />
      </template>
      <template #aside-top>
        <slot name="aside-top" />
      </template>
      <template #aside-mid>
        <slot name="aside-mid" />
      </template>
      <template #aside-bottom>
        <slot name="aside-bottom" />
      </template>
    </VContent>
  </div>
</template>
