import { Container, Typography, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";

function Home() {
  const navigate = useNavigate();
  return (
    <Stack
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
          sx={{
            px: 30,
            fontWeight: "bold",
            p: { xs: 2, sm: 3, md: 4 },
            textAlign: "center",
          }}
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

        <Stack
          direction={"row"}
          spacing={5}
          sx={{ py: "50px", justifyContent: "center" }}
        >
          <Button
            type="submit"
            size="large"
            variant="contained"
            onClick={() => {
              navigate("/userform");
            }}
            sx={{ backgroundColor: "#465166" }}
          >
            Vehicle Registration
          </Button>
          <Button
            type="submit"
            size="large"
            variant="contained"
            sx={{ backgroundColor: "#465166" }}
          >
            Vehicle Transfer
          </Button>
          <Button
            type="submit"
            size="large"
            variant="contained"
            sx={{ backgroundColor: "#465166" }}
          >
            Ownership History
          </Button>
        </Stack>
      </Container>
    </Stack>
  );
}

export default Home;
