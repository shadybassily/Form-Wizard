import React, { useState } from "react";
import { Step } from "src/types";
import ShowComponentWhen from "../common/ShowComponentWhen";

interface WizardStepPanelProps {
  steps: Step[];
  currentStep: number;
  styles?: any;
  formik: any;
}

const WizardStepPanel: React.FC<WizardStepPanelProps> = ({ steps, currentStep, styles, formik }) => {
  const { fields } = steps[currentStep];

  return (
    <div className={`${styles.container}`} key={currentStep}>
      {fields?.map((field: any, i: number) => {
        const { CustomElement, ...rest } = field;
        const isFile = field.type === "file";

        if (CustomElement) {
          return <CustomElement key={i} {...rest} formik={formik} />;
        }

        return (
          <div key={i} style={{ width: "100%" }}>
            <label className="form-label">{field.label}</label>
            {/* {field.required && <span>*</span>} */}
            <input className="form-input" {...field} />
            <ShowComponentWhen when={formik.errors[field.name] && formik.touched[field.name]} show={<>{formik.errors[field.name]}</>} />
            <ShowComponentWhen when={isFile && formik.values[field.name]} show={<>{formik.values[field.name]?.name}</>} />
          </div>
        );
      })}
    </div>
  );
};

export default WizardStepPanel;
