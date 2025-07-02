<template>
  <ul class="sidebar">
    <li v-for="route in ROUTE_LIST" :key="route.icon">
      <RouterLink
        :to="`${route.path}`"
        class="d-flex flex-column justify-center align-center g-2 pa-4"
      >
        <i class="material-icons">{{ route.icon }}</i>
        <p class="text-white text-subtitle-1 font-weight-bold">
          {{ route.title }}
        </p>
      </RouterLink>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { RouterLink } from "vue-router";
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
