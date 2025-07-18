<template>
  <section class="student-page__container">
    <div class="student-page__heading">
      <h2 class="d-flex align-center justify-center font-weight-bold">
        STUDENT DETAILS
      </h2>
    </div>
    <div class="student-page__content">
      <StudentCard
        v-for="student in studentStore.students"
        :key="student.id"
        :student-details="student"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

import { useStudentStore } from "@/stores/StudentStore";
import StudentCard from "@/components/StudentCard.vue";

const studentStore = useStudentStore();

onMounted(async () => {
  const students = await studentStore.fetchStudentDetails();
  studentStore.updateStudents(students);
  const Classes = await studentStore.fetchClasses();
  studentStore.updateClasses(Classes);
});
</script>

<style scoped lang="sass">
.student-page__container
  margin-left: 100px

.student-page__heading
  background-color: #341539
  color: #fff
  padding: 50px 10px 10px

.student-page__content
  display: grid
  grid-template-columns: repeat(1, 1fr)
  background-color: #341539
  padding: 20px 10px

@media (min-width: 1024px)
  .student-page__content
    grid-template-columns: repeat(2, 1fr)
</style>
