// src/components/Navbar.js
import { ContactPage, Home, Info, Login } from "@mui/icons-material";
import { AppBar, Toolbar, Button, Tooltip, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar  () {
  return (
    <AppBar position="relative" color="default">
      <Toolbar sx={{ justifyContent: "space-evenly",}}>
        <Button
          color="inherit"
          component={Link}
          to="/"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Home
        </Button>

        <Tooltip title="Home">
        <IconButton
          color="inherit"
          component={Link}
          to="/"
          sx={{ display: { xs: "block", sm: "none"} }}
        > 
          <Home />
          <span style={{fontSize:"15px", display:"flex"}}>Home</span>
        </IconButton>
        </Tooltip>

        <Button
          color="inherit"
          component={Link}
          to="/about"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          About Us
        </Button>
       
       <Tooltip title="About us">
        <IconButton
          color="inherit"
          component={Link}
          to="/about"
          sx={{ display: { xs: "block", sm: "none", margin:"5px" } }}
        >
          <Info />
          <div style={{fontSize:"15px", display:"flex"}}>About Us</div>
        </IconButton>
        </Tooltip>

        <Button
          color="inherit"
          component={Link}
          to="/contact"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Contact Us
        </Button>
       
       <Tooltip title="Contact Us">
        <IconButton
          color="inherit"
          component={Link}
          to="/contact"
          sx={{ display: { xs: "Block", sm: "none" } }}
        >
          <ContactPage />
          <span style={{fontSize:"15px", display:"flex"}}>Contact Us</span>
        </IconButton>
        </Tooltip>

          <Button
            color="inherit"
            component={Link}
            to="/login"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Login
          </Button>

        <Tooltip title="Login">
        <IconButton
          color="inherit"
          component={Link}
          to="/login"
          sx={{ display: { xs: "block", sm: "none" } }}
        >
          <Login />
          <span style={{fontSize:"15px", display:"flex"}}>Login</span>
        </IconButton>
        </Tooltip>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
