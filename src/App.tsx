import { FormWizard } from "src/components";
import * as Yup from "yup";
import "./App.css";
import useFormWizard from "./hooks/useFormWizard";

const CustomFieldComponent = (props: any) => {
  return <input {...props} style={{ border: "2px solid green" }} />;
};

function App() {
  const steps = [
    {
      title: "Step1",
      fields: [
        { name: "firstName", label: "first Name", placeholder: "Enter your first Name", type: "text", required: true },
        { name: "lastName", label: "last Name", placeholder: "Enter your last Name", type: "text", required: false },
        { name: "resume", type: "file", customElement: CustomFieldComponent },
      ],
    },
    {
      title: "Step3",
      fields: [{ name: "phoneNumber", label: "phone Number", placeholder: "Enter your phoneNumber", type: "text" }],
    },
  ];

  const formOptions = {
    initialValues: {
      firstName: "",
      lastName: "",
      resume: "",
      phoneNumber: "",
    },
    onSubmit: (values: any) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("firstName is required"),
      lastName: Yup.string().required("lastName is required"),
      resume: Yup.string().required("lastName is required"),
      phoneNumber: Yup.number().required("phoneNumber is required"),
    }),
    enableReinitialize: true,
  };

  const { formik } = useFormWizard(formOptions);

  return (
    <>
      <FormWizard
        formik={formik}
        isTopNavigator
        isBottomNavigator
        initialStep={0}
        steps={steps}
        styles={{
          formWizardContainer: "form-wizard-container",
          WizardStepPanel: {
            container: "wizard-step-panel-container slide-in",
          },
          topNavigatorStyles: {
            container: "top-navigator-container",
            step: "step-title",
            currentStep: "current-step",
          },
          bottomNavigatorStyles: {
            container: "bottom-navigator-container",
            next: "next-button",
            back: "back-button",
            submit: "submit-button",
          },
        }}
      />
    </>
  );
}

export default App;
