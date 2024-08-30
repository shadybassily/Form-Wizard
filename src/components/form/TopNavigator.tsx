import React from "react";
import { Step } from "src/types/index";
// import styles from "./top-navigator.module.css";

interface TopNavigatorProps {
  steps: Step[];
  currentStep: number;
  formik: any;
  handleChange: (newStep: number) => void;
  topNavigatorStyles?: any;
}

const TopNavigator: React.FC<TopNavigatorProps> = ({ steps, currentStep, handleChange, topNavigatorStyles }) => {
  const isNextDisabled = !steps[currentStep].isCompleted;
  console.log(isNextDisabled);

  const isLastTab = currentStep == steps.length - 1;
  const isFirstTab = currentStep == 0;

  // console.log("isNextDisabled", isNextDisabled, "isFirstTab", isFirstTab, "isLastTab", isLastTab);

  const handleOnClick = (i: number) => {
    if (i < currentStep) {
      handleChange(i);
    } else {
      if (isNextDisabled) return;
      handleChange(i);
    }
  };

  return (
    <div className={`${topNavigatorStyles.container}`}>
      {steps?.map((step, i) => (
        <div
          key={i}
          onClick={() => {
            handleOnClick(i);
          }}
          className={`${topNavigatorStyles.step} ${currentStep === i ? topNavigatorStyles.currentStep : ""}`}
        >
          {step.title}
        </div>
      ))}
    </div>
  );
};

export default TopNavigator;
