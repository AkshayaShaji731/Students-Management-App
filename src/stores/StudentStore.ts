import { ref } from "vue";
import { defineStore } from "pinia";

import type { ClassDetails } from "@/types/ClassDetailsType";
import type { Student } from "@/types/Students";
import api from "@/api/api";

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
        const res = await api.post(`/classes`, classData);
        classData.classId = "";
        classData.className = "";
        classData.teacherName = "";
        classData.totalStudents = 0;
      } catch (error) {
        // TODO:console remove after implement the toast
        console.error("Error fetching job", error);
      }
    };

    const addStudent = async (student: Student): Promise<void> => {
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
        const response = await api.get(`/classes`);
        const data = response.data;

        return data;
      } catch (error) {
        console.error("Error fetching jobs", error);
      }
    };

    const fetchStudentDetails = async () => {
      try {
        const response = await api.get(`/students`);
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
