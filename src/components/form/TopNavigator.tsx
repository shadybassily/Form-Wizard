import React from "react";
import { Step } from "src/types/index";

interface TopNavigatorProps {
  steps: Step[];
  currentStep: number;
  formik: any;
  handleChange: (newStep: number) => void;
  setIsNext: (value: boolean) => void;
}

const TopNavigator: React.FC<TopNavigatorProps> = ({ steps, currentStep, handleChange, setIsNext }) => {
  const isNextDisabled = !steps[currentStep].isCompleted;

  const handleOnClick = (i: number) => {
    if (i < currentStep) {
      handleChange(i);
      setIsNext(false);
    } else {
      if (isNextDisabled) return;
      handleChange(i);
      setIsNext(true);
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
