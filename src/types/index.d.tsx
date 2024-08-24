import { ReactNode } from "react";

export type Field = any;

export interface Step {
  title: string | ReactNode;
  fields: Field[];
  isCompleted?: boolean;
}
