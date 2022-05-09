<!--
 * @Author: shen
 * @Date: 2022-05-09 21:25:17
 * @LastEditors: shen
 * @LastEditTime: 2022-05-09 21:25:31
 * @Description: 
-->
<script lang="ts" setup>
import useSidebar from "../hooks/useSidebar";

import VSidebarLink from "./sidebar/sidebar-link.vue";

defineProps<{ open: boolean }>();
defineEmits(["close"]);

const { sidebars, hasSidebar } = useSidebar();
</script>

<template>
  <aside v-if="hasSidebar" :class="{ sidebar: true, open }">
    <slot name="top" />
    <div class="sidebar-groups">
      <section v-for="(item, key) of sidebars" :key="key" class="sidebar-group">
        <p class="sidebar-group__title">
          {{ item.text }}
        </p>
        <VSidebarLink
          v-for="(child, childKey) in item.children"
          :key="childKey"
          :item="child"
          @close="$emit('close')"
        />
      </section>
    </div>
    <slot name="bottom" />
  </aside>
</template>
