import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import type { Student } from "@/types/students";
import { API_URL } from "@/constant";

export const useStudentStore = defineStore(
  "studentStore",
  () => {
    const students = ref<Student[]>([]);

    const updateStudents = (updatedStudents: Student[]) =>
      (students.value = updatedStudents);

    const fetchStudentDetails = async () => {
      try {
        const response = await axios.get(API_URL);
        const data = response.data;

        return data;
      } catch (error) {
        console.error("Error fetching jobs", error);
      }
    };

    return { students, fetchStudentDetails, updateStudents };
  },
  {
    persist: true,
  }
);
