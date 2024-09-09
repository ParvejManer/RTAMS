import React, { useEffect, useState } from 'react';
import { Grid, Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import AdminDashboardCard from './AdminDashboardCard';
import axios from '../../api/axios';

const AdminDashboard = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [users, setUsers] = useState(0);
  const [vehicles, setVehicles] = useState(0);
  const [historyRecords, setHistoryRecords] = useState(0);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await axios.get('/users/dashboard-stats');
        setUsers(userResponse.data.totalUsers);
        console.log(userResponse.data.totalUsers)

        const vehicleResponse = await axios.get('/vehicles/dashboard-stats')
        setVehicles(vehicleResponse.data.totalVehicles);
        console.log(vehicleResponse.data.totalVehicles);

        const historyResponse = await axios.get('/ownership-history/dashboard-stats');
        setHistoryRecords(historyResponse.data.totalHistory);
        console.log(historyResponse.data.totalHistory);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box
      sx={{
        paddingY: isSmallScreen ? '60px' : '100px',
        paddingX: isSmallScreen ? '20px' : '50px',
        backgroundColor: theme.palette.background.default,
        minHeight: '80vh'
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <AdminDashboardCard
            title="Users"
            description="Manage user profiles and information."
            additionalContent={
              <Typography variant="h6">Total Users: {users}</Typography>
            }
            linkText="View Users"
            linkUrl="user"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <AdminDashboardCard
            title="Vehicles"
            description="Manage vehicle information and details."
            additionalContent={
              <Typography variant="h6">Total Vehicles: {vehicles}</Typography>
            }
            linkText="View Vehicles"
            linkUrl="vehicle"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <AdminDashboardCard
            title="Vehicle Transfers"
            description="Manage vehicle transfer requests."
            additionalContent={
              <Box>
                <Typography variant="body1">Pending Transfers: {}</Typography>
                <Typography variant="body1">Approved Transfers: {}</Typography>
              </Box>
            }
            linkText="View Transfers"
            linkUrl="transfer"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <AdminDashboardCard
            title="History"
            description="View the history of all vehicle and owners."
            additionalContent={
              <Typography variant="h6">Total Records: {historyRecords}</Typography>
            }
            linkText="View History"
            linkUrl="history"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminDashboard;
