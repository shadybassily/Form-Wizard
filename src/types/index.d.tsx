import { ReactNode } from "react";

export interface Step {
  title: string | ReactNode;
  children: ReactNode;
}
