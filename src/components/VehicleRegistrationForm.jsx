import React from "react";
import { Formik, Form } from "formik";
import { Button, Paper, Stack, Typography } from "@mui/material";
import { validationSchemeForVehicleRegistration } from "../validateSchema/ValidationSchema";
import TextInput from "../customTextFields/TextInput";
import SelectInput from "../customTextFields/SelectInput";
import { FuelType } from "../constants/FuelConstant";
import { Division } from "../constants/DivisionConstant";

const VehicleRegistrationForm = () => {
  const onSubmit = (values, actions) => {
    console.log(values);
    setTimeout(() => {
      actions.resetForm();
    }, 500);
  };

  const regDate = new Date();

  return (
    <Stack
      component="main"
      sx={{ padding: 2, marginTop: 2, alignItems: "center", height: "700px" }}
    >
      <Paper elevation={4} sx={{ padding: 2 }}>
        <Formik
          initialValues={{
            make: "",
            model: "",
            manufacture: "",
            color: "",
            vin: "",
            // engineNumber: "",
            fuelType: "",
            state: "Maharashtra",
            division: "",
          }}
          validationSchema={validationSchemeForVehicleRegistration}
          onSubmit={onSubmit}
        >
          {({ props }) => (
            <Stack component={Form} spacing={3}>
              <Typography variant="h4" textAlign="center">
                Vehicle Information
              </Typography>
              <Stack direction="row" spacing={2}>
                <TextInput label="Vehicle Make" name="make" fullWidth />
                <TextInput label="Vehicle Model" name="model" fullWidth />
                <TextInput
                  label="Year of Manufacture"
                  name="manufacture"
                  fullWidth
                />
              </Stack>
              <Stack direction="row" spacing={2}>
                <TextInput label="Vehicle Color" name="color" fullWidth />
                <TextInput
                  label="Vehicle Identification Number(VIN)"
                  name="vin"
                  fullWidth
                />
              </Stack>
              <Stack direction="row" spacing={2}>
                {/* <TextInput label="Engine Number" name="engineNumber" fullWidth /> */}
                <SelectInput
                  List={FuelType}
                  name="fuelType"
                  label="Fuel Type"
                />
                <TextInput
                  label="State"
                  name="state"
                  InputProps={{ readOnly: true }}
                  fullWidth
                />
              </Stack>
              <Stack direction="row" spacing={2}>
                {/* <TextInput
                  label="State"
                  name="state"
                  InputProps={{ readOnly: true }}
                  fullWidth
                /> */}
                <SelectInput List={Division} name="division" label="Division" />

                <TextInput
                  InputLabelProps={{ shrink: true }}
                  label="Registration Date"
                  name="registrationDate"
                  // type="date"
                  defaultValue={regDate.toLocaleDateString()}
                  InputProps={{ readOnly: true }}
                  fullWidth
                />
                
              </Stack>
              {/* <TextInput InputLabelProps={{shrink:true}} label="Registration Date" name="registrationDate" type="date" fullWidth /> */}

              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ marginTop: 2 }}
              >
                Get Registration Number
              </Button>
            </Stack>
          )}
        </Formik>
      </Paper>
    </Stack>
  );
};

export default VehicleRegistrationForm;
