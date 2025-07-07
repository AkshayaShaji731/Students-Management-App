import type { Route } from "@/type/Route";

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
];
export const API_URL = "http://localhost:3000/students";
