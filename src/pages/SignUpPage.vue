<template>
  <v-container>
    <v-tabs v-model="tab">
      <v-tab
        v-for="tabName in SIGN_TAB_NAMES"
        :key="tabName.title"
        :text="tabName.btnText"
      ></v-tab>
    </v-tabs>
    <!-- TODO: Add Form component -->
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { SIGN_TAB_NAMES } from "@/constants";

const tab = ref(null);
</script>

<style scoped>
:deep.v-container {
  background-color: #481d50;
  color: #fff;
}

:deep.v-tab {
  width: 50%;
}
</style>
