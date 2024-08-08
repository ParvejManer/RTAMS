import React from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { validateSchemaForLogin } from "../validateSchema/ValidationSchema";

const Login = () => {
  const navigate = useNavigate();

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: "2rem", marginTop: "2rem" }}>
        <Typography variant="h4" component="h1" textAlign="center" gutterBottom>
          Login
        </Typography>
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validationSchema={validateSchemaForLogin}
          onSubmit={(values, { setErrors }) => {
            // Placeholder for authentication logic
            if (values.username === "admin" && values.password === "password") {
              console.log("Hello, How can I help you?");
              navigate("/userform");
            } else {
              setErrors({ general: "Invalid username or password" });
            }
          }}
        >
          {({ errors, touched }) => (
            <Form>
              {errors.general && <Alert severity="error">{errors.general}</Alert>}
              <Field
                as={TextField}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                error={touched.username && Boolean(errors.username)}
                helperText={touched.username && errors.username}
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
  );
};

export default Login;
