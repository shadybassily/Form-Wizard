import React from "react";

const useSteps = (initialStep: number = 0): [number, (newStep: number | ((prevStep: number) => number)) => void] => {
  const [currentStep, setCurrentStep] = React.useState(initialStep);

  // Define handleChange function
  const handleChange = (newStep: number | ((prevStep: number) => number)) => {
    setCurrentStep(newStep);
  };

  return [currentStep, handleChange];
};

export default useSteps;
