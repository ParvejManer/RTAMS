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
  mobileNumber: Yup.string()
  .matches(/^\d{10}$/, "Invalid mobile number")
  .required("Mobile number is required"),
  password: Yup.string().required("Password is required"),
});

export const validationSchemeForVehicleRegistration = Yup.object().shape({
  make: Yup.string().required("This field is required"),
  model: Yup.string().required("This field is required"),
  manufacture: Yup.string()
    .matches(/^\d{4}$/, "Invalid Year")
    .required("This field is required"),
  color: Yup.string().required("This field is required"),
  vin: Yup.string()
    .required("This field is required")
    .length(17, "VIN must be 17 characters long")
    .matches(/^[A-Z0-9]+$/, "VIN must contain only alphanumeric characters"),
  // engineNumber: Yup.string()
  //   .length(10, "Engine number must be 10 characters long")
  //   .matches(/^[A-Z]{3}[0-9]{7}$/, "Invalid engine number format")
  //   .required("This field is required"),
  fuelType: Yup.string().required("This field is required"),
  division: Yup.string().required("This field is required"),
});
