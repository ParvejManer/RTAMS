import { AppBar, Toolbar, Button, Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { LocalShipping } from "@mui/icons-material";

function Navbar() {
  return (
    <AppBar position="static" elevation={0} sx={{ backgroundColor: "#ffffff" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <IconButton component={Link} to="/" disableRipple>
          <LocalShipping sx={{ color: "#000000", fontSize: "32px" }} />
        </IconButton>

        <Box sx={{ display: "flex", gap: "20px" }}>
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{ color: "#000000", fontSize: "16px", textTransform: "none" }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/about"
            sx={{ color: "#000000", fontSize: "16px", textTransform: "none" }}
          >
            About
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/contact"
            sx={{ color: "#000000", fontSize: "16px", textTransform: "none" }}
          >
            Contact
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/login"
            sx={{ color: "#000000", fontSize: "16px", textTransform: "none" }}
          >
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
