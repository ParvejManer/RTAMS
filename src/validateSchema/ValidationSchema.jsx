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
  .matches(/^\d+$/, 'Mobile number must contain only digits')
  .length(10, 'Mobile number must be exactly 10 digits long')
  .matches(/^[6789]/, 'Mobile number must start with 6, 7, 8, or 9')
  .required('Mobile number is required'),
  password: Yup.string().required("Password is required"),
});


// const mobileNumberRegex = /^[6789]\d{9}$/;

export const validateSchemaForSignup = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  middleName: Yup.string("Middle name should only contain letters."),
  lastName: Yup.string().required("Last Name is required"),
  streetName: Yup.string().required("Street Name is required"),
  city: Yup.string().required("City/Town Name is required"),
  state1: Yup.string().required("State is required"),
  pincode: Yup.string()
    .matches(/^4\d{5}$/, "Invalid Pincode")
    .required("Pin Code is required"),
  mobileNumber: Yup.string()
    .matches(/^\d+$/, 'Mobile number must contain only digits')
    .length(10, 'Mobile number must be exactly 10 digits long')
    .matches(/^[6789]/, 'Mobile number must start with 6, 7, 8, or 9')
    .required('Mobile number is required'),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  aadharNumber: Yup.string()
    .matches(/^\d{12}$/, "Invalid Adhaar number")
    .required("Adhaar Number is required"),

  password: Yup.string()
    .matches(/^(?=[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{6,20}$/,
      'Password must be 6-20 characters long, start with an uppercase letter, and include at least one digit and one special character.')
    .required('Password is required'),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Confirm password must be same as password.')
    .required('Confirm password is required')
})



export const validateSchemeForVehicleRegistration = Yup.object().shape({
  make: Yup.string().required("Vehicle Make is required"),
  model: Yup.string().required("Vehicle Model is required"),
  yearOfManufacturing: Yup.string()
    .matches(/^\d{4}$/, "Invalid Year")
    .required("This field is required"),
  color: Yup.string().required("Vehicle Color is required"),
  vinNumber: Yup.string()
    .required('VIN Number is required')
    .length(17, 'VIN Number must be exactly 17 characters long')
    .matches(/^[A-HJ-NPR-Z0-9]{17}$/, 'VIN Number must be 17 characters long and can only include uppercase letters (A-H, J-N, P-R, Z) and digits (0-9)'),
  fuelType: Yup.string().required("Fuel Type is required"),
  state2: Yup.string().required("State is required"),
  rtoDivisionId: Yup.number().required("RTO Division is required"),
});

