// src/pages/Home.js
import { Container, Typography, Box } from "@mui/material";
// import carImage from '../assets/car.jpg';  // Replace with your image path

function Home() {
  return (
    <Box
      sx={{
        minHeight: "45vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundPosition: "center",
      }}
    >
      <Container sx={{ p: 4, borderRadius: 1, mt: 8 }}>
        <Typography
          variant="h4"
          sx={{ px: 30, fontWeight: "bold", p: { xs: 2, sm: 3, md: 4 }, textAlign:"center" }}
          gutterBottom
        >
          Welcome to the RTA Management System
        </Typography>
        <Typography variant="h6">
          This system helps in managing vehicle registrations and ownerships
          efficiently. Our aim is to streamline the allocation of vehicle
          registration numbers and enhance the transparency and traceability of
          vehicle ownership history.
        </Typography>
      </Container>
    </Box>
  );
}

export default Home;
