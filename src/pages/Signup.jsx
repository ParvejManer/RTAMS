import React, { useState } from "react";
import {
    Container,
    Button,
    Typography,
    Paper,
    Alert,
    Snackbar,
    Box,
    Grid,
    FormControlLabel,
    Checkbox,
} from "@mui/material";
import TextInput from "../customTextFields/TextInput";
import { Link, useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import { validateSchemaForSignup } from "../validateSchema/ValidationSchema";
import axios from "../api/axios";

function Signup() {
    const navigate = useNavigate();
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
    const [acceptTerms, setAcceptTerms] = useState(false);


    const handleSubmit = async (values, { setErrors }) => {
        try {
            const response = await axios.post("/users/signup", {
                firstName: values.firstName,
                middleName: values.middleName,
                lastName: values.lastName,
                streetName: values.streetName,
                city: values.citynTown,
                pincode: values.pincode,
                email: values.email,
                aadharNumber: values.adhaarNumber,
                mobileNumber: values.mobileNumber,
                password: values.password,
                confirmPassword: values.confirmPassword
            });

            const token = response.data.token;
            localStorage.setItem("token", token);

            setOpenSnackbar(true);
            setShowOverlay(true);

            setTimeout(() => {
                navigate("/signin");
            }, 2000);
        } catch (error) {
            if (error.response) {
                setErrors({ general: error.response.data.message || "An error occurred during signup" });
            } else if (error.request) {
                setErrors({ general: "No response from server" });
            } else {
                setErrors({ general: "An error occurred during signup" });
            }
        } 
    };

    return (
        <>
            {showOverlay && (
                <Box
                    sx={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(255, 255, 255, 0.6)",
                        backdropFilter: "blur(10px)",
                        zIndex: 9999,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                    }}
                >
                    <Snackbar
                        open={openSnackbar}
                        autoHideDuration={2000}
                        onClose={() => setOpenSnackbar(false)}
                        anchorOrigin={{ vertical: "top", horizontal: "center" }}
                    >
                        <Alert
                            onClose={() => setOpenSnackbar(false)}
                            severity="success"
                            sx={{ width: "100%" }}
                        >
                            Your account has been created successfully!!!
                        </Alert>
                    </Snackbar>
                </Box>
            )}

            <Container component="main" maxWidth="xl">
                <Grid container spacing={8} sx={{ minHeight: "80vh" }}>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{
                            mt: 3,
                            mb: 2
                        }}
                    >
                        <Box display="flex" flexDirection="column">
                            <Typography
                                variant="h3"
                                component="h1"
                                fontWeight="bold"
                                gutterBottom
                                sx={{ marginBottom: "2rem" }}
                            >
                                Register to the Road Transport Authority
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary" paragraph>
                                Register your account with us.
                            </Typography>
                            <Paper elevation={8} sx={{ padding: "2rem", marginTop: "1rem" }}>
                                <Formik
                                    initialValues={{
                                        firstName: "",
                                        middleName: "",
                                        lastName: "",
                                        streetName: "",
                                        citynTown: "",
                                        state1: "",
                                        pincode: "",
                                        email: "",
                                        adhaarNumber: "",
                                        mobileNumber: "",
                                        password: "",
                                        confirmPassword: "",
                                        acceptTerms: false,
                                    }}
                                    validationSchema={validateSchemaForSignup}
                                    onSubmit={handleSubmit}
                                >
                                    {({ errors, isSubmitting, values, handleChange, handleBlur }) => (
                                        <Form>
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
                                                        name="citynTown"
                                                        margin="normal"
                                                        required
                                                        fullWidth
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={4}>
                                                    <TextInput
                                                        label="State"
                                                        name="state1"
                                                        margin="normal"
                                                        required
                                                        fullWidth
                                                    />
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
                                                        label="Mobile Number"
                                                        name="mobileNumber"
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
                                                        name="adhaarNumber"
                                                        margin="normal"
                                                        required
                                                        fullWidth
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <TextInput
                                                        label="Password"
                                                        name="password"
                                                        type="password"
                                                        margin="normal"
                                                        required
                                                        fullWidth
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <TextInput
                                                        label="Confirm Password"
                                                        name="confirmPassword"
                                                        type="password"
                                                        margin="normal"
                                                        required
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
                                                            I consent to the collection and use of my personal information for the purpose of vehicle registration. I understand that this information will be handled securely and in accordance with applicable data protection laws.
                                                        </Typography>
                                                    }
                                                />
                                            </Box>

                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    marginTop: "1rem"
                                                }}
                                            >
                                                <Button
                                                    type="submit"
                                                    variant="contained"
                                                    color="primary"
                                                    disabled={isSubmitting || !values.acceptTerms}
                                                    sx={{
                                                        marginTop: "1rem",
                                                        backgroundColor: "#e8702a",
                                                        "&:hover": { backgroundColor: "#d45f1c" },
                                                        width: '200px',
                                                        padding: "0.5rem 2rem",
                                                    }}
                                                >
                                                    Signup
                                                </Button>
                                            </Box>

                                            <Box sx={{ marginTop: "1rem", textAlign: "center" }}>
                                                <Typography variant="body2">
                                                    Already have an account?{" "}
                                                    <Link to="/signin" style={{ textDecoration: "none", color: "#e8702a" }}>
                                                        Sign in
                                                    </Link>
                                                </Typography>
                                            </Box>
                                        </Form>
                                    )}
                                </Formik>
                            </Paper>
                        </Box>
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{
                            display: { xs: 'none', md: 'block' },
                            position: "sticky",
                            top: 0,
                            height: "99vh",
                            overflow: "hidden",
                        }}
                    >
                        <Box
                            sx={{
                                height: "100vh",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                overflow: "hidden",
                            }}
                        >
                            <img
                                src="https://images.pexels.com/photos/27100606/pexels-photo-27100606/free-photo-of-a-car-is-driving-down-the-street.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Black Car"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Signup;
