<template>
  <v-table theme="dark" class="ma-5">
    <thead>
      <tr>
        <th v-for="head in tableHeading">{{ head }}</th>
      </tr>
    </thead>
    <tbody v-for="student in students" :key="student.id">
      <tr>
        <td>{{ student.name }}</td>
        <td>{{ student.id }}</td>
        <td>{{ studentStore.getClassName(student.classId) }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { useStudentStore } from "@/stores/StudentStore";

const studentStore = useStudentStore();
const tableHeading = ref<string[]>(["Student Name", "Student ID", "ClassName"]);

defineProps({
  students: Object,
});
</script>

<style scoped></style>
