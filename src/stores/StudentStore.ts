import axios from "axios";
import { defineStore } from "pinia";

import { BASE_API_URL } from "@/constants/index";
import type { ClassDetails } from "@/types/ClassDetailType";

export const useStudentStore = defineStore(
  "studentStore",
  () => {
    const AddClass = async (classes: ClassDetails): Promise<void> => {
      try {
        const res = await axios.post(`${BASE_API_URL}/classes`, classes);
        classes.classId = "";
        classes.className = "";
        classes.teacherName = "";
        classes.totalStudents = 0;
      } catch (error) {
        console.error("Error fetching job", error);
      }
    };

    return { AddClass };
  },
  {
    persist: true,
  }
);
