<!--
 * @Author: shen
 * @Date: 2022-05-09 11:54:15å
 * @LastEditors: shen
 * @LastEditTime: 2022-05-10 09:39:33
 * @Description: 
-->
<script setup lang="ts">
import { useData, inBrowser } from "vitepress";

import useSidebar from "../hooks/useSidebar";
import VMenu from "./navbar/menu.vue";

const { hasSidebar } = useSidebar();
// const themeEnabled = useFeatureFlag('theme')

const { theme } = useData();
</script>

<template>
  <header :class="{ navbar: true, 'has-sidebar': hasSidebar }">
    <div class="navbar-wrapper">
      <div class="header-container">
        <div class="logo-container">
          <a href="/">
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
