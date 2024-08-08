// src/components/Navbar.js
import { ContactPage, Home, Info, Login } from "@mui/icons-material";
import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="relative" color="default">
      <Toolbar sx={{ justifyContent: "space-evenly" }}>
        <Button
          color="inherit"
          component={Link}
          to="/"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Home
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/"
          sx={{ display: { xs: "block", sm: "none" } }}
        >
          <Home />
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/about"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          About Us
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/about"
          sx={{ display: { xs: "block", sm: "none" } }}
        >
          <Info />
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/contact"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Contact Us
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/contact"
          sx={{ display: { xs: "Block", sm: "none" } }}
        >
          <ContactPage />
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/login"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Login
        </Button>
       
        <Button
          color="inherit"
          component={Link}
          to="/login"
          sx={{ display: { xs: "block", sm: "none" } }}
        >
          <Login />
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
