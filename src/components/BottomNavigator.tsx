import React from "react";
import { Step } from "src/types/index.d";
import ShowComponentWhen from "./common/ShowComponentWhen";

interface BottomNavigatorProps {
  steps: Step[];
  currentStep: number;
  handleChange: (newStep: number) => void;
  formik: any;
  styles?: any;
}

const BottomNavigator: React.FC<BottomNavigatorProps> = ({ steps, currentStep, handleChange, formik, styles }) => {
  const isNextDisabled = !steps[currentStep].isCompleted;

  const isLastTab = currentStep == steps.length - 1;
  const isFirstTab = currentStep == 0;

  const handleNext = () => {
    handleChange(currentStep + 1);
  };

  const handleBack = () => {
    handleChange(currentStep - 1);
  };

  return (
    <div className={styles.container}>
      <ShowComponentWhen when={!isFirstTab} show={<button onClick={handleBack}>back</button>} />
      <ShowComponentWhen
        when={!isLastTab}
        show={
          <button onClick={handleNext} disabled={isNextDisabled}>
            next
          </button>
        }
      />

      <ShowComponentWhen
        when={isLastTab}
        show={
          <button type="submit" onClick={formik.handleSubmit} disabled={isNextDisabled}>
            submit
          </button>
        }
      />
    </div>
  );
};

export default BottomNavigator;
