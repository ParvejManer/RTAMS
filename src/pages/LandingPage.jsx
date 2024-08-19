import React from 'react';
import { Box, Grid, Paper, Typography, Button, Container } from '@mui/material';

const LandingPage = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 2, backgroundColor: '#f5f5f5' }}>
    
      
      <Container>
        
        <Grid container spacing={3} justifyContent="center" sx={{ marginTop: 3 }}>
          
          
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <img 
                // src={require('./path/to/Screenshot_18-8-2024_185522_v0.dev.jpeg')} 
                alt="Screenshot 1" 
                style={{ width: '100%', height: 'auto', display: 'block' }} 
              />
              <Typography variant="h6" align="center" sx={{ marginTop: 1 }}>
                Feature Title 1
              </Typography>
              <Typography align="center">
                Description or explanation about the first feature.
              </Typography>
              <Box sx={{ textAlign: 'center', marginTop: 2 }}>
                <Button variant="contained" color="primary">
                  Action Button 1
                </Button>
              </Box>
            </Paper>
          </Grid>
          
          
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <img 
                // src={('./path/to/Screenshot_18-8-2024_185539_v0.dev.jpeg')} 
                alt="Screenshot 2" 
                style={{ width: '100%', height: 'auto', display: 'block' }} 
              />
              <Typography variant="h6" align="center" sx={{ marginTop: 1 }}>
                Feature Title 2
              </Typography>
              <Typography align="center">
                Description or explanation about the second feature.
              </Typography>
              <Box sx={{ textAlign: 'center', marginTop: 2 }}>
                <Button variant="contained" color="primary">
                  Action Button 2
                </Button>
              </Box>
            </Paper>
          </Grid>
          
          
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <img 
                // src={require('./path/to/Screenshot_18-8-2024_18554_v0.dev.jpeg')} 
                alt="Screenshot 3" 
                style={{ width: '100%', height: 'auto', display: 'block' }} 
              />
              <Typography variant="h6" align="center" sx={{ marginTop: 1 }}>
                Feature Title 3
              </Typography>
              <Typography align="center">
                Description or explanation about the third feature.
              </Typography>
              <Box sx={{ textAlign: 'center', marginTop: 2 }}>
                <Button variant="contained" color="primary">
                  Action Button 3
                </Button>
              </Box>
            </Paper>
          </Grid>
          
        </Grid>
      </Container>
      
      
    </Box>
  );
};

export default LandingPage;
