import { Box, Container, Grid, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react'
import VehicleList from './VehicleList';
import VehicleTransferForm from './VehicleTransferForm';
import TransferRequests from './TransferRequests';


const VehicleTransferUser = () => {

    const [selectedVehicle, setSelectedVehicle] = useState(null);
    const [tabValue, setTabValue] = useState(0);

    const handleVehicleSelect = (vehicle) => {
        setSelectedVehicle(vehicle);
    }

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    }

    return (
        <Container sx={{ mt: 4, minHeight: '76vh' }}>
            <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider',bgcolor: 'background.paper' }}>
                <Tabs
                    value={tabValue}
                    onChange={handleTabChange}
                    centered
                >
                    <Tab label="Transfer Vehicle" />
                    <Tab label="Transfer Requests" />
                </Tabs>

            </Box>

            {tabValue === 0 && (
                <Grid container spacing={4} sx={{ mt: 2 }}>
                    <Grid item xs={12} md={6}>
                        <VehicleList onSelect={handleVehicleSelect} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <VehicleTransferForm selectedVehicle={selectedVehicle} />
                    </Grid>
                </Grid>
            )}

            {tabValue === 1 && <TransferRequests />}
        </Container>
    )
}



export default VehicleTransferUser;
