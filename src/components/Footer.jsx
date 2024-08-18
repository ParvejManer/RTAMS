import React from "react";
import { Box, Typography, Link, Container } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 0.5,
        borderTop: "1px solid #E7E7E7",
        backgroundColor: "#ffffff",
        textAlign: "center",
        mt : "auto",
        padding: "10px 0"
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="textSecondary">
          © 2024 Road Transport Authority. All rights reserved.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
          <Link href="#" underline="hover" color="inherit" sx={{ mx: 2 }}>
            Terms of Service
          </Link>
          <Link href="#" underline="hover" color="inherit" sx={{ mx: 2 }}>
            Privacy
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
