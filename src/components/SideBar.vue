<template>
  <v-layout>
    <v-navigation-drawer permanent style="width: auto">
      <v-list v-for="route in ROUTE_LIST" key="route">
        <RouterLink
          :to="route.path"
          class="d-flex flex-column justify-center align-center text-h6 text-white"
        >
          <v-icon>{{ route.icon }}</v-icon>
          <v-list-item
            :title="route.title"
            class="font-weight-bold"
          ></v-list-item>
        </RouterLink>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script lang="ts" setup>
import { RouterLink } from "vue-router";
import { VIcon } from "vuetify/components";

import { ROUTE_LIST } from "@/constant";
</script>

<style scoped>
.v-navigation-drawer:deep() {
  background-color: #490648;
  color: #fff;
  width: auto;
}
</style>
