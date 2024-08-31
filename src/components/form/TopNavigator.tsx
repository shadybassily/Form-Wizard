import React from "react";
import { Step } from "src/types/index";

interface TopNavigatorProps {
  steps: Step[];
  currentStep: number;
  formik: any;
  handleChange: (newStep: number) => void;
}

const TopNavigator: React.FC<TopNavigatorProps> = ({ steps, currentStep, handleChange }) => {
  const isNextDisabled = !steps[currentStep].isCompleted;

  const handleOnClick = (i: number) => {
    if (i < currentStep) {
      handleChange(i);
    } else {
      if (isNextDisabled) return;
      handleChange(i);
    }
  };

  return (
    <div className="top-navigator-container">
      {steps?.map((step, i) => (
        <div
          key={i}
          onClick={() => {
            handleOnClick(i);
          }}
          className={`step-title ${currentStep === i ? "current-step" : ""}`}
        >
          {step.title}
        </div>
      ))}
    </div>
  );
};

export default TopNavigator;
