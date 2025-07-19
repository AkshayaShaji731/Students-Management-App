<template>
  <v-table theme="dark" class="ma-5">
    <thead>
      <tr>
        <th v-for="head in tableHeading">{{ head }}</th>
      </tr>
    </thead>
    <tbody v-for="student in paginatedStudents" :key="student.id">
      <tr>
        <td>{{ student.name }}</td>
        <td>{{ student.id }}</td>
        <td>{{ studentStore.getClassName(student.classId) }}</td>
      </tr>
    </tbody>
  </v-table>
  <v-pagination v-model="page" :length="totalPages" rounded="0"></v-pagination>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

import { useStudentStore } from "@/stores/StudentStore";

import type { Student } from "@/types/Students";
import { tableHeading } from "@/constants";

const studentStore = useStudentStore();

interface Students {
  students: Student[];
}

const props = defineProps<Students>();

const page = ref(1);
const studentsNumber = ref(10);
const students = ref(props.students);

const totalPages = computed(() => {
  return Math.ceil(students.value.length / studentsNumber.value);
});

const paginatedStudents = computed(() => {
  const start = (page.value - 1) * studentsNumber.value;
  const end = start + studentsNumber.value;
  return students.value.slice(start, end);
});
</script>
