import React from "react";
import { BottomNavigator, TopNavigator, WizardStepPanel } from "src/components";
import useSteps from "src/hooks/useSteps";
import { Step } from "src/types/index.d";
import styles from "./form-wizard.module.css";

interface FormWizardProps {
  isTabs?: boolean;
  initialStep?: number;
  steps: Step[];
  isTopNavigator?: boolean;
  isBottomNavigator?: boolean;
}

const FormWizard: React.FC<FormWizardProps> = ({ initialStep = 0, steps, isTopNavigator = true, isBottomNavigator = true }) => {
  const [currentStep, handleChange] = useSteps(initialStep);

  return (
    <div className={styles["form-wizard-container"]}>
      {isTopNavigator && <TopNavigator steps={steps} currentStep={currentStep} handleChange={handleChange} />}
      <WizardStepPanel steps={steps} currentStep={currentStep} />
      {isBottomNavigator && <BottomNavigator steps={steps} currentStep={currentStep} handleChange={handleChange} />}
    </div>
  );
};

export default FormWizard;
