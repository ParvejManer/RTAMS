import React, { useState } from 'react';
import { Container, Tabs, Tab, Box, Grid } from '@mui/material';
import AdminTransferRequests from './AdminTransferRequests';

function AdminVehicleTransfer() {
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <Container sx={{ mt: 4, minHeight: '76vh' }}>
            <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider', bgcolor: 'background.paper' }}>
                <Tabs
                    value={tabValue}
                    onChange={handleTabChange}
                    centered
                >
                    <Tab label="Pending Requests" />
                    <Tab label="Completed Requests" />
                </Tabs>
            </Box>
            {tabValue === 0 &&
                <Grid container spacing={4} sx={{ mt: 2 }}>
                    <Grid item xs={12} md={12}>
                        <AdminTransferRequests status="pending" />
                    </Grid>
                </Grid>
            }
            {tabValue === 1 &&
                <Grid container spacing={4} sx={{ mt: 2 }}>
                    <Grid item xs={12} md={12}>
                        <AdminTransferRequests status="completed" />
                    </Grid>
                </Grid>
            }
        </Container>
    );
}

export default AdminVehicleTransfer;
