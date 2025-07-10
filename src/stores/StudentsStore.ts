import { ref, computed } from "vue";
import axios from "axios";
import { defineStore } from "pinia";

import type { Student } from "@/types/Students";
import { BASE_API_URL } from "@/constants";

export const useStudentStore = defineStore(
  "studentStore",
  () => {
    const students = ref<Student[]>([]);

    const updateStudents = (updatedStudents: Student[]) =>
      (students.value = updatedStudents);

    const fetchStudentDetails = async () => {
      try {
        const response = await axios.get(`${BASE_API_URL}/students`);
        const data = response.data;

        return data;
      } catch (error) {
        console.error("Error fetching jobs", error);
      }
    };
    const addStudent = async (student: Student) => {
      try {
        const response = await axios.post(`${BASE_API_URL}/students`, student);
      } catch (error) {
        console.error("Error fetching jobs", error);
      }
    };

    const latestId = computed(() => {
      const id = Number(students[students.length - 1].id);
      return String(id + 1);
    });

    return { addStudent, fetchStudentDetails, students, updateStudents };
  },
  {
    persist: true,
  }
);
