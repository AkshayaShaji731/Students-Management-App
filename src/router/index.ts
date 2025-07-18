import { createRouter, createWebHistory } from "vue-router";

import Homepage from "@/pages/HomePage.vue";
import ClassPage from "@/pages/ClassPage.vue";
import StudentsPage from "@/pages/StudentsPage.vue";
import AddStudentPage from "@/pages/AddStudentPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Homepage,
    },
    {
      path: "/class",
      name: "class",
      component: ClassPage,
    },
    {
      path: "/students",
      name: "students",
      component: StudentsPage,
    },
    {
      path: "/add-student",
      name: "add-student",
      component: AddStudentPage,
    },
    {
      path: "/students/:id",
      name: "classStudents",
      component: StudentsPage,
    },
  ],
});

export default router;
