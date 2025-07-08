import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import type { ClassDetails } from "@/types/ClassDetailsType";
import type { Student } from "@/types/students";
import { STUDENTS_API_URL, CLASS_API_URL } from "@/constant";
import { computed } from "@vue/reactivity";

export const useStudentStore = defineStore(
  "studentStore",
  () => {
    const classes = ref<ClassDetails[]>([]);
    const students = ref<Student[]>([]);

    const updateClasses = (upadateClass: ClassDetails[]) =>
      (classes.value = upadateClass);

    const updateStudents = (updatedStudents: Student[]) =>
      (students.value = updatedStudents);

    const getClassName = computed(() => {
      return (classId: string) => {
        const classInfo = classes.value.find(
          (cl: ClassDetails) => cl.classId === classId
        );
        return classInfo ? classInfo.className : "Unknown Class";
      };
    });

    const getClassTeacher = computed(() => {
      return (classId: string) => {
        const classInfo = classes.value.find(
          (cl: ClassDetails) => cl.classId === classId
        );
        return classInfo ? classInfo.teacherName : "Unknown Class";
      };
    });

    const fetchClasses = async () => {
      try {
        const response = await axios.get(CLASS_API_URL);
        const data = response.data;

        return data;
      } catch (error) {
        console.error("Error fetching jobs", error);
      }
    };

    const fetchStudentDetails = async () => {
      try {
        const response = await axios.get(STUDENTS_API_URL);
        const data = response.data;

        return data;
      } catch (error) {
        console.error("Error fetching jobs", error);
      }
    };

    return {
      classes,
      students,
      getClassName,
      getClassTeacher,
      fetchClasses,
      fetchStudentDetails,
      updateClasses,
      updateStudents,
    };
  },
  {
    persist: true,
  }
);
