import React from "react";
import { Step } from "src/types";
import ShowComponentWhen from "../common/ShowComponentWhen";
import CustomFileInput from "./CustomFileInput";

interface WizardStepPanelProps {
  steps: Step[];
  currentStep: number;
  formik: any;
}

const WizardStepPanel: React.FC<WizardStepPanelProps> = ({ steps, currentStep, formik }) => {
  const { fields } = steps[currentStep];

  return (
    <div className="wizard-step-panel-container slide-in" key={currentStep}>
      {fields?.map((field: any, i: number) => {
        const { CustomElement, ...rest } = field;
        const isFile = field.type === "file";
        const isCheckbox = field.type === "checkbox";

        if (CustomElement) {
          return <CustomElement key={i} {...rest} formik={formik} />;
        }

        if (isCheckbox) {
          return (
            <div key={i} className="checkbox">
              <label className="form-label">{field.label}</label>
              <input className="form-input" {...field} />
            </div>
          );
        }

        if (isFile) {
          return <CustomFileInput key={i} {...rest} formik={formik} />;
        }

        return (
          <div key={i} className="form-input-container">
            <label className="form-label">
              {field.label}
              {field.required && <span className="required">*</span>}
            </label>
            <input className="form-input" {...field} />
            <ShowComponentWhen when={formik.errors[field.name] && formik.touched[field.name]} show={<p className="error">{formik.errors[field.name]}</p>} />
            <ShowComponentWhen when={isFile && formik.values[field.name]} show={<>{formik.values[field.name]?.name}</>} />
          </div>
        );
      })}
    </div>
  );
};

export default WizardStepPanel;
