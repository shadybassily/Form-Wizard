import React from "react";
import { Step } from "src/types/index.d";

interface BottomNavigatorProps {
  steps: Step[];
  currentStep: number;
  handleChange: (newStep: number) => void;
}

const BottomNavigator: React.FC<BottomNavigatorProps> = ({ steps, currentStep, handleChange }) => {
  return (
    <div>
      {steps?.map((step, i) => (
        <div
          key={i}
          onClick={() => {
            handleChange(i);
          }}
        >
          {step.title}
        </div>
      ))}
    </div>
  );
};

export default BottomNavigator;
