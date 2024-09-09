import React from 'react';
import { Button, Box } from '@mui/material';
import { Formik, Form, ErrorMessage } from 'formik';
import axios from '../../api/axios';
import TextInput from '../../customTextFields/TextInput';
import { validateVehicleTransfer } from '../../validateSchema/ValidationSchema';

const VehicleTransferForm = ({ selectedVehicle }) => {
  
  const isVehicleSelected = !!selectedVehicle;

  return (
    <Formik
      initialValues={{ mobileNumber: '' }}
      validationSchema={validateVehicleTransfer}
      onSubmit={(values, { setSubmitting, setErrors }) => {
        if (!isVehicleSelected) {
          setErrors({ mobileNumber: 'Please select a vehicle.' });
          setSubmitting(false);
          return;
        }

        // Dummy API call to check if the user exists
        axios
          .get(`/api/users/${values.mobileNumber}`)
          .then(() => {
            // If user exists, send transfer request
            return axios.post('/api/transfer-request', {
              vehicleId: selectedVehicle.id,
              newOwnerMobile: values.mobileNumber,
            });
          })
          .then(() => {
            alert('Transfer request sent.');
            setSubmitting(false);
          })
          .catch(() => {
            setErrors({ mobileNumber: 'User does not exist.' });
            setSubmitting(false);
          });
      }}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form>
          <Box sx={{ mt: 2 }}>
            <TextInput
              label="Recipient Mobile Number"
              variant="outlined"
              fullWidth
              name="mobileNumber"
              disabled={!isVehicleSelected}
            //   helperText={<ErrorMessage name="mobileNumber" />}
            //   error={touched.mobileNumber && Boolean(errors.mobileNumber)}
            />
            <Button
              variant="contained"
              type="submit"
              disabled={isSubmitting || !isVehicleSelected}
              fullWidth
              sx={{
                marginTop: "1rem",
                backgroundColor: "#e8702a",
                "&:hover": { backgroundColor: "#d45f1c" },
              }}
            >
              Send Transfer Request
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default VehicleTransferForm;
