import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  TablePagination
} from '@mui/material';
// import axios from 'axios';
import axios from '../api/axios';
import styled from "@emotion/styled";
import { useNavigate } from 'react-router-dom';

const TableRowStyled = styled(TableRow)`
  &:nth-of-type(odd) {
    background-color: #dadad9;
  }
  &:nth-of-type(even) {
    background-color: white;
  }
    & > td {
    color: black;
  }
`;


const OwnershipHistory = () => {
  const [ownershipData, setOwnershipData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const navigate = useNavigate();


  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/signin');
    }
  }, [navigate]);

  useEffect(() => {
    // Fetch ownership history data from the API
    axios.get('/ownership-history')
      .then((response) => {
        setOwnershipData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching ownership history:', error);
      });
  }, []);

  // Handle page change
  const handleChangePage = (event ,newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Container maxWidth="lg" sx={{ height: "100%", paddingY: 5 }}>
      <Box mt={4} mb={2}>
        <Typography variant="h2" fontWeight="bold" component="h1" gutterBottom>
          Vehicle Ownership History
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          View the complete ownership history of vehicle.
        </Typography>
      </Box>

      <Box mt={2}>
        <Typography variant="h5" fontWeight="bold" component="h2" gutterBottom>
          Ownership History
        </Typography>
        <TableContainer component={Paper} elevation={5}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>Registration Number</TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>Owner Name</TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>Start Date</TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>End Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ownershipData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                <TableRowStyled key={`${row.registrationNumber}-${index}`}>
                  <TableCell>{row.registrationNumber}</TableCell>
                  <TableCell>{row.ownerName}</TableCell>
                  <TableCell>{new Date(row.ownershipStartDate).toLocaleDateString()}</TableCell>
                  <TableCell>{row.endDate ? new Date(row.ownershipEndDate).toLocaleDateString() : '-'}</TableCell>
                </TableRowStyled>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={ownershipData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </Box>
    </Container>
  );
};

export default OwnershipHistory;