<template>
  <v-form class="pa-5 h-screen position-absolute top-0 right-0 w-25">
    <v-text-field label="Class ID" v-model="classForm.classId" />
    <v-text-field label="Class Name" v-model="classForm.className" />
    <v-text-field label="Teacher Name" v-model="classForm.teacherName" />
    <v-text-field
      label="Total Students"
      v-model="classForm.totalStudents"
      readonly
    />
    <v-container class="d-flex justify-space-between">
      <v-btn @click="addClassStore.addClass(classForm)">Add Class</v-btn>
      <v-btn>Cancel</v-btn>
    </v-container>
  </v-form>
</template>

<script setup lang="ts">
import { reactive } from "vue";

import { useStudentStore } from "@/stores/StudentStore";
import type { ClassDetails } from "@/types/ClassDetailsType";

const addClassStore = useStudentStore();

const classForm = reactive<ClassDetails>({
  classId: "",
  className: "",
  teacherName: "",
  totalStudents: 0,
});
</script>

<style scoped lang="sass">
.v-form :deep()
  background-color: #341539
  color: #fff
</style>
