import React, { useEffect } from 'react';
import { Box, Grid, Paper, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

 useEffect(()=>{
    if(!localStorage.getItem('token')){
      navigate('/signin')
    }
  }, []) 

  return (
    <Box sx={{ display: "flex", minHeight: "80vh", flexGrow: 1, padding: 2, backgroundColor: '#f5f5f5' }}>


      <Container>

        <Grid container spacing={4} justifyContent="center" sx={{ marginTop: 2 }}>


          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ padding: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoo12UgRICgou6rEVtU-UZ61u_4z0YWSlpM6RzSK7wlT0THSJUiF_21argjXGrCkx388o&usqp=CAU"
                alt="Vehicle Registration"
                style={{ width: '100%', height: '100%', display: 'block' }}
              />
              <Typography variant="h4" fontWeight="bold" align="center" sx={{ marginTop: 1 }}>
                Vehicle Registration
              </Typography>
              <Typography align="center">
              Easily register new vehicles and access comprehensive vehicle history records.
              </Typography>
              <Box sx={{ textAlign: 'center', marginTop: 2 }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  // onClick={()=>{
                  //   navigate('/landingpage/vehicleform')
                  // }}
                  component={Link}
                  to='vehicleform'
                  sx={{
                    marginTop: "1rem",
                    backgroundColor: "#e8702a",
                    "&:hover": { backgroundColor: "#d45f1c" },
                  }}
                >
                  Register Vehicle
                </Button>
              </Box>
            </Paper>
          </Grid>


          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ padding: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
              <img
                src="data:image/jpeg;base64,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" 
                alt="Vehicle Transfer"
                style={{ width: '100%', height: '100%', display: 'block' }}
              />
              <Typography variant="h4" fontWeight="bold" align="center" sx={{ marginTop: 1 }}>
                Vehicle Transfer
              </Typography>
              <Typography align="center">
              Easily transfer ownership and update vehicle records.
              </Typography>
              <Box sx={{ textAlign: 'center', marginTop: 2 }}>
              <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="transferVehicle"
                  sx={{
                    marginTop: "1rem",
                    backgroundColor: "#e8702a",
                    "&:hover": { backgroundColor: "#d45f1c" },
                  }}
                >
                  Transfer Vehicle
                </Button>
              </Box>
            </Paper>
          </Grid>


          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ padding: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
              <img
                src="https://images.pexels.com/photos/17519348/pexels-photo-17519348/free-photo-of-hand-driving-toyota-car.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Ownership history"
                style={{ width: '100%', height: '100%', display: 'block' }}
              />
              <Typography variant="h4" fontWeight="bold" align="center" sx={{ marginTop: 1 }}>
                Ownership History
              </Typography>
              <Typography align="center">
              Access detailed ownership history records for each vehicle in your system.
              </Typography>
              <Box sx={{ textAlign: 'center', marginTop: 2 }}>
              <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  component={Link}
                  to='history'
                  sx={{
                    marginTop: "1rem",
                    backgroundColor: "#e8702a",
                    "&:hover": { backgroundColor: "#d45f1c" },
                  }}
                >
                  Ownership History
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
