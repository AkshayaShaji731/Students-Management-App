<template>
  <section class="student-page-container">
    <div class="student-heading">
      <h2 class="d-flex align-center justify-center font-weight-bold">
        STUDENT DETAILS
      </h2>
    </div>
    <div class="student-con">
      <v-card
        v-for="student in studentStore.studentsDetails"
        class="font-weight-bold text-body-1 d-flex flex-column ma-4 pa-4"
      >
        <v-title>Student Name : {{ student.name }}</v-title>
        <v-title>Student ID : {{ student.id }}</v-title>
        <v-title>Class ID: {{ student.classId }}</v-title>
        <v-title class="d-flex justify-center align-center mb-5">Marks</v-title>
        <v-table theme="dark">
          <thead>
            <tr>
              <th class="text-left">Subject</th>
              <th class="text-left">Mark</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="mark in student.marks" :key="mark.subject">
              <td>{{ mark.subject }}</td>
              <td>{{ mark.mark }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-card>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useStudentStore } from "@/store/studentStore";

const studentStore = useStudentStore();

onMounted(async () => {
  const details = await studentStore.fetchStudetDetails();
  studentStore.getStudentDetails(details);
});
</script>

<style scoped>
.student-page-container {
  margin-left: 100px;
}

.student-heading {
  background-color: #341539;
  color: #fff;
  padding: 50px 10px 10px;
}

.student-con {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  background-color: #341539;
  padding: 20px 10px;
}

.v-card :deep() {
  background-color: #481d50;
  color: #fff;
}

@media screen and (min-width: 1024px) {
  .student-con {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
