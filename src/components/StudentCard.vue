<template>
  <v-card class="font-weight-bold text-body-1 d-flex flex-column ma-4 pa-4">
    <v-title>Student Name :Aju</v-title>
    <v-title>Student ID :101</v-title>
    <v-title>Class ID:c2 </v-title>
    <v-title class="d-flex justify-center align-center mb-5">Marks</v-title>
    <v-table theme="dark">
      <thead>
        <tr>
          <th class="text-left">Subject</th>
          <th class="text-left">Mark</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>maths</td>
          <td>35</td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<script setup lang="ts"></script>

<style scoped>
.v-card :deep() {
  background-color: #481d50;
  color: #fff;
}
</style>
