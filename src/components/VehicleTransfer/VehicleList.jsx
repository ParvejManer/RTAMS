import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';
import { Box, Checkbox, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';

const VehicleList = ({ onSelect }) => {
    const [vehicles, setVehicles] = useState([]);
    const [selectedVehicleId, setSelectedVehicleId] = useState(null);

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const response = await axios.get('/vehicles');
                setVehicles(response.data);
            } catch (error) {
                console.error("Vehicle fetching error:", error);
            }
        };

        fetchVehicles();
    }, []);

    const handleSelect = (vehicle) => {
        const newSelectedId = selectedVehicleId === vehicle.id ? null : vehicle.id;
        setSelectedVehicleId(newSelectedId);
        onSelect(newSelectedId ? vehicle : null); 
    };

    return (
        <Box sx={{ p: 2, border: '1px solid #e0e0e0', borderRadius: '8px' }}>
            <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
                Your Vehicles
            </Typography>
            <List>
                {vehicles.map((vehicle) => (
                    <ListItem key={vehicle.id}>
                        <ListItemButton onClick={() => handleSelect(vehicle)}>
                            <Checkbox
                                checked={selectedVehicleId === vehicle.id}
                                onChange={() => handleSelect(vehicle)} 
                            />
                            <ListItemText 
                                primary={`${vehicle.registrationNumber} ${vehicle.make} ${vehicle.model}`} 
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default VehicleList;
