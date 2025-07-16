<template>
  <v-tabs-window>
    <v-tabs-window-item
      v-for="classDetails in props.classes"
      :key="classDetails.className"
      :value="classDetails"
    >
      <v-card>
        <v-card-text>Class ID : {{ classDetails.classId }}</v-card-text>
        <v-card-text>Class Name : {{ classDetails.className }}</v-card-text>
        <v-card-text>Teacher Name : {{ classDetails.teacherName }}</v-card-text>
        <v-card-text
          @click="handleTotalStudentsCountClick(classDetails.classId)"
          >Total Students : {{ classDetails.totalStudents }}
        </v-card-text>
      </v-card>
    </v-tabs-window-item>
  </v-tabs-window>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const handleTotalStudentsCountClick = (classId: string) => {
  router.push(`/students/${classId}`);
};
const props = defineProps({
  classes: {
    type: Object,
  },
});
</script>

<style scoped>
.v-card :deep() {
  background-color: #663399;
  margin-block: 50px;
  padding: 50px;
}

.v-card-text :deep() {
  color: #fff;
  font-weight: bold;
  font-size: 20px;
}
</style>
