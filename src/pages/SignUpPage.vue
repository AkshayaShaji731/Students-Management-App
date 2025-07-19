<template>
  <v-card class="pa-4" permanent>
    <v-tabs v-model="tab">
      <v-tab
        v-for="text in FORM_TEXT"
        :key="text.btnText"
        :text="text.btnText"
        :value="text"
      ></v-tab>
    </v-tabs>
    <!-- TODO:Add the formComponent -->
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { FORM_TEXT } from "@/constants/index";

const tab = ref(null);
</script>

<style scoped></style>
