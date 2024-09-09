import React from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const AdminDashboardCard = ({ title, description, number, linkText, linkUrl, additionalContent }) => {
  return (
    <Card sx={{ boxShadow: 7, textAlign: 'center', padding: '50px', height: '400px' }}>
      <CardContent>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
          {title}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {description}
        </Typography>
        
          <Box sx={{ marginY: '20px' }}>
            {additionalContent}
          </Box>
        
          <Button variant="contained" component={Link} to={linkUrl} sx={{
            marginTop: "1rem",
            backgroundColor: "#e8702a",
            "&:hover": { backgroundColor: "#d45f1c" },
          }}>
            {linkText}
          </Button>
      </CardContent>
    </Card>
  );
};

export default AdminDashboardCard;
