import type { Route } from "@/types/Route";

export const ROUTE_LIST: Route[] = [
  {
    path: "/",
    icon: "mdi-home",
    title: "Home",
  },
  {
    path: "/class",
    icon: "mdi-city",
    title: "Classes",
  },
  {
    path: "/students",
    icon: "mdi-account",
    title: "Students",
  },
  {
    path: "/add-student",
    icon: "mdi-plus",
    title: "Add Student",
  },
];
export const BASE_API_URL = "http://localhost:3000";
