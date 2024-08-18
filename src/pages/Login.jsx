import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Alert,
  Snackbar,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
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

      <Container component="main" maxWidth="xs">
        <Paper elevation={4} style={{ padding: "2rem", marginTop: "2rem" }}>
          <Typography
            variant="h4"
            component="h1"
            textAlign="center"
            gutterBottom
          >
            Login
          </Typography>
          <Formik
            initialValues={{
              mobileno: "",
              password: "",
            }}
            validationSchema={validateSchemaForLogin}
            onSubmit={(values, { setErrors }) => {
              //  authentication and API Calls after vaishnavi give me API
              if (
                values.mobileno === "1234567890" &&
                values.password === "pass@123"
              ) {
                console.log("Form data: ", values);
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
            {({ errors, touched }) => (
              <Form>
                {errors.general && (
                  <Alert severity="error">{errors.general}</Alert>
                )}
                <Field
                  as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="mobileno"
                  label="Mobile Number"
                  name="mobileno"
                  error={touched.mobileno && Boolean(errors.mobileno)}
                  helperText={touched.mobileno && errors.mobileno}
                />
                <Field
                  as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  style={{ marginTop: "1rem" }}
                >
                  Login
                </Button>
              </Form>
            )}
          </Formik>
        </Paper>
      </Container>
    </>
  );
}

export default Login;
