import React, { useEffect } from "react";
import { BottomNavigator, TopNavigator, WizardStepPanel } from "src/components";
import useSteps from "src/hooks/useSteps";
import { Field, Step } from "src/types/index";
import useFormWizard from "src/hooks/useFormWizard";

interface FormWizardProps {
  isTabs?: boolean;
  initialStep?: number;
  steps: Step[];
  isTopNavigator?: boolean;
  isBottomNavigator?: boolean;
  form: any;
  topNavigatorStyles?: any;
  styles?: any;
}

const FormWizard: React.FC<FormWizardProps> = ({ initialStep = 0, steps = [], form, styles, isTopNavigator = false, isBottomNavigator = false }) => {
  const [currentStep, handleChange] = useSteps(initialStep);

  const { formik } = useFormWizard(form);

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
      return {
        ...field,
        value: formik.values[field.name],
        onChange: formik.handleChange,
      };
    });
  };

  const modifiedSteps = addExtraKeys(steps);

  useEffect(() => {
    formik.validateForm();
  }, []);
  return (
    <div className={styles.formWizardContainer}>
      <form onSubmit={formik.handleSubmit}>
        {isTopNavigator && (
          <TopNavigator steps={modifiedSteps} currentStep={currentStep} handleChange={handleChange} topNavigatorStyles={styles.topNavigatorStyles} formik={formik} />
        )}
        <WizardStepPanel steps={modifiedSteps} currentStep={currentStep} styles={styles.WizardStepPanel} />
        {isBottomNavigator && (
          <BottomNavigator steps={modifiedSteps} currentStep={currentStep} handleChange={handleChange} formik={formik} styles={styles.bottomNavigatorStyles} />
        )}
      </form>
    </div>
  );
};

export default FormWizard;
