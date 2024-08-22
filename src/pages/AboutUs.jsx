import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";

const AboutUs = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "80vh",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          py: 4,
          gap: { xs: 4, md: 8 }, // Added gap between content and image
        }}
      >
        {/* Text Section */}
        <Box
          sx={{
            maxWidth: { xs: "100%", md: "50%" },
            textAlign: { xs: "center", md: "left" },
            mb: { xs: 4, md: 0 },
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{ fontWeight: "bold", mb: 2 }}
          >
            About the Road Transport Authority
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 3 }}>
            The Road Transport Authority (RTA) is a government agency
            responsible for managing and regulating all aspects of road
            transportation in our region. Our mission is to ensure the
            safety, efficiency, and sustainability of our transportation
            infrastructure.
          </Typography>
        </Box>

        <Box
          sx={{
            width: { xs: "100%", md: "500px" },
            height: "300px",
            backgroundColor: "#f5f5f5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <img
            src="https://images.pexels.com/photos/26564111/pexels-photo-26564111/free-photo-of-black-and-white-photo-of-a-skoda-superb-on-the-street.jpeg"
            alt="Black and White Photo of a Skoda Superb on the Street"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
      </Container>

    
    </Box>
  );
};

export default AboutUs;
