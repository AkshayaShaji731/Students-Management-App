<template>
  <v-tabs-window>
    <v-tabs-window-item>
      <v-card>
        <v-card-text>Class ID : c1</v-card-text>
        <v-card-text>Class Name : class A</v-card-text>
        <v-card-text>Teacher Name : Mary</v-card-text>
        <v-card-text>Total Students : 4</v-card-text>
      </v-card>
    </v-tabs-window-item>
  </v-tabs-window>
</template>

<script setup></script>

<style scoped>
.v-card :deep() {
  background-color: #663399;
}

.v-card-text :deep() {
  color: #fff;
  font-weight: bold;
  font-size: 20px;
}
</style>
