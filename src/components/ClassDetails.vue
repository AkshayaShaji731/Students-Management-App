<template>
  <v-tabs-window>
    <v-tabs-window-item
      v-for="classes in props.classes"
      :key="classes.className"
      :value="classes"
    >
      <v-card>
        <v-card-text>Class ID : {{ classes.classId }}</v-card-text>
        <v-card-text>Class Name : {{ classes.className }}</v-card-text>
        <v-card-text>Teacher Name : {{ classes.teacherName }}</v-card-text>
        <v-card-text>Total Students : {{ classes.totalStudents }}</v-card-text>
      </v-card>
    </v-tabs-window-item>
  </v-tabs-window>
</template>

<script setup lang="ts">
const props = defineProps({
  classes: {
    required: true,
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
