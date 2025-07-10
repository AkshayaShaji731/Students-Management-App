<template>
  <v-card
    class="font-weight-bold text-body-1 d-flex flex-column ma-4 pa-4"
    v-if="props.studentDetails"
  >
    <v-card-text>Student Name : {{ props.studentDetails.name }} </v-card-text>
    <v-card-text>Student ID : {{ props.studentDetails.id }}</v-card-text>
    <v-card-text
      >Class Name :
      {{ studentStore.getClassName(props.studentDetails.classId) }}
    </v-card-text>
    <v-card-text
      >Class Teacher :
      {{ studentStore.getClassTeacher(props.studentDetails.classId) }}
    </v-card-text>
    <v-card-text class="d-flex justify-center align-center mb-5"
      >Marks</v-card-text
    >
    <v-table theme="dark">
      <thead>
        <tr>
          <th class="text-left">Subject</th>
          <th class="text-left">Mark</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="mark in props.studentDetails.marks" :key="mark.mark">
          <td>{{ mark.subject }}</td>
          <td>{{ mark.mark }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<script setup lang="ts">
import { useStudentStore } from "@/stores/StudentStore";
import type { Student } from "@/types/Students";

const studentStore = useStudentStore();

interface Props {
  studentDetails?: Student;
}

const props = withDefaults(defineProps<Props>(), {
  studentDetails: () => ({
    name: "",
    id: "",
    marks: [],
    classId: "",
  }),
});
</script>

<style scoped>
.v-card :deep() {
  background-color: #481d50;
  color: #fff;
}
</style>
