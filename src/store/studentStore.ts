import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import type { Students } from "@/types/students";
import { API_URL } from "@/constant";

export const useStudentStore = defineStore(
  "studentStore",
  () => {
    const studentsDetails = ref<Students[]>([]);

    const updateStudents = (details: Students[]) =>
      (studentsDetails.value = details);

    const fetchStudentDetails = async () => {
      try {
        const response = await axios.get(API_URL);
        const data = response.data;

        return data;
      } catch (error) {
        console.error("Error fetching jobs", error);
      }
    };

    return { studentsDetails, fetchStudentDetails, updateStudents };
  },
  {
    persist: true,
  }
);
