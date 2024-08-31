import { ReactNode } from "react";
interface Field {
  name: string;
  label?: string;
  placeholder?: string;
  type: string;
  required?: boolean;
  CustomElement?: React.ComponentType<any>;
}

export interface Step {
  fields: Field[];
  title: string | ReactNode;
  isCompleted?: boolean;
}
