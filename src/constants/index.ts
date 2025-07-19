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
];
export const BASE_API_URL = "http://localhost:3000";

export const tableHeading: string[] = [
  "Student Name",
  "Student ID",
  "ClassName",
];
