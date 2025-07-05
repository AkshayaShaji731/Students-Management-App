import type { Marks } from "./Marks";

export interface Students {
  name: string;
  id: string;
  marks: Marks[];
  classId: string;
}
