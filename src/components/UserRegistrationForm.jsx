import React from "react";
import { Formik, Form } from "formik";
import { Button, Paper, Stack } from "@mui/material";
import { validateSchemaForUserRegistration } from "../validateSchema/ValidationSchema";
import TextInput from "../customTextFields/TextInput";

const UserRegistrationForm = () => {
  const onSubmit = (values, actions) => {
    console.log(values);
    setTimeout(() => {
      actions.resetForm();
    }, 500);
  };

  return (
    <Stack
      component="main"
      sx={{ padding: 2, marginTop: 2, alignItems: "center" }}
    >
      <Paper elevation={2} sx={{ padding: 2 }}>
        <Formik
          initialValues={{
            firstName: "",
            middleName: "",
            lastName: "",
            streetName: "",
            citynTown: "",
            state: "Maharashtra",
            pinCode: "",
            contactNumber: "",
            email: "",
            adhaarNumber: "",
          }}
          validationSchema={validateSchemaForUserRegistration}
          onSubmit={onSubmit}
        >
          {({ props }) => (
            <Stack component={Form} spacing={3}>
              <Stack direction="row" spacing={2}>
                <TextInput label="First Name" name="firstName" fullWidth />
                <TextInput label="Middle Name" name="middleName" fullWidth />
                <TextInput label="Last Name" name="lastName" fullWidth />
              </Stack>
              <Stack direction="row" spacing={2}>
                <TextInput label="Street Name" name="streetName" fullWidth />
                <TextInput label="City/Town" name="citynTown" fullWidth />
              </Stack>
              <Stack direction="row" spacing={2}>
                <TextInput
                  label="State"
                  name="state"
                  InputProps={{ readOnly: true }}
                  fullWidth
                />
                <TextInput label="Pincode" name="pinCode" fullWidth />
              </Stack>
              <Stack direction="row" spacing={2}>
                <TextInput
                  label="Contact Number"
                  name="contactNumber"
                  fullWidth
                />
                <TextInput label="Email" name="email" fullWidth />
              </Stack>
              <TextInput label="Adhaar Number" name="adhaarNumber" fullWidth />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ marginTop: 2 }}
              >
                Register User
              </Button>
            </Stack>
          )}
        </Formik>
      </Paper>
    </Stack>
  );
};

export default UserRegistrationForm;
