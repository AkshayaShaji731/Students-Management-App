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
      <ClassDetails v-model="tab" :classes="classStore.classes" />
    </v-card>
    <v-btn class="position-absolute top-0 right-0 ma-4" @click="handleAddForm()"
      >Add class</v-btn
    >
    <AddClass
      :is-add-class-active="isAddClassActive"
      @close="handleAddForm()"
    />
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import { useStudentStore } from "@/stores/StudentStore";

import AddClass from "@/components/AddClass.vue";
import ClassDetails from "@/components/ClassDetails.vue";

const tab = ref<null | number>(null);
const isAddClassActive = ref(false);
const classStore = useStudentStore();

const route = useRoute();
const classId = route.params.id as string;

const handleAddForm = () => {
  isAddClassActive.value = !isAddClassActive.value;
};

onMounted(async () => {
  const classes = await classStore.fetchClasses();
  classStore.updateClasses(classes);
  const classTab: number = classStore.classes.findIndex(
    (classDetails) => classDetails.classId === classId
  );

  if (classTab >= 0) {
    tab.value = classTab;
  }
});
</script>

<style scoped>
.class-page-container {
  margin-left: 100px;
  position: relative;
}

.v-card :deep() {
  background-color: #341539;
  color: #fff;
  border-radius: 0;
  height: 100vh;
}
</style>
