import { AppBar, Toolbar, Button, Box, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { LocalShipping, Padding } from "@mui/icons-material";
import { useState } from "react";

function Navbar() {

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleSignout = () => {
    localStorage.removeItem('token')
    setOpen(false)
    navigate('/signin')
  }

  const handleOpenDialog = () => {
    setOpen(true)
  }

  const handleCloseDialog = () => {
    setOpen(false)
  }

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
              onClick={handleOpenDialog}
              sx={{ color: "#000000", fontSize: "16px", textTransform: "none" }}
            >
              Signout
            </Button>
          }
        </Box>
      </Toolbar>

      <Dialog
        open={open}
        onClose={handleCloseDialog}
        sx={{
          "& .MuiPaper-root": {
            borderRadius: "12px",
            width: "400px",
            Padding: "20px",
            backgroundColor: "#ffffff",
          },
        }}
      >
        <DialogTitle
          sx={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "#e8702a",
            paddingBottom: "8px"
          }}
        >Sign Out</DialogTitle>
        <DialogContent
          sx={{
            fontSize: "16px",
            color: "#7f7f7f",
            paddingBottom: "16px"
          }}
        >
          <Typography>Are you sure want to sign out?</Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "flex-end" }}>
          <Button
            onClick={handleCloseDialog}
            sx={{
              color: "#e8702a",
              textTransform: "none",
              fontWeight: "bold"
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSignout}
            sx={{
              color: "#ffffff",
              backgroundColor: "#e8702a",
              textTransform: "none",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#cf5e1e"
              }
            }}
          >
            Yes, Sign Out
          </Button>
        </DialogActions>
      </Dialog>
    </AppBar>
  );
}

export default Navbar;
