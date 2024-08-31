# Form Wizard React

`form-wizard-react` is a dynamic multi-step form component for React applications. It leverages Formik and Yup for form management and validation. This package supports various field types, including text, number, file, and checkbox inputs, and is fully compatible with TypeScript.

## Features

- **Dynamic Steps**: Create forms with multiple steps, where each step can contain any number of fields.
- **Formik Integration**: Utilizes Formik for form state management.
- **Yup Validation**: Integrates Yup for validation schemas.
- **Customizable Fields**: Supports custom field components.
- **TypeScript Support**: Fully typed for a better development experience.

## Installation

You can install the package using npm or yarn:

```sh
npm install form-wizard-react
# or
yarn add form-wizard-react
```

![Form Wizard Demo](https://drive.google.com/file/d/1zlFLjhFfskpucvnhlB-DnYGbZowjPER3/view?usp=sharing)

Usage
Basic Example
To use the FormWizard component, you need to provide it with a steps array and Formik configuration.
```sh
import { FormWizard, useFormWizard } from 'form-wizard-react';
import * as Yup from 'yup';

const steps = [
  {
    title: "Step 1",
    fields: [
      { name: "first_name", label: "First Name", placeholder: "Enter your first name", type: "text", required: true },
      { name: "last_name", label: "Last Name", placeholder: "Enter your last name", type: "text", required: true },
      { name: "phone_number", label: "Phone Number", placeholder: "Enter your phone number", type: "text", required: true },
      { name: "email", label: "Email", placeholder: "Enter your email", type: "text", required: true },
    ],
  },
  {
    title: "Step 2",
    fields: [
      { name: "profile_picture", type: "file", label: "Profile Picture", required: true },
      { name: "is_verified", type: "checkbox", label: "Is Verified" },
    ],
  },
  {
    title: "Step 3",
    fields: [
      { name: "field_1", label: "Field 1", placeholder: "Enter field 1", type: "text" },
      { name: "field_2", label: "Field 2", placeholder: "Enter field 2", type: "text" },
      { name: "field_3", label: "Field 3", placeholder: "Enter field 3", type: "text" },
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
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    email: Yup.string().email("Enter a valid email").required("Email is required"),
    is_verified: Yup.boolean(),
    profile_picture: Yup.string().required("Profile picture is required"),
    phone_number: Yup.number().required("Phone number is required"),
    field_1: Yup.string().required("Field 1 is required"),
    field_2: Yup.string().required("Field 2 is required"),
    field_3: Yup.string().required("Field 3 is required"),
  }),
  enableReinitialize: true,
};

const { formik } = useFormWizard(formOptions);

const App = () => (
  <FormWizard
    formik={formik}
    steps={steps}
    isTopNavigator
    isBottomNavigator
  />
);

export default App;


```

Custom Field Components
You can use custom field components by providing a CustomElement key in the field configuration:
```sh

const CustomFieldComponent = (props: any) => {
  return (
    <>
      <input {...props} />
      <>{props.formik.values[props.name].name}</>
    </>
  );
};

const steps = [
  {
    title: "Step 2",
    fields: [
      { name: "profile_picture", type: "file", label: "Profile Picture", CustomElement: CustomFieldComponent },
    ],
  },
];
```

Props
Required Props
steps: Step[] - An array of steps, where each step contains a title and an array of fields.
formik: FormikProps<any> - The Formik instance used to manage form state and validation.
Optional Props
initialStep?: number - The initial step index to start from.
isTopNavigator?: boolean - Whether to show navigation controls at the top.
isBottomNavigator?: boolean - Whether to show navigation controls at the bottom.


License
MIT

Contact
For questions or feedback, please contact shadys.bassily@gmail.com  