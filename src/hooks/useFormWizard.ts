// src/hooks/useFormWizard.ts
import { useFormik, FormikConfig, FormikValues } from "formik";
import * as Yup from "yup";

// Define a type for the hook parameters
interface UseFormWizardProps<Values extends FormikValues> extends Omit<FormikConfig<Values>, "validationSchema"> {
  validationSchema?: Yup.Schema<Values>; // Optional validation schema
}

const useFormWizard = <Values extends FormikValues>({ initialValues, onSubmit, validationSchema, ...rest }: UseFormWizardProps<Values>) => {
  const formik = useFormik<Values>({
    initialValues,
    onSubmit,
    validationSchema,
    ...rest,
  });

  return { formik };
};

export default useFormWizard;
