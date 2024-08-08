// src/components/Header.js
import { AppBar, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
    <AppBar
      position="relative"
      sx={{ height: 90, backgroundColor: "#465166", py: 1 }}
    >
      <Toolbar sx={{ justifyContent: "center" }}>
        <Typography variant="h3" sx={{ display: { xs: "none", sm: "block" } }}>
          Road Transport Authority Management System
        </Typography>
        <Typography variant="h3" sx={{ display: { xs: "block", sm: "none" } }}>
          RTAMS
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
