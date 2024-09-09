import React, { useEffect, useState } from 'react'
import axios from '../../api/axios'
import { Box, Button, List, ListItem, ListItemText, Typography } from '@mui/material';

const TransferRequests = () => {
    const [requests, setRequests] = useState([]);

    useEffect(()=>{
        axios.get('/transfer-requests')
            .then((response) => {
                setRequests(response.data)
            });
    }, []);

    const handleAccept = (requestId) => {
        axios.post(`/transfer-request/${requestId}/accept`)
            .then(() => {
                alert('Request Accepted and send to the admin for approval');
                setRequests(requests.filter((request) => request.id !== requestId));

                axios.post('/admin/notify', {requestId})
                    .then(() => {
                        console.log('Admin notified for approval');
                    });
            });
    };


    const handleReject = (requestId) => {
        axios.post(`/transfer-request/${requestId}/reject`)
        .then(() => {
            alert('Request Rejected')
            setRequests(requests.filter((request) => request.id !== requestId));
        });
    };

    return(
        <Box sx={{p: 2, border: '1px solid #e0e0e0', borderRadius: '8px'}}>
            <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
                Transfer Requests
            </Typography>
            <List>
                {requests.map((request) => (
                    <ListItem key={request.id}>
                        <ListItemText 
                            primary={`Vehicle: ${request.vehicle.registrationNumber} ${request.vehicle,make} 
                            ${request.vehicle.model}`}
                            secondary={`From: ${request.currentOwner}, To: ${request.newOwner}`}
                        />

                        <Button variant='contained' color='success' onClick={()=> handleAccept(request.id)}>
                            Accept
                        </Button>
                        <Button variant='contained' color='error' onClick={()=> handleReject(request.id)}>
                            Request
                        </Button>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

export default TransferRequests;
