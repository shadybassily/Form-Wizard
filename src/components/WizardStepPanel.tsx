import React from "react";
import { Step } from "src/types/index.d";

interface WizardStepPanelProps {
  steps: Step[];
  currentStep: number;
  styles?: any;
}

const WizardStepPanel: React.FC<WizardStepPanelProps> = ({ steps, currentStep, styles }) => {
  const { fields } = steps[currentStep];

  return (
    <div className={`${styles.container}`} key={currentStep}>
      {fields?.map((field, i) => (
        <div key={i}>
          <label>{field.label}</label>
          {field.required && "*"}
          <input {...field} />
        </div>
      ))}
    </div>
  );
};

export default WizardStepPanel;
