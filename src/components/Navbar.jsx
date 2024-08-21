import { AppBar, Toolbar, Button, Box, IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { LocalShipping } from "@mui/icons-material";

function Navbar() {

  const navigate = useNavigate();

  return (
    <AppBar position="static" elevation={0} sx={{ backgroundColor: "#f5f5f5" }}>
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
            About Us
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/contact"
            sx={{ color: "#000000", fontSize: "16px", textTransform: "none" }}
          >
            Contact Us
          </Button>
          {localStorage.getItem('token') &&
            <Button
              color="inherit"
              onClick={() => {
                localStorage.removeItem('token')
                navigate('/signin')
                
              }}
              sx={{ color: "#000000", fontSize: "16px", textTransform: "none" }}
            >
              Logout
            </Button>
          }
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
