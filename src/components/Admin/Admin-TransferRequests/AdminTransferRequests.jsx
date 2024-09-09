import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Button, Box, Typography } from '@mui/material';
import axios from '../../../api/axios';

const AdminTransferRequests = ({ status }) => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Fetch pending or completed transfer requests (dummy API call)
    axios.get(`/api/${status}-requests`).then((response) => {
      setRequests(response.data);
    });
  }, [status]);

  const handleApprove = (requestId) => {
    axios.post(`/api/pending-requests/${requestId}/approve`).then(() => {
      alert('Request approved, vehicle ownership transferred');
      // Update the request list
      setRequests(requests.filter((request) => request.id !== requestId));


      //Make a call to finallize vehicle ownership transfer
      axios.post(`/transfer-vehicle/${requestId}`)
        .then(() => {
            console.log("Vehicle ownership transferred");
        });

    });

  };

  const handleReject = (requestId) => {
    axios.post(`/api/pending-requests/${requestId}/reject`).then(() => {
      alert('Request rejected.');
      // Update the request list
      setRequests(requests.filter((request) => request.id !== requestId));
    });
  };

  return (
    <Box sx={{ p: 2, border: '1px solid #e0e0e0', borderRadius: '8px' }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        {status.charAt(0).toUpperCase() + status.slice(1)} Requests
      </Typography>
      <List>
        {requests.map((request) => (
          <ListItem key={request.id}>
            <ListItemText
              primary={`Vehicle: ${request.vehicle.make} ${request.vehicle.model}`}
              secondary={`From: ${request.currentOwner}, To: ${request.newOwner}`}
            />
            {status === 'pending' && (
              <>
                <Button variant="contained" color="success" onClick={() => handleApprove(request.id)}>
                  Approve
                </Button>
                <Button variant="contained" color="error" onClick={() => handleReject(request.id)}>
                  Reject
                </Button>
              </>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default AdminTransferRequests;
