<template>
  <SideBar />
  <RouterView />
</template>

<script lang="ts" setup>
import SideBar from "./components/SideBar.vue";
import { RouterView } from "vue-router";
</script>

<style scoped></style>
