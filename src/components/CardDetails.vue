<template>
  <v-tabs-window v-model="tab">
    <v-tabs-window-item v-for="item in tabNames" :key="item" :value="item">
      <v-card>
        <v-card-text>Class ID : {{ classDetails.classId }}</v-card-text>
        <v-card-text>Class Name : {{ classDetails.className }}</v-card-text>
        <v-card-text>Teacher Name : {{ classDetails.teacherName }}</v-card-text>
        <v-card-text
          >Total Students : {{ classDetails.totalStudents }}</v-card-text
        >
      </v-card>
    </v-tabs-window-item>
  </v-tabs-window>
</template>
<script setup>
import { ref } from "vue";

const tab = ref("class A");
const tabNames = ["class A", "Class B", "Class C"];
const classDetails = {
  classId: "c1",
  className: "class A",
  teacherName: "Mary",
  totalStudents: 4,
};
</script>
<style scoped>
.v-card :deep() {
  background-color: #663399;
}
.v-card-text :deep(){
    color: #fff;
    font-weight: bold;
    font-size: 20px;
}
</style>
