<template>
  <v-container>
    <v-form>
      <v-text-field label="Student Name"></v-text-field>
      <v-text-field label="Student ID"></v-text-field>
      <v-select label="Class ID" :items="classIDs"></v-select>
      <v-label class="pb-6">Enter the Marks of Subjects</v-label>
      <v-text-field label="English"></v-text-field>
      <v-text-field label="Maths"></v-text-field>
      <v-text-field label="Physics"></v-text-field>
      <v-text-field label="Chemistry"></v-text-field>
      <v-text-field label="Computer"></v-text-field>
      <v-btn type="submit" color="primary">Submit</v-btn>
    </v-form>
  </v-container>
</template>

<script lang="ts" setup>
const classIDs: string[] = ["c1", "c2", "c3"];
</script>

<style scoped>
.v-container :deep() {
  background-color: #343434;
  color: #fff;
}
</style>
