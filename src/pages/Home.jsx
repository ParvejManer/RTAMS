import React from "react";
import { Box, Typography, Button, Grid, Container } from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import HistoryIcon from "@mui/icons-material/History";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100vh",
          padding: "0 94px",
          backgroundColor: "#ffffff",
        }}
      >
        <Box sx={{ maxWidth: "600px" }}>
          <Typography variant="h3" fontWeight="bold" sx={{ color: "#000000" }}>
            Streamline Your Road Transport Authority
          </Typography>
          <Typography variant="body1" sx={{ marginY: 2 }}>
            Our comprehensive management system helps you efficiently manage
            vehicle registrations, vehicle transfers, and ownership history.
          </Typography>
          {localStorage.getItem('token') ?
          (<Box sx={{ marginTop: 4 }}>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/landingpage"
              sx={{
                backgroundColor: "#e8702a",
                "&:hover": { backgroundColor: "#d45f1c" },
                width: "150px",
                height: "45px",
                fontSize: "16px",
                borderRadius: "5px",
              }}
            >
              Get Started
            </Button>
          </Box>)
          :(
            <Box sx={{ marginTop: 4,display: 'flex' ,gap: 2 }}>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/signin"
              sx={{
                backgroundColor: "#e8702a",
                "&:hover": { backgroundColor: "#d45f1c" },
                width: "150px",
                height: "45px",
                fontSize: "16px",
                borderRadius: "5px",
              }}
            >
              Sign In
            </Button>

            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/signup"
              sx={{
                backgroundColor: "#e8702a",
                "&:hover": { backgroundColor: "#d45f1c" },
                width: "150px",
                height: "45px",
                fontSize: "16px",
                borderRadius: "5px",
              }}
            >
              Sign Up
            </Button>
          </Box>
          
          )
          } 
        </Box>


        <Box
          sx={{ width: { xs: "100%", md: "500px" }, height: "500px", backgroundColor: "#f5f5f5" }}
        >
          <img
            src="https://images.pexels.com/photos/70912/pexels-photo-70912.jpeg"
            alt="Black Coupes"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </Box>
      </Box>

      <Box sx={{ paddingY: 2, backgroundColor: "#f5f5f5" }}>
        <Container>
          <Typography
            variant="h6"
            sx={{ color: "#7f7f7f", textAlign: "center", marginBottom: 2 }}
          >
            Key Features
          </Typography>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ textAlign: "center", color: "#000000", marginBottom: 4 }}
          >
            Streamline Your Operations
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "center", marginBottom: 6 }}
          >
            Our road transport authority management system provides powerful
            tools to manage your entire operation, from vehicle registration to
            ownership history.
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
              <DirectionsCarIcon sx={{ fontSize: 50, color: "#e8702a" }} />
              <Typography variant="h6" fontWeight="bold" sx={{ marginTop: 2 }}>
                Vehicle Registration
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 1 }}>
                Streamline the vehicle registration process with our
                user-friendly interface and automated workflows. Easily register
                new vehicles and access comprehensive vehicle history records.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
              <TransferWithinAStationIcon
                sx={{ fontSize: 50, color: "#e8702a" }}
              />
              <Typography variant="h6" fontWeight="bold" sx={{ marginTop: 2 }}>
                Vehicle Transfer
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 1 }}>
                Efficiently manage vehicle transfers with our comprehensive
                tools. Easily transfer ownership and update vehicle records.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
              <HistoryIcon sx={{ fontSize: 50, color: "#e8702a" }} />
              <Typography variant="h6" fontWeight="bold" sx={{ marginTop: 2 }}>
                Ownership History
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 1 }}>
                Access detailed ownership history records for each vehicle in
                your system. Easily track changes in ownership and vehicle
                details.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;