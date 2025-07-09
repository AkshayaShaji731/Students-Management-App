<template>
  <h1 class="add-student-heading">
    <add-student />
  </h1>
</template>

<script lang="ts" setup>
import AddStudent from "@/components/AddStudent.vue";
</script>

<style scoped>
.add-student-heading {
  background-color: #341539;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  height: 100vh;
  margin-left: 100px;
}
</style>
