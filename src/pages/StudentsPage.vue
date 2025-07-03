<template>
  <section class="student-page-container">Student Page</section>
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
</style>
