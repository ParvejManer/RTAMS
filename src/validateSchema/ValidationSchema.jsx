import * as Yup from "yup";

export const validateSchemaForUserRegistration = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  middleName: Yup.string("Middle name should only contain letters."),
  lastName: Yup.string().required("Last Name is required"),
  streetName: Yup.string().required("Street Name is required"),
  citynTown: Yup.string().required("City/Town Name is required"),
  pinCode: Yup.string()
  .matches(/^4\d{5}$/, "Invalid Pincode") 
  .required("Pin Code is required"),
  contactNumber: Yup.string()
    .matches(/^\d{10}$/, "Invalid mobile number")
    .required("Contact Number is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  adhaarNumber: Yup.string()
    .matches(/^\d{12}$/, "Invalid Adhaar number")
    .required("Adhaar Number is required"),
});

export const validateSchemaForLogin = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().min(6).required("Password is required"),
});
