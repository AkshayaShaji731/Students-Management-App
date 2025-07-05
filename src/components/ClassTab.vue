<template>
  <v-card class="pa-4" permanent>
    <v-title class="text-h5 font-weight-bold">Classes</v-title>
    <v-tabs>
      <v-tab
        v-for="className in classNames"
        :key="className"
        :text="className"
      ></v-tab>
    </v-tabs>
    <slot></slot>
  </v-card>
</template>

<script lang="ts" setup>
// Todo:ClassNames added from store
const classNames: string[] = ["Class A", "Class B", "Class C"];
</script>

<style scoped>
.v-card :deep() {
  background-color: #341539;
  color: #fff;
  border-radius: 0;
}
</style>
