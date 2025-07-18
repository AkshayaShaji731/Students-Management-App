<template>
  <v-container>
    <v-form>
      <v-text-field label="Student Name" v-model="studentForm.name" />
      <v-text-field label="Student ID" v-model="studentForm.id" readonly />
      <v-select
        label="Class ID"
        :items="classId"
        v-model="studentForm.classId"
      />
      <v-label class="pb-6">Enter the Marks of Subjects</v-label>
      <v-container v-for="mark in studentForm.marks">
        <v-text-field
          :label="`${mark.subject}`"
          type="number"
          v-model="mark.mark"
        />
      </v-container>
      <v-btn @click="studentStore.addStudent(studentForm)" type="submit"
        >Submit</v-btn
      >
    </v-form>
  </v-container>
</template>

<script lang="ts" setup>
import { reactive, onMounted, ref, computed } from "vue";

import { useStudentStore } from "@/stores/StudentStore";

import type { ClassDetails } from "@/types/ClassDetailsType";
import type { Student } from "@/types/Students";
import { MARKS } from "@/constants";

const studentStore = useStudentStore();
const length = studentStore.students.length - 1;

const classId = computed(() =>
  studentStore.classes.map((classDetails: ClassDetails) => classDetails.classId)
);

const latestId = computed(() => Number(studentStore.students[length].id));
const studentId = ref(String(latestId.value + 1));

const studentForm = reactive<Student>({
  name: "",
  id: studentId.value,
  marks: MARKS,
  classId: "",
});

onMounted(async () => {
  const students = await studentStore.fetchStudentDetails();
  studentStore.updateStudents(students);
  const classes = await studentStore.fetchClasses();
  studentStore.updateClasses(classes);
});
</script>

<style scoped lang="sass">
:deep.v-container
  background-color: #343434
  color: #fff
</style>
