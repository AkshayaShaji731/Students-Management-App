<template>
  <v-card class="pa-4" permanent>
    <v-card-title class="text-h5 font-weight-bold">Classes</v-card-title>
    <v-tabs>
      <v-tab
        v-if="props.classes"
        v-for="className in props.classes.className"
        :key="className"
        :text="className"
        :value="className"
      ></v-tab>
    </v-tabs>
    <slot></slot>
  </v-card>
</template>

<script lang="ts" setup>
import type { ClassDetails } from "@/types/ClassDetailsType";

interface Props {
  classes?: ClassDetails;
}

const props = withDefaults(defineProps<Props>(), {});
</script>

<style scoped>
.v-card :deep() {
  background-color: #341539;
  color: #fff;
  border-radius: 0;
}
</style>
