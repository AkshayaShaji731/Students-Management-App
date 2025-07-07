<template>
  <section class="class-page-container">
    <ClassTab :tab-value="sample">
      <ClassDetails :tab-value="sample" />
    </ClassTab>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

import ClassTab from "@/components/ClassTab.vue";
import ClassDetails from "@/components/ClassDetails.vue";
import { useStudentStore } from "@/store/studentStore";

const sample = {
  tab: null,
  classNames: ["Class A", "Class B", "Class C"],
};

const classStore = useStudentStore();

onMounted(async () => {
  const classes = await classStore.fetchClasses();
  classStore.updateClasses(classes);
});
</script>

<style scoped>
.class-page-container {
  margin-left: 100px;
}
</style>
