<template>
  <section class="student-page-container">
    <div class="student-page-heading">
      <h2 class="d-flex align-center justify-center font-weight-bold">
        STUDENT DETAILS
      </h2>
    </div>
    <div class="student-page-content">
      <StudentCard
        v-for="student in students"
        :key="student.id"
        :student-details="student"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";

import { useRoute } from "vue-router";

import { useStudentStore } from "@/stores/StudentStore";

import StudentCard from "@/components/StudentCard.vue";

const studentStore = useStudentStore();

const route = useRoute();
const classId = route.params.id as string;

const students = computed(() => {
  if (classId != undefined) {
    return studentStore.students.filter(
      (student) => student.classId === classId
    );
  }
  return studentStore.students;
});
console.log(students);

onMounted(async () => {
  const students = await studentStore.fetchStudentDetails();
  studentStore.updateStudents(students);
  const Classes = await studentStore.fetchClasses();
  studentStore.updateClasses(Classes);
});
</script>

<style scoped>
.student-page-container {
  margin-left: 100px;
}

.student-page-heading {
  background-color: #341539;
  color: #fff;
  padding: 50px 10px 10px;
}

.student-page-content {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  background-color: #341539;
  padding: 20px 10px;
}

@media screen and (min-width: 1024px) {
  .student-page-content {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
