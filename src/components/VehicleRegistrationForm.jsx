import React from "react";
import { Button, Grid, Typography, Box } from "@mui/material";
import { Formik, Form } from "formik";
import { validateSchemeForVehicleRegistration } from "../validateSchema/ValidationSchema";
import TextInput from "../customTextFields/TextInput";
import SelectInput from "../customTextFields/SelectInput";
import { FuelType } from "../constants/FuelConstant";
import { Division } from "../constants/DivisionConstant";

const VehicleRegistrationForm = () => {

  const handleSubmit = (values, actions) => {
    console.log("Form Values:", values);
    console.log('Form Submitted');
    actions.setSubmitting(false); 
    actions.resetForm();
  }

  const regDate = new Date();

  return (
    <Formik
      initialValues={{
        firstName: "",
        middleName: "",
        lastName: "",
        streetName: "",
        city: "",
        state1: "",
        pincode: "",
        contactNo: "",
        email: "",
        aadharNo: "",
        make: "",
        model: "",
        yearOfManufacturing: "",
        color: "",
        vinNumber: "",
        fuelType: "",
        rtoDivisionId: "",
        state2: "",
        registrationDate: regDate.toLocaleDateString(), 
      }}
      validationSchema={validateSchemeForVehicleRegistration}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              height: "100%",
              padding: "0 85px",
              backgroundColor: "#ffffff",
            }}
          >
            <Form>
              <Typography variant="h2" fontWeight="bold" sx={{ color: "#000000" }}>
                Vehicle Registration
              </Typography>
              <Typography variant="body1" sx={{ marginY: 1, color: '#858585' }}>
                Register your vehicle safely with us.
              </Typography>

              <Typography variant="h5" fontWeight='bold' sx={{ marginY: 2 }} gutterBottom>
                Owner Information
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <TextInput
                    label="First Name"
                    name="firstName"
                    margin="normal"
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextInput
                    label="Middle Name"
                    name="middleName"
                    margin="normal"
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextInput
                    label="Last Name"
                    name="lastName"
                    margin="normal"
                    required
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={12}>
                  <TextInput
                    label="Street Name"
                    name="streetName"
                    margin="normal"
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextInput
                    label="City/Town"
                    name="city"
                    margin="normal"
                    required
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={4} sx={{ marginY: 2 }}>
                  <SelectInput List={FuelType} name="state1" label="State" />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextInput
                    label="Pincode"
                    name="pincode"
                    margin="normal"
                    required
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextInput
                    label="Contact Number"
                    name="contactNo"
                    margin="normal"
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextInput
                    label="Email"
                    name="email"
                    margin="normal"
                    required
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={12}>
                  <TextInput
                    label="Aadhaar Number"
                    name="aadharNo"
                    margin="normal"
                    required
                    fullWidth
                  />
                </Grid>
              </Grid>

              {/* Vehicle Information */}
              <Typography variant="h5" fontWeight='bold' sx={{ marginY: 2 }} gutterBottom>
                Vehicle Information
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextInput
                    label="Vehicle Make"
                    name="make"
                    margin="normal"
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextInput
                    label="Vehicle Model"
                    name="model"
                    margin="normal"
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextInput
                    label="Year of Manufacturer"
                    name="yearOfManufacturing"
                    margin="normal"
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextInput
                    label="Vehicle Color"
                    name="color"
                    margin="normal"
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextInput
                    label="VIN Number"
                    name="vinNumber"
                    margin="normal"
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6} sx={{ marginY: 1 }}>
                  <SelectInput List={FuelType} name="fuelType" label="Fuel Type" />
                </Grid>
                <Grid item xs={12} sm={6} sx={{ marginY: 1 }}>
                  <SelectInput List={FuelType} name="state2" label="State" />
                </Grid>
                <Grid item xs={12} sm={6} sx={{ marginY: 1 }}>
                  <SelectInput List={Division} name="rtoDivisionId" label="Division" />
                </Grid>
                <Grid item xs={12} sm={6} sx={{ marginY: 1 }}>
                  <TextInput
                    label="Registration Date"
                    name="registrationDate"
                    InputProps={{ readOnly: true }}
                    fullWidth
                  />
                </Grid>
              </Grid>

              {/* Submit Button */}
              <Box sx={{ marginTop: "1rem", textAlign: "center" }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                sx={{
                  marginY: "2rem",
                  backgroundColor: "#e8702a",
                  "&:hover": { backgroundColor: "#d45f1c" },
                }}
              >
                Register Vehicle
              </Button>
              </Box>
            </Form>
          </Box>
        </Box>
      )}
    </Formik>
  );
};

export default VehicleRegistrationForm;
