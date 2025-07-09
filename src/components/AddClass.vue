<template>
  <v-card class="pa-5 h-screen position-absolute top-0 right-0 w-25">
    <v-text-field label="Class ID"></v-text-field>
    <v-text-field label="Class Name"></v-text-field>
    <v-text-field label="Teacher Name"></v-text-field>
    <v-text-field label="Total Students"></v-text-field>
    <v-container class="d-flex justify-space-between">
      <v-btn>Add Student</v-btn>
      <v-btn>Cancel</v-btn>
    </v-container>
  </v-card>
</template>

<script setup lang="ts"></script>

<style scoped>
.v-card :deep() {
  background-color: #341539;
  color: #fff;
}
</style>
