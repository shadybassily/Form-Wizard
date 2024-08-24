import React from "react";
import { Step } from "src/types/index.d";
// import styles from "./top-navigator.module.css";

interface TopNavigatorProps {
  steps: Step[];
  currentStep: number;
  formik: any;
  handleChange: (newStep: number) => void;
  topNavigatorStyles?: any;
}

const TopNavigator: React.FC<TopNavigatorProps> = ({ steps, currentStep, handleChange, topNavigatorStyles, formik }) => {
  const { fields } = steps[currentStep];

  const handleOnClick = (i: number) => {
    handleChange(i);
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
