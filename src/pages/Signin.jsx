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
} from "@mui/material";
import TextInput from "../customTextFields/TextInput";
import { Link, useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import { validateSchemaForLogin } from "../validateSchema/ValidationSchema";
import axios from "../api/axios";


function Signin() {
  const navigate = useNavigate();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);


  const handleSubmit = async (values, { setErrors }) => {
    try {
      const response = await axios.post("/auth/login", {
        mobileNumber: values.mobileNumber,
        password: values.password,
      });

      const token = response.data.token;
      
      
      localStorage.setItem("token", token);
      console.log(token)
    

    

      setOpenSnackbar(true);
      setShowOverlay(true);

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      if (error.response) {
        setErrors({ general: error.response.data.message || "Invalid mobile number or password" });
      } else if (error.request) {
        setErrors({ general: "No response from server" });
      } else {
        setErrors({ general: "An error occurred during login" });
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
              You are logged in successfully!!!
            </Alert>
          </Snackbar>
        </Box>
      )}

      <Container component="main" maxWidth="lg">
        <Grid container spacing={15} sx={{ minHeight: "100vh" }}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              width="100%"
            >
              <Typography
                variant="h3"
                component="h1"
                fontWeight="bold"
                gutterBottom
              >
                Login to the Road Transport Authority
              </Typography>

              <Typography variant="subtitle1" color="textSecondary" paragraph>
                Please enter your credentials to access your account.
              </Typography>


              <Paper
                elevation={2} sx={{ padding: "2rem", marginTop: "1rem" }}
              >
                <Formik
                  initialValues={{
                    mobileNumber: "",
                    password: "",
                  }}
                  validationSchema={validateSchemaForLogin}
                  onSubmit={handleSubmit}
                >
                  {({ errors, isSubmitting }) => (
                    <Form>
                      {errors.general && (
                        <Alert severity="error">{errors.general}</Alert>
                      )}

                      <>
                        <TextInput
                          label="Mobile Number"
                          name="mobileNumber"
                          margin="normal"
                          placeholder="0123456789"
                          required
                          fullWidth
                        />

                        <TextInput
                          label="Password"
                          name="password"
                          type="password"
                          margin="normal"
                          placeholder="********"
                          required
                          fullWidth
                        />
                      </>


                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        disabled={isSubmitting}
                        sx={{
                          marginTop: "1rem",
                          backgroundColor: "#e8702a",
                          "&:hover": { backgroundColor: "#d45f1c" },
                        }}
                      >
                        Sign In
                      </Button>
                      <Box sx={{ marginTop: "1rem", textAlign: "center" }}>
                        <Typography variant="body2">
                          Don't have an account?{" "}
                          <Link to="/signup" style={{ textDecoration: "none", color: "#e8702a" }}>
                            Sign up
                          </Link>
                        </Typography>
                      </Box>
                    </Form>
                  )}
                </Formik>
              </Paper>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: "90%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                borderRadius: "8px",
              }}
            >
              <img
                src="https://wallpaperaccess.com/full/229545.jpg"
                alt="Black Car Mirror Finish Wallpaper"
                style={{
                  width: "100%",
                  height: "80%",
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

export default Signin;
