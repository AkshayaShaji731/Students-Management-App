<template>
  <ul class="sidebar">
    <li v-for="route in ROUTE_LIST" :key="route.icon">
      <a
        href=""
        class="d-flex flex-column justify-center align-center g-2 pa-4"
      >
        <i class="material-icons">{{ route.icon }}</i>
        <p class="text-white text-subtitle-1 font-weight-bold">
          {{ route.title }}
        </p>
      </a>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { ROUTE_LIST } from "@/constant";
</script>

<style scoped>
.sidebar {
  background-color: #490648;
  position: fixed;
  height: 100vh;
}

.material-icons {
  color: #fff;
}
</style>
