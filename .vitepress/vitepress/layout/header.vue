<!--
 * @Author: shen
 * @Date: 2022-05-09 11:54:15å
 * @LastEditors: shen
 * @LastEditTime: 2022-05-11 20:58:42
 * @Description: 
-->
<script setup lang="ts">
import { useData } from "vitepress";

import useSidebar from "../hooks/useSidebar";
import VMenu from "./navbar/menu.vue";
import { baseUrl } from "../../utils";

const { hasSidebar } = useSidebar();
// const themeEnabled = useFeatureFlag('theme')

const { theme } = useData();
</script>

<template>
  <header :class="{ navbar: true, 'has-sidebar': hasSidebar }">
    <div class="navbar-wrapper">
      <div class="header-container">
        <div class="logo-container">
          <a :href="`${baseUrl}/`">
            <img class="logo" src="/images/logo_big.png" alt="shen" />
          </a>
        </div>
        <div class="content">
          <VMenu class="menu" />
          <!-- <VPNavbarThemeToggler v-if="themeEnabled" class="theme-toggler" />
        /> -->
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.logo-container {
  display: flex;
  align-items: center;
  height: var(--header-height);
  > a {
    height: 28px;
    width: 128px;
  }
  .logo {
    position: relative;
    height: 100%;
  }
}
</style>
