import React, { useEffect, useState } from "react";
import { BottomNavigator, TopNavigator, WizardStepPanel } from "src/components";
import useSteps from "src/hooks/useSteps";
import { Field, Step } from "src/types/index";

interface FormWizardProps {
  steps: Step[];
  formik: any;
  initialStep?: number;
  isTopNavigator?: boolean;
  isBottomNavigator?: boolean;
}

const FormWizard: React.FC<FormWizardProps> = ({ initialStep = 0, steps = [], isTopNavigator = false, isBottomNavigator = false, formik }) => {
  const [currentStep, handleChange] = useSteps(initialStep);
  const [isNext, setIsNext] = useState(false);

  const checkIsStepCompletion = (step: Step) => {
    const { fields } = step;
    const { errors } = formik;

    const fieldErros = fields.find((field) => errors[field.name]);
    return !fieldErros;
  };

  const addExtraKeys = (steps: Step[]) => {
    return steps.map((step) => {
      return {
        ...step,
        isCompleted: checkIsStepCompletion(step),
        fields: assignChangeFunctionToFormFields(step.fields),
      };
    });
  };

  const assignChangeFunctionToFormFields = (fields: Field[]) => {
    return fields.map((field) => {
      const isFile = field.type == "file";
      const isCheckbpx = field.type == "checkbox";

      return {
        ...field,
        value: isFile ? "" : formik.values[field.name],
        checked: formik.values[field.name],
        onChange: (e: any) => {
          if (isFile) {
            const file = e.target.files ? e.target.files[0] : null;
            formik.setFieldValue([field.name], file);
          } else if (isCheckbpx) {
            const value = e.target.checked;
            formik.setFieldValue([field.name], value);
          } else {
            formik.setFieldValue([field.name], e.target.value);
          }
        },
        onBlur: formik.handleBlur,
      };
    });
  };

  const modifiedSteps = addExtraKeys(steps);

  useEffect(() => {
    formik.validateForm();
  }, []);

  return (
    <div className="form-wizard-container">
      <form onSubmit={formik.handleSubmit}>
        {isTopNavigator && <TopNavigator steps={modifiedSteps} currentStep={currentStep} handleChange={handleChange} formik={formik} setIsNext={setIsNext} />}
        <WizardStepPanel steps={modifiedSteps} currentStep={currentStep} formik={formik} isNext={isNext} />
        {isBottomNavigator && <BottomNavigator steps={modifiedSteps} currentStep={currentStep} handleChange={handleChange} formik={formik} setIsNext={setIsNext} />}
      </form>
    </div>
  );
};

export default FormWizard;
