import React from "react";
import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,
  Box,
} from "@mui/material";

const ContactUs = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          flexGrow: 1,
          mt: 8,
          mb: 8,
        }}
      >
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Contact the Road Transport Authority
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              Have a question or need assistance? Our team is here to help. Fill
              out the form below and we'll get back to you as soon as possible.
            </Typography>

            <Box component="form" noValidate autoComplete="off">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    placeholder="Enter your name"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    placeholder="Enter your email"
                    variant="outlined"
                    type="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    placeholder="Enter your message"
                    variant="outlined"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      backgroundColor: "#e8702a",
                      "&:hover": { backgroundColor: "#d45f1c" },
                      width: "150px",
                      height: "45px",
                      fontSize: "16px",
                      borderRadius: "5px",
                    }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box
              sx={{
                width: { xs: "100%", md: "500px" },
                height: "400px",
                backgroundColor: "#f5f5f5",
                borderRadius: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <img
                src="https://images.pexels.com/photos/230554/pexels-photo-230554.jpeg"
                alt="Contact Us"
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
    </Box>
  );
};

export default ContactUs;
