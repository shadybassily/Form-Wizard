import React from "react";
import { Step } from "src/types";
import ShowComponentWhen from "../common/ShowComponentWhen";

interface WizardStepPanelProps {
  steps: Step[];
  currentStep: number;
  styles?: any;
}

const WizardStepPanel: React.FC<WizardStepPanelProps> = ({ steps, currentStep, styles }) => {
  const { fields } = steps[currentStep];

  return (
    <div className={`${styles.container}`} key={currentStep}>
      {fields?.map((field: any, i: number) => {
        const { customElement: CustomElement, ...rest } = field;

        if (CustomElement) {
          return <CustomElement key={i} {...rest} />;
        }

        return (
          <div key={i}>
            <label>{field.label}</label>
            {field.required && "*"}
            <input {...field} />
          </div>
        );
      })}
    </div>
  );
};

export default WizardStepPanel;
