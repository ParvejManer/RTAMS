import React from "react";
import { Container, Typography, Paper } from "@mui/material";

const AboutUs = () => {
  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={3} style={{ padding: "2rem", marginTop: "2rem" }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{ textAlign: "center" }}
          gutterBottom
        >
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to the Road Transport Authority Management System. Our mission
          is to provide efficient and reliable transport services to the public.
          We strive to enhance the safety, sustainability, and reliability of
          our road transport infrastructure.
        </Typography>
        <Typography variant="body1" paragraph>
          Our team consists of dedicated professionals who are committed to
          improving the transport system through innovative solutions and
          advanced technology. We work closely with various stakeholders,
          including government agencies, transport operators, and the public, to
          ensure a seamless and efficient transport experience.
        </Typography>
        <Typography variant="body1" paragraph>
          At the Road Transport Authority, we prioritize customer satisfaction
          and continuously work towards enhancing our services. Thank you for
          choosing us as your trusted partner in road transport management.
        </Typography>
      </Paper>
    </Container>
  );
};

export default AboutUs;
