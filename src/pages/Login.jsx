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
import { useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import { validateSchemaForLogin } from "../validateSchema/ValidationSchema";

function Login() {
  const navigate = useNavigate();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

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
          {/* Left Side - Login Form */}
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
                Welcome back! Please enter your credentials to access your
                account.
              </Typography>
              <Paper elevation={4} sx={{ padding: "2rem", marginTop: "1rem" }}>
                <Formik
                  initialValues={{
                    mobileno: "",
                    password: "",
                  }}
                  validationSchema={validateSchemaForLogin}
                  onSubmit={(values, { setErrors }) => {
                    if (
                      values.mobileno === "1234567890" &&
                      values.password === "pass@123"
                    ) {
                      setOpenSnackbar(true);
                      setShowOverlay(true);
                      setTimeout(() => {
                        navigate("/");
                      }, 2000);
                    } else {
                      setErrors({ general: "Invalid username or password" });
                    }
                  }}
                >
                  {({ errors }) => (
                    <Form>
                      {errors.general && (
                        <Alert severity="error">{errors.general}</Alert>
                      )}

                      <TextInput
                        label="Mobile Number"
                        name="mobileno"
                        margin="normal"
                        required
                        fullWidth
                      />

                      <TextInput
                        label="Password"
                        name="password"
                        type="password"
                        margin="normal"
                        required
                        fullWidth
                      />

                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{
                          marginTop: "1rem",
                          backgroundColor: "#e8702a",
                          "&:hover": { backgroundColor: "#d45f1c" },
                        }}
                      >
                        Login
                      </Button>

                      <Box textAlign="center" marginTop="1rem">
                        <Typography variant="body2" color="textSecondary">
                          Forgot your password?
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
                height: "100%",
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

export default Login;
