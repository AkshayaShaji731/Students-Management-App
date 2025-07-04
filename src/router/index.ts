import { createRouter, createWebHistory } from "vue-router";

import homepage from "@/pages/HomePage.vue";
import classPage from "@/pages/ClassPage.vue";
import studentsPage from "@/pages/StudentsPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: homepage,
    },
    {
      path: "/class",
      name: "class",
      component: classPage,
    },
    {
      path: "/students",
      name: "students",
      component: studentsPage,
    },
  ],
});

export default router;
