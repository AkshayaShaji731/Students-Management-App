<template>
  <section class="class-page-container">
    <v-card class="pa-4" permanent>
      <v-card-title class="text-h5 font-weight-bold">Classes</v-card-title>
      <v-tabs v-model="tab">
        <v-tab
          v-for="className in classStore.classes"
          :key="className.className"
          :text="className.className"
          :value="className"
        ></v-tab>
      </v-tabs>
      <ClassDetails :classes="classStore.classes" v-model="tab" />
    </v-card>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

import { useStudentStore } from "@/store/studentStore";

import ClassDetails from "@/components/ClassDetails.vue";

const tab = ref(null);
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

.v-card :deep() {
  background-color: #341539;
  color: #fff;
  border-radius: 0;
  height: 100vh;
}
</style>
