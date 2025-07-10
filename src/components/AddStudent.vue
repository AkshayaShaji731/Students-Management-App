<template>
  <v-container>
    <v-form>
      <v-text-field
        label="Student Name"
        v-model="studentForm.name"
      ></v-text-field>
      <v-text-field label="Student ID" v-model="studentForm.id"></v-text-field>
      <v-select
        label="Class ID"
        :items="classIDs"
        v-model="studentForm.classId"
      ></v-select>
      <v-label class="pb-6">Enter the Marks of Subjects</v-label>
      <v-container v-for="mark in studentForm.marks">
        <v-text-field
          :label="`${mark.subject}`"
          v-model="mark.mark"
        ></v-text-field>
      </v-container>
      <v-btn type="submit" color="primary">Submit</v-btn>
    </v-form>
  </v-container>
</template>

<script lang="ts" setup>
import type { Mark } from "@/types/Marks";
import type { Student } from "@/types/Students";
import { reactive } from "vue";

const classIDs: string[] = ["c1", "c2", "c3"];

const studentForm = reactive<Student>({
  name: "",
  id: "",
  marks: <Mark[]>[
    {
      subject: "English",
      mark: 0,
    },
    {
      subject: "Maths",
      mark: 0,
    },
    {
      subject: "Physics",
      mark: 0,
    },
    {
      subject: "Chemistry",
      mark: 0,
    },
    {
      subject: "Computer",
      mark: 0,
    },
  ],
  classId: "",
});
</script>

<style scoped>
.v-container :deep() {
  background-color: #343434;
  color: #fff;
}
</style>
