import React, { useEffect } from "react";
import { BottomNavigator, TopNavigator, WizardStepPanel } from "src/components";
import useSteps from "src/hooks/useSteps";
import { Field, Step } from "src/types/index";

interface FormWizardProps {
  isTabs?: boolean;
  initialStep?: number;
  steps: Step[];
  isTopNavigator?: boolean;
  isBottomNavigator?: boolean;
  topNavigatorStyles?: any;
  styles?: any;
  formik: any;
}

const FormWizard: React.FC<FormWizardProps> = ({ initialStep = 0, steps = [], styles, isTopNavigator = false, isBottomNavigator = false, formik }) => {
  const [currentStep, handleChange] = useSteps(initialStep);

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
      return {
        ...field,
        value: isFile ? "" : formik.values[field.name],
        onChange: (e: any) => {
          if (isFile) {
            const file = e.target.files ? e.target.files[0] : null;
            formik.setFieldValue([field.name], file);
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
    <div className={styles.formWizardContainer}>
      <form onSubmit={formik.handleSubmit}>
        {isTopNavigator && (
          <TopNavigator steps={modifiedSteps} currentStep={currentStep} handleChange={handleChange} topNavigatorStyles={styles.topNavigatorStyles} formik={formik} />
        )}
        <WizardStepPanel steps={modifiedSteps} currentStep={currentStep} styles={styles.WizardStepPanel} formik={formik} />
        {isBottomNavigator && (
          <BottomNavigator steps={modifiedSteps} currentStep={currentStep} handleChange={handleChange} formik={formik} styles={styles.bottomNavigatorStyles} />
        )}
      </form>
    </div>
  );
};

export default FormWizard;
