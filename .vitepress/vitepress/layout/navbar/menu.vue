<!--
 * @Author: shen
 * @Date: 2022-05-09 14:49:42
 * @LastEditors: shen
 * @LastEditTime: 2022-05-09 14:53:49
 * @Description: 
-->
<script setup lang="ts">
import useNav from "../../hooks/useNav";
import VMenuLink from "./menu-link.vue";

const navs = useNav();
</script>

<template>
  <nav v-if="navs" class="navbar-menu">
    <VMenuLink v-for="(item, key) in navs" :key="key" :item="item" />
  </nav>
</template>
