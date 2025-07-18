<template>
  <v-container class="d-flex ga-4">
    <v-label class="text-white mx-5 text-h5 font-weight-bold"
      >Filters :</v-label
    >
    <v-text-field
      v-model="filterDataName"
      label="Search With Name"
      class="text-white"
    />
    <v-text-field
      v-model="filterDataSubject"
      label="Search With ID"
      class="text-white"
    />
    <v-select
      v-model="filterDataClass"
      label="Filter With Class name"
      :items="className"
      class="text-white"
      multiple
    />
  </v-container>
</template>

<script setup lang="ts">
import { watch, ref } from "vue";

const filterDataName = ref<string | number>("");
const filterDataSubject = ref<string>("");
const filterDataClass = ref<string[]>([]);

const emit = defineEmits(["filters"]);

watch(
  [filterDataName, filterDataSubject, filterDataClass],
  ([newName, newSubject, newClass]) => {
    emit("filters", {
      filterDataName: newName,
      filterDataSubject: newSubject,
      filterDataClass: newClass,
    });
  }
);

defineProps({
  className: Array,
});
</script>

<style scoped></style>
