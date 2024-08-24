import { FormWizard } from "src/components";
import * as Yup from "yup";
import "./App.css";

function App() {
  const steps = [
    {
      title: "Step1",
      fields: [
        { name: "firstName", label: "first Name", placeholder: "Enter your first Name", type: "text", required: true },
        { name: "lastName", label: "last Name", placeholder: "Enter your last Name", type: "text", required: false },
      ],
    },
    {
      title: "Step2",
      fields: [{ name: "age", label: "Age", placeholder: "Enter your age", type: "number" }],
    },
    {
      title: "Step3",
      fields: [{ name: "phoneNumber", label: "phone Number", placeholder: "Enter your phoneNumber", type: "text" }],
    },
  ];

  const form = {
    initialValues: {
      firstName: "",
      lastName: "",
      age: 0,
      phoneNumber: "+20",
    },
    onSubmit: (values: any) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("firstName is required"),
      lastName: Yup.string().required("lastName is required"),
      age: Yup.number().required("Age is required").positive().integer(),
      phoneNumber: Yup.number().required("phoneNumber is required"),
    }),
    enableReinitialize: true,
  };

  return (
    <>
      <FormWizard
        isTopNavigator
        isBottomNavigator
        initialStep={0}
        steps={steps}
        form={form}
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
          },
        }}
      />
    </>
  );
}

export default App;
