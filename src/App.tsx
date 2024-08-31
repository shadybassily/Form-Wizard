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
      title: "Step 1",
      fields: [
        { name: "first_name", label: "first Name", placeholder: "Enter your first Name", type: "text", required: true },
        { name: "last_name", label: "last Name", placeholder: "Enter your last Name", type: "text", required: true },
        { name: "phone_number", label: "phone Number", placeholder: "Enter your phoneNumber", type: "text", required: true },
        { name: "email", label: "email", placeholder: "Enter your email", type: "text", required: true },
      ],
    },
    {
      title: "Step 2",
      fields: [
        { name: "profile_picture", type: "file", label: "profile_picture", required: true },
        { name: "is_verified", type: "checkbox", label: "Is Verified" },
      ],
    },
    {
      title: "Step 3",
      fields: [
        { name: "field_1", label: "field 1", placeholder: "Enter field 1", type: "text" },
        { name: "field_2", label: "field 2", placeholder: "Enter field 2", type: "text" },
        { name: "field_3", label: "field 3", placeholder: "Enter field 3", type: "text" },
      ],
    },
  ];

  const formOptions = {
    initialValues: {
      first_name: "",
      last_name: "",
      profile_picture: "",
      phone_number: "",
      email: "",
      is_verified: false,
      field_1: "",
      field_2: "",
      field_3: "",
    },
    onSubmit: (values: any) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required("firstName is required"),
      last_name: Yup.string().required("lastName is required"),
      email: Yup.string().email("Enter a valid email").required("email is required"),
      is_verified: Yup.boolean(),
      profile_picture: Yup.string().required("lastName is required"),
      phone_number: Yup.number().required("phoneNumber is required"),
      field_1: Yup.string().required("lastName is required"),
      field_2: Yup.string().required("lastName is required"),
      field_3: Yup.string().required("lastName is required"),
    }),
    enableReinitialize: true,
  };

  const { formik } = useFormWizard(formOptions);

  return <FormWizard formik={formik} steps={steps} isTopNavigator isBottomNavigator initialStep={1} />;
}

export default App;
