const eSteps = {
  first: "step 1",
  second: "step 2",
  third: "step 3",
};

// const prepareFirstStepFormFields = ({ details, formikValues, id }) => {
//   const isDifferentBranch = details?.branch?.id !== formikValues?.branch_id;

//   let fields = { branch_id: "", patient_id: "", address_id: "1" };
//   if (id) {
//     fields = { branch_id: details?.branch?.id, patient_id: details?.patient?.id, address_id: details?.address?.id };
//     if (isDifferentBranch) {
//       fields = { ...fields, reason: "" };
//     }
//   }
//   return fields;
// };

// const prepareSecondStepFormFields = ({ details = {}, id = 0 }) => {
//   if (id) {
//     return { request_items_attributes: details?.request_items };
//   }
//   return { request_items_attributes: [] };
// };

// const prepareThirdStepFormFields = ({ details, id }) => {
//   if (id) {
//     return { note: details?.note };
//   }
//   return { note: "" };
// };

// const formFields = ({ details, id }) => {
//   return { ...prepareFirstStepFormFields({ details, id }), ...prepareSecondStepFormFields({ details, id }), ...prepareThirdStepFormFields({ details, id }) };
// };

// const hasEmptyField = (fields, formikValues) => {
//   const fieldKeys = Object.keys(fields);
//   const emptyFields = fieldKeys.filter((field) => {
//     if (typeof formikValues[field] == "object") {
//       return formikValues[field].length == 0;
//     }
//     return !formikValues[field];
//   });

//   return emptyFields.length !== 0;
// };

// const checkStepsCompletion = ({ step, formikValues, details, id }) => {
//   if (step == eSteps.first) {
//     return !hasEmptyField(prepareFirstStepFormFields({ details, formikValues, id }), formikValues);
//   }

//   if (step == eSteps.second) {
//     return !hasEmptyField(prepareSecondStepFormFields({ details }), formikValues);
//   }

//   if (step == eSteps.third) {
//     return !hasEmptyField(prepareSecondStepFormFields({ details }), formikValues);
//   }
// };

// export { checkStepsCompletion, eSteps, formFields };
