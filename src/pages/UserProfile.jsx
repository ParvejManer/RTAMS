import React, { useState, useEffect } from 'react'
import axios from "../api/axios";
import { Box, Button, CircularProgress, Grid, Paper, Typography } from '@mui/material';
import UpdateProfile from './UpdateProfile';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const [userData, setUserData] = useState('');
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`/users/profile`);
        setUserData(response.data);
        // console.log(response.data.id);
        setLoading(false)
      } catch (error) {
        console.error("Error while fetching user data", error);
        setLoading(false)
      }
    };
    getUserData();
  }, [])

  const handleDialogClose = () => {
    setDialogOpen(false);
  }


  const handleProfileUpdate = (updateData) => {
    setUserData(updateData);
    alert('Profile updated successfully!!')
    handleDialogClose();
  }

  const handleback = () => {
    navigate(-1);
  }

  const handleDialogOpen = () => {
    setDialogOpen(true);
  }

  if (loading) {
    return (
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{
      maxWidth: 800,
      margin: 'auto',
      mt: 5,
      p: 2,
      minHeight: '75vh',
    }}>
      <Box sx={{mb:3, textAlign:'center', alignContent: 'center'}} >
        <Typography variant="h4" sx={{ mb: 2, alignSelf:'center', textAlign:'center', fontWeight: 'bold' }}> User Profile</Typography>
      </Box>

      {userData && (
        <Paper elevation={3} sx={{padding: 2}}>
        <Grid container spacing={2} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6}>
            <Typography  variant='h6'><strong>First Name: </strong> {userData.firstName}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant='h6'><strong>Middle Name: </strong> {userData.middleName}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant='h6'><strong>Last Name: </strong> {userData.lastName}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant='h6'><strong>Street Name: </strong> {userData.streetName}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant='h6'><strong>City: </strong> {userData.city}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant='h6'><strong>State: </strong> {userData.state1}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant='h6'><strong>Pincode: </strong> {userData.pincode}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant='h6'><strong>Mobile Number: </strong> {userData.mobileNumber}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant='h6'><strong>Email: </strong> {userData.email}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant='h6'><strong>Aadhaar Number: </strong> {userData.aadharNumber}</Typography>
          </Grid>
        </Grid>
        </Paper>
      )}

      <Box sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        mt: 4
      }}>
        <Button variant='conatined' onClick={handleback} sx={{
          backgroundColor: '#cccccc',
          '&:hover': {
            backgroundColor: '#b3b3b3',
          },
          color: '#000000',
          '&:disabled': {
            backgroundColor: '#e0e0e0',
            color: '#9e9e9e',
          }
        }}>
          Back
        </Button>
        <Button variant='contained' onClick={handleDialogOpen} sx={{
          backgroundColor: "#e8702a",
          color: "#fff",
          "&:hover": { backgroundColor: "#d45f1c" },
        }}>
          Update Profile
        </Button>
      </Box>



      <UpdateProfile
        open={dialogOpen}
        onClose={handleDialogClose}
        userData={userData}
        onUpdate={handleProfileUpdate}
      />

    </Box>

  )
}

export default UserProfile;