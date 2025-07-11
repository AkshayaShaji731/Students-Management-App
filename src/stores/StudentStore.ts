import { ref } from "vue";
import axios from "axios";
import { defineStore } from "pinia";

import type { ClassDetails } from "@/types/ClassDetailsType";
import type { Student } from "@/types/Students";
import { BASE_API_URL } from "@/constants";

export const useStudentStore = defineStore(
  "studentStore",
  () => {
    const classes = ref<ClassDetails[]>([]);
    const students = ref<Student[]>([]);

    const updateClasses = (upadateClass: ClassDetails[]) =>
      (classes.value = upadateClass);

    const updateStudents = (updatedStudents: Student[]) =>
      (students.value = updatedStudents);

    const addClass = async (classData: ClassDetails): Promise<void> => {
      try {
        const res = await axios.post(`${BASE_API_URL}/classes`, classData);
        classData.classId = "";
        classData.className = "";
        classData.teacherName = "";
        classData.totalStudents = 0;
      } catch (error) {
        // TODO:console remove after implement the toast
        console.error("Error fetching job", error);
      }
    };

    const addStudent = async (student: Student) => {
      try {
        const response = await axios.post(`${BASE_API_URL}/students`, student);
        students.value.push(response.data);
      } catch (error) {
        // TODO:console remove after implement the toast
        console.error("Error fetching jobs", error);
      }
    };
    const fetchClasses = async () => {
      try {
        const response = await axios.get(`${BASE_API_URL}/classes`);
        const data = response.data;

        return data;
      } catch (error) {
        console.error("Error fetching jobs", error);
      }
    };

    const fetchStudentDetails = async () => {
      try {
        const response = await axios.get(`${BASE_API_URL}/students`);
        const data = response.data;

        return data;
      } catch (error) {
        console.error("Error fetching jobs", error);
      }
    };

    const getClassName = (classId: string) => {
      const classInfo = classes.value.find(
        (cl: ClassDetails) => cl.classId === classId
      );

      return classInfo ? classInfo.className : "-";
    };

    const getClassTeacher = (classId: string) => {
      const classInfo = classes.value.find(
        (cl: ClassDetails) => cl.classId === classId
      );

      return classInfo ? classInfo.teacherName : "-";
    };

    return {
      addClass,
      addStudent,
      classes,
      fetchClasses,
      fetchStudentDetails,
      getClassName,
      getClassTeacher,
      students,
      updateClasses,
      updateStudents,
    };
  },
  {
    persist: true,
  }
);
