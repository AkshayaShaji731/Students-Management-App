import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import type { Students } from "@/types/students";

export const useStudentStore = defineStore(
  "studentStore",
  () => {
    const studentsDetails = ref<Students[]>([]);

    const getStudentDetails = (details: Students[]) =>
      (studentsDetails.value = details);

    const fetchStudetDetails = async () => {
      try {
        const response = await axios.get("http://localhost:3000/students");
        const data = response.data;

        return data;
      } catch (error) {
        console.error("Error fetching jobs", error);
      }
    };

    return { studentsDetails, fetchStudetDetails, getStudentDetails };
  },
  {
    persist: true,
  }
);
