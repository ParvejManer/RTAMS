import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';
import { Box, Button, List, ListItem, ListItemText, Typography } from '@mui/material';


const TransferRequests = () => {


    const [requests, setRequests] = useState([]);

    useEffect(() => {
        axios.get('/vehicle-transfers/requests')
            .then(response => {
                setRequests(response.data);
                // console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching transfer requests:', error);
            });
    }, []);



    const handleAccept = (requestId) => {
        axios.patch(`/vehicle-transfers/respond/${requestId}`, { status: 'Accepted' })
            .then(() => {
                alert('Request accepted.');
                setRequests(requests.filter(request => request.id !== requestId));
            })
            .catch(error => {
                console.error('Error accepting transfer request:', error);
            });       
    };



    const handleReject = (requestId) => {
        axios.patch(`/vehicle-transfers/respond/${requestId}`, { status: 'Rejected' })
            .then(() => {
                alert('Request rejected.');
                setRequests(requests.filter(request => request.id !== requestId));
            })
            .catch(error => {
                console.error('Error rejecting transfer request:', error);
            });
    };


    return (
        <Box sx={{ p: 2, border: '1px solid #E0E0E0', borderRadius: '8px' }}>
            <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
                Transfer Requests
            </Typography>
            <List>
                {requests.map(request => (
                    <ListItem key={request.id}>
                        <ListItemText
                            primary={`Vehicle: ${request.vehicle.registrationNumber} ${request.vehicle.make} ${request.vehicle.model}`}
                            secondary={
                                <>
                                    {`From: ${request.currentOwner.firstName} ${request.currentOwner.lastName}`}
                                    <br />
                                    {`To: ${request.newOwner.firstName} ${request.newOwner.lastName}`}
                                </>
                            }
                        />
                        
                        <Button variant='contained' color='success' onClick={() => handleAccept(request.id)}>
                            Accept
                        </Button>
                        <Button variant='contained' color='error' onClick={() => handleReject(request.id)}>
                            Reject
                        </Button>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};
export default TransferRequests;

