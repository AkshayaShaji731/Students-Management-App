<template>
  <v-form
    class="pa-5 h-screen position-absolute top-0 right-0"
    v-if="props.addClassActive"
  >
    <v-label class="text-h5 pa-2 font-weight-bold">Create New class</v-label>
    <v-text-field label="Class ID" v-model="classForm.classId" />
    <v-text-field label="Class Name" v-model="classForm.className" />
    <v-text-field label="Teacher Name" v-model="classForm.teacherName" />
    <v-container>
      <v-btn @click="addClassStore.addClass(classForm)">Add Class</v-btn>
      <v-btn @click="handleCancel()">Cancel</v-btn>
    </v-container>
  </v-form>
</template>

<script setup lang="ts">
import { reactive } from "vue";

import { useStudentStore } from "@/stores/StudentStore";
import type { ClassDetails } from "@/types/ClassDetailsType";

const addClassStore = useStudentStore();

const props = defineProps({
  addClassActive: Boolean,
});

const emit = defineEmits(["close"]);
const handleCancel = () => {
  emit("close");
};
const classForm = reactive<ClassDetails>({
  classId: "",
  className: "",
  teacherName: "",
  totalStudents: 0,
});
</script>

<style scoped>
.v-form :deep() {
  background-color: #330238;
  color: #fff;
  border: 1px solid #2b0c2e;
}

.v-container :deep() {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

@media screen and (min-width: 768px) {
  .v-container :deep() {
    flex-direction: row;
  }
  .v-form :deep() {
    width: 75%;
  }
}

@media screen and (min-width: 1024px) {
  .v-form :deep() {
    width: 50%;
  }
}

@media screen and (min-width: 1024px) {
  .v-form :deep() {
    width: 25%;
  }
}
</style>
