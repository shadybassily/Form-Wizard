import { useFormik, FormikProps } from "formik";

// Define the shape of your form values
interface FormValues {
  name: string;
  age: number;
}

const useFormWizard = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      age: 0,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return { formik };
};

export default useFormWizard;
