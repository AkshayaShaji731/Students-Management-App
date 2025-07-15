<template>
  <h1 class="add-student-heading">
    <AddStudent />
  </h1>
</template>

<script lang="ts" setup>
import AddStudent from "@/components/AddStudent.vue";
</script>

<style scoped lang="sass">
.add-student__heading
  background-color: #341539
  color: #fff
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  padding: 16px
</style>
