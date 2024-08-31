import React from "react";
import ShowComponentWhen from "src/components/common/ShowComponentWhen";
import { Step } from "src/types/index";

interface BottomNavigatorProps {
  steps: Step[];
  currentStep: number;
  handleChange: (newStep: number) => void;
  formik: any;
  setIsNext: (value: boolean) => void;
}

const BottomNavigator: React.FC<BottomNavigatorProps> = ({ steps, currentStep, handleChange, formik, setIsNext }) => {
  const isNextDisabled = !steps[currentStep].isCompleted;

  const isLastTab = currentStep == steps.length - 1;
  const isFirstTab = currentStep == 0;

  const handleNext = () => {
    handleChange(currentStep + 1);
    setIsNext(true);
  };

  const handleBack = () => {
    handleChange(currentStep - 1);
    setIsNext(false);
  };

  return (
    <div className="bottom-navigator-container">
      <ShowComponentWhen
        when={!isFirstTab}
        show={
          <button type="button" className="back-button" onClick={handleBack}>
            Back
          </button>
        }
      />
      <ShowComponentWhen
        when={!isLastTab}
        show={
          <button type="button" className="next-button" onClick={handleNext} disabled={isNextDisabled}>
            Next
          </button>
        }
      />

      <ShowComponentWhen
        when={isLastTab}
        show={
          <button className="submit-button" type="submit" onClick={formik.handleSubmit}>
            Submit
          </button>
        }
      />
    </div>
  );
};

export default BottomNavigator;
