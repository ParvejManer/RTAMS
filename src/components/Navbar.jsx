import { AppBar, Toolbar, Button, Box, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Typography, CircularProgress, Menu, MenuItem } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { LocalShipping, AccountCircle, KeyboardArrowDown} from "@mui/icons-material";
import { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import axios from '../api/axios';

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [name, setName] = useState('');
  const token = localStorage.getItem('token')

  

  const isMobile = useMediaQuery('(max-width:600px)');

  const handleSignout = () => {
    localStorage.removeItem('token');
    setOpen(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/');
    }, 1000);
  };

  const handleOpenDialog = () => {
    setOpen(true);
    handleCloseMenu(); 
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    navigate('/profile'); 
    handleCloseMenu();
  };


  useEffect(()=>{
    const getUsername = async() =>{
      
     try {
       const response = await axios.get('/users/profile');
    
       setName(response.data.firstName);
     } catch (error) {
      console.error(error)
     }
    };
    getUsername();
  }, [token, navigate]);
  

  return (
    <AppBar position="sticky" elevation={1} sx={{ backgroundColor: "#f5f5f5", height: 70 }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <IconButton component={Link} to="/" disableRipple>
          <LocalShipping sx={{ color: "#000000", fontSize: "32px" }} />
        </IconButton>

        <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
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
            to="about"
            sx={{ color: "#000000", fontSize: "16px", textTransform: "none" }}
          >
            About Us
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="contact"
            sx={{ color: "#000000", fontSize: "16px", textTransform: "none" }}
          >
            Contact Us
          </Button>
          
          {localStorage.getItem('token') && (
            <>
              
                {/* <Typography sx={{color: "black"}}>Welcome user</Typography> */}
                {/* <AccountCircle sx={{ color: "#000000", fontSize: "32px" }} /> */}
                {isMobile ? (
                <IconButton
                  edge="end"
                  color="inherit"
                  onClick={handleMenu}
                >
                  <AccountCircle sx={{ color: "#000000", fontSize: "32px" }} />
                </IconButton>
              ) : (
                <Button
                  color="inherit"
                  sx={{ color: "#000000", cursor: 'pointer' }}
                  onClick={handleMenu}
                  endIcon={<KeyboardArrowDown />}
                >
                  {name || 'User'}
                </Button>
              )}
                
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
              >
                <MenuItem onClick={handleProfile}>Profile</MenuItem>
                <MenuItem onClick={handleOpenDialog}>Sign out</MenuItem>
              </Menu>
            </>
          )}
        </Box>
      </Toolbar>

      {/* Loading and Signout Dialog */}
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        {loading ? (
          <Box sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            backdropFilter: "blur(10px)",
            zIndex: 9999, 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
          }}>
            <CircularProgress sx={{ color: "#e8702a", size: 70 }} />
            <Typography variant="h4" sx={{ mt: 2, color: "black" }}>
              Signing out...
            </Typography>
          </Box>
        ) : (
          <>
            <Dialog
              open={open}
              onClose={handleCloseDialog}
              sx={{
                "& .MuiPaper-root": {
                  borderRadius: "12px",
                  width: "400px",
                  padding: "20px",
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
              >
                Sign Out
              </DialogTitle>
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
          </>
        )}
      </Box>
    </AppBar>
  );
}

export default Navbar;