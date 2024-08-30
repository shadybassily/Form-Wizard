import { FormWizard } from "src/components";
import * as Yup from "yup";
import "./App.css";
import useFormWizard from "./hooks/useFormWizard";

const CustomFieldComponent = (props: any) => {
  return (
    <>
      <input {...props} />
      <>{props.formik.values[props.name].name}</>
    </>
  );
};

function App() {
  const steps = [
    {
      title: "step 1",
      fields: [
        { name: "firstName", label: "first Name", placeholder: "Enter your first Name", type: "text", required: true },
        { name: "lastName", label: "last Name", placeholder: "Enter your last Name", type: "text", required: false },
        { name: "phoneNumber", label: "phone Number", placeholder: "Enter your phoneNumber", type: "text" },
        { name: "email", label: "email", placeholder: "Enter your email", type: "text" },
      ],
    },
    {
      title: "step2",
      fields: [{ name: "resume", type: "file", label: "Resume", CustomElement: CustomFieldComponent }],
    },
    {
      title: "Step 3",
      fields: [
        { name: "field1", label: "field 1", placeholder: "Enter field 1", type: "text" },
        { name: "field2", label: "field 2", placeholder: "Enter field 2", type: "text" },
        { name: "field3", label: "field 3", placeholder: "Enter field 3", type: "text" },
      ],
    },
  ];

  const formOptions = {
    initialValues: {
      firstName: "",
      lastName: "",
      resume: "",
      phoneNumber: "",
      email: "",
      field1: "",
      field2: "",
      field3: "",
    },
    onSubmit: (values: any) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("firstName is required"),
      lastName: Yup.string().required("lastName is required"),
      email: Yup.string().email("Enter a valid email").required("email is required"),
      resume: Yup.string().required("lastName is required"),
      phoneNumber: Yup.number().required("phoneNumber is required"),
      field1: Yup.string().required("lastName is required"),
      field2: Yup.string().required("lastName is required"),
      field3: Yup.string().required("lastName is required"),
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
            label: "form-label",
            required: "required",
            input: "form-input",
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
