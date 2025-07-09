import type { Mark } from "./Marks";

export interface Student {
  name: string;
  id: string;
  marks: Mark[];
  classId: string;
}
