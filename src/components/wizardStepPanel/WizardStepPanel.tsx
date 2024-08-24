import React from "react";
import { Step } from "src/types/index.d";

interface WizardStepPanelProps {
  steps: Step[];
  currentStep: number;
}

const WizardStepPanel: React.FC<WizardStepPanelProps> = ({ steps, currentStep }) => {
  const content = steps[currentStep];

  return <div>{content?.children}</div>;
};

export default WizardStepPanel;
