import React from "react";
import { Step } from "src/types/index";
import ShowComponentWhen from "src/components/common/ShowComponentWhen";
import { FormikFormProps } from "formik";

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
      <ShowComponentWhen
        when={!isFirstTab}
        show={
          <button type="button" className={styles.back} onClick={handleBack}>
            Back
          </button>
        }
      />
      <ShowComponentWhen
        when={!isLastTab}
        show={
          <button type="button" className={styles.next} onClick={handleNext} disabled={isNextDisabled}>
            Next
          </button>
        }
      />

      <ShowComponentWhen
        when={isLastTab}
        show={
          <button className={styles.submit} type="submit" onClick={formik.handleSubmit}>
            Submit
          </button>
        }
      />
    </div>
  );
};

export default BottomNavigator;
