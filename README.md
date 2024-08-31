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
npm install form-wizard-reactjs
# or
yarn add form-wizard-reactjs
```

![Form Wizard Demo](https://drive.google.com/uc?id=1zlFLjhFfskpucvnhlB-DnYGbZowjPER3)

Usage
Basic Example
To use the FormWizard component, you need to provide it with a steps array and Formik configuration.

```sh
import { FormWizard, useFormWizard } from "form-wizard-reactjs";
import "form-wizard-reactjs/style.css";
import * as Yup from "yup";

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
    onSubmit: (values) => {
      const valuesString = JSON.stringify(values, null, 2);
      alert(`Form values:\n${valuesString}`);
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

  return (
    <div>
      <FormWizard formik={formik} steps={steps} isTopNavigator isBottomNavigator />;
    </div>
  );
}

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

## Props Table

The following table lists the available props for the `FormWizard` component, their types, and their descriptions.

| Prop                | Type               | Description                                                 |
| ------------------- | ------------------ | ----------------------------------------------------------- |
| `steps`             | `Array<Step>`      | An array of step objects that define the multi-step form.   |
| `formik`            | `FormikProps<any>` | The Formik object used to manage the form state.            |
| `initialStep`       | `number`           | The step number where the form should start. Optional.      |
| `isTopNavigator`    | `boolean`          | If true, displays a navigation bar at the top. Optional.    |
| `isBottomNavigator` | `boolean`          | If true, displays a navigation bar at the bottom. Optional. |

## Step Object Structure

The `steps` prop should be an array of step objects with the following structure:

| Property | Type           | Description                                         |
| -------- | -------------- | --------------------------------------------------- |
| `title`  | `string`       | The title of the step.                              |
| `fields` | `Array<Field>` | An array of field objects defining the form fields. |

## Field Object Structure

Each field object in the `fields` array should follow this structure:

| Property        | Type                       | Description                                         |
| --------------- | -------------------------- | --------------------------------------------------- | 
| `name`          | `string`                   | The name of the field.                              |
| `label`         | `string`                   | The label of the field.                             |
| `placeholder`   | `string`                   | The placeholder text for the input.                 |
| `type`          | `string`                   | input type [text,number,checkbox,file] only         | 
| `required`      | `boolean`                  | Whether the field is required.                      |
| `CustomElement` | `React.ComponentType<any>` | Optional custom component to render for this field. |

License
MIT

Contact
For questions or feedback, please contact shadys.bassily@gmail.com
