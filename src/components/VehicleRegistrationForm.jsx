import React, { useEffect, useState } from "react";
import {
  Button,
  Grid,
  Typography,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  CircularProgress,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import TextInput from "../customTextFields/TextInput";
import SelectInput from "../customTextFields/SelectInput";
import { validateSchemeForVehicleRegistration } from "../validateSchema/ValidationSchema";
import axios from "../api/axios";


const VehicleRegistrationForm = () => {
  const [open, setOpen] = useState(false);
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    streetName: "",
    city: "",
    state1: "",
    pincode: "",
    mobileNumber: "",
    email: "",
    aadharNumber: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!localStorage.getItem('token')) {
  //     navigate('/signin');
  //   }
  // }, [navigate]);

  const handleClose = () => {
    setOpen(false);
    navigate('/landingpage');
  };

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response = await axios.get(`/users/profile`);
        setUserInfo(response.data);
        setError(null);
      } catch (error) {
        setUserInfo(null);
        setError(error.response?.data?.message || 'Error occured during fetching user information')
      }
    };
    getUserInfo();
  }, [])


  const handleSubmit = async (values, actions) => {
    console.log(values);
    setLoading(true);

    try {
      // Post vehicle data with the ownerId
      const vehicleResponse = await axios.post('/vehicles', {
        make: values.make,
        model: values.model,
        yearOfManufacturing: values.yearOfManufacturing,
        color: values.color,
        vinNumber: values.vinNumber,
        fuelType: values.fuelType,
        state2: values.state2,
        rtoDivisionId: values.rtoDivisionId,
        ownerId: userInfo.id,
      });

      // Extract the registration number from the vehicle response
      const { data: vehicleData } = vehicleResponse;
      const registrationNumber = vehicleData?.registrationNumber;
      const vehicleId = vehicleData?.vehicleId;

      console.log(values.registrationDate)

      console.log("Registration Number:", registrationNumber);

      // Show the registration number in a dialog or alert
      setRegistrationNumber(registrationNumber);
      setOpen(true);


      axios.post('/ownership-history', {
        ownerId: userInfo.id,
        registrationNumber: registrationNumber,
        ownerName: `${userInfo.firstName}  ${userInfo.lastName}`,
        ownershipStartDate: values.registrationDate,
        vehicleId: vehicleId,
      })


    } catch (error) {
      console.error("Error registering vehicle:", error);
    } finally {
      setLoading(false);
      actions.setSubmitting(false);
    }
  };


  const regDate = new Date();


  //API call for Division and fuel list 


  const [divisionList, setDivisionList] = useState([]);
  const [fuelTypes, setFuelTypes] = useState([])

  const fetchDivision = async () => {
    try {
      const response = await axios.get('/rto-divisions');
      console.log(response.data)
      setDivisionList(response.data);
    } catch (error) {
      console.log("Error fetching divisions:", error);
    }
  };

  const fetchFuelTypes = async () => {
    try {
      const response = await axios.get('/fuelTypes');
      console.log(response.data)
      setFuelTypes(response.data);
    } catch (error) {
      console.log("Error fetching fuel types:", error);
    }
  };

  useEffect(() => {
    fetchDivision();
    fetchFuelTypes();
  }, []);

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          firstName: userInfo?.firstName || "",
          middleName: userInfo?.middleName || "",
          lastName: userInfo?.lastName || "",
          streetName: userInfo?.streetName || "",
          city: userInfo?.city || "",
          state1: userInfo?.state1,
          pincode: userInfo?.pincode || "",
          contactNo: userInfo?.mobileNumber || "",
          email: userInfo?.email || "",
          aadharNo: userInfo?.aadharNumber || "",
          make: "",
          model: "",
          yearOfManufacturing: "",
          color: "",
          vinNumber: "",
          fuelType: "",
          rtoDivisionId: "",
          state2: "Maharashtra",
          registrationDate: regDate.toLocaleDateString(),
          acceptTerms: false,
        }}
        validationSchema={validateSchemeForVehicleRegistration}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values, handleChange, handleBlur }) => (
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
                      InputProps={{ readOnly: true }}
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
                      InputProps={{ readOnly: true }}
                      required
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextInput
                      label="Street Name"
                      name="streetName"
                      margin="normal"
                      InputProps={{ readOnly: true }}
                      required
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextInput
                      label="City/Town"
                      name="city"
                      margin="normal"
                      InputProps={{ readOnly: true }}
                      required
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    {/* <SelectInput List={FuelType} name="state1" label="State" /> */}
                    <TextInput
                      label="State"
                      name="state1"
                      margin="normal"
                      InputProps={{ readOnly: true }}
                      required
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextInput
                      label="Pincode"
                      name="pincode"
                      margin="normal"
                      InputProps={{ readOnly: true }}
                      required
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextInput
                      label="Mobile Number"
                      name="contactNo"
                      margin="normal"
                      InputProps={{ readOnly: true }}
                      required
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextInput
                      label="Email"
                      name="email"
                      margin="normal"
                      InputProps={{ readOnly: true }}
                      required
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextInput
                      label="Aadhaar Number"
                      name="aadharNo"
                      margin="normal"
                      InputProps={{ readOnly: true }}
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
                  <Grid item xs={12} sm={6}>
                    <SelectInput List={fuelTypes} name="fuelType" label="Fuel Type" isObjectList={true} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextInput
                      label="State"
                      name="state2"
                      // margin="normal"
                      InputProps={{ readOnly: true }}
                      required
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} marginY={2}>
                    <SelectInput List={divisionList} name="rtoDivisionId" label="Division" isObjectList={true} />
                  </Grid>
                  <Grid item xs={12} sm={6} marginY={2}>
                    <TextInput
                      label="Registration Date"
                      name="registrationDate"
                      required
                      InputProps={{ readOnly: true }}
                      fullWidth
                    />
                  </Grid>
                </Grid>

                {/* Terms and Conditions Checkbox */}
                <Box sx={{ marginY: 3 }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="acceptTerms"
                        checked={values.acceptTerms}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    }
                    label={
                      <Typography variant="body2" marginY='2px'>
                        I consent to the collection and use of my personal and vehicle information for the purpose of vehicle registration. I understand that this information will be handled securely and in accordance with applicable data protection laws.
                      </Typography>
                    }
                  />
                </Box>

                {/* Submit Button */}
                <Box sx={{ marginTop: "1rem", textAlign: "center" }}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting || loading || !values.acceptTerms}
                    sx={{
                      marginY: "2rem",
                      backgroundColor: "#e8702a",
                      "&:hover": { backgroundColor: "#d45f1c" },
                    }}
                  >
                    {loading ? <CircularProgress size={24} /> : 'Register Vehicle'}
                    {/* Register Vehicle */}
                  </Button>
                </Box>
              </Form>
            </Box>
          </Box>
        )}
      </Formik>

      {/* Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          sx: {
            padding: "20px",
            borderRadius: "10px",
            backgroundColor: "#f5f5f5",
          },
        }}
      >
        <DialogTitle id="alert-dialog-title" sx={{ fontWeight: "bold", color: "#e8702a" }}>
          {"Vehicle Registration Successful"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" sx={{ fontSize: "18px", color: "#333" }}>
            Your vehicle has been successfully registered. The registration number is:
            <Typography component="span" sx={{ fontWeight: "bold", color: "#000", fontSize: "22px" }}>
              {registrationNumber}
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            sx={{
              backgroundColor: "#e8702a",
              color: "#fff",
              "&:hover": { backgroundColor: "#d45f1c" },
            }}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default VehicleRegistrationForm;
