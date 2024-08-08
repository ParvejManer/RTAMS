// src/components/Footer.js
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function Footer() {
  const theme = useTheme();

  return (
    <Box sx={{position:'fixed', width:'100%'}} >
      <Box
        sx={{
          backgroundColor: "#465166",
          position: "inherit",
          bottom: 0,
          width: "100%",
          p: { xs: 1, sm: 2 },
        }}
      >
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ color: theme.palette.primary.contrastText }}
        >
          &copy; 2024 RTA Management System
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
