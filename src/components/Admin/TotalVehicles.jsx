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
import axios from '../../api/axios';
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


const TotalVehicles = () => {
  const [vehicleData, setVehicleData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const navigate = useNavigate();


//   useEffect(() => {
//     if (!localStorage.getItem('token')) {
//       navigate('/signin');
//     }
//   }, [navigate]);

  useEffect(() => {
    axios.get('/vehicles')
      .then((response) => {
        setVehicleData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching ownership history:', error);
      });
  }, []);

  // Handle page change
  const changePage = (event ,newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const changeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Container maxWidth="lg" sx={{ minHeight: "85vh", paddingY: 5 }}>
      <Box mt={4} mb={2}>
        <Typography variant="h2" fontWeight="bold" component="h1" gutterBottom>
          Registered Vehicles.
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          View all the registered vehicles on the system.
        </Typography>  
      </Box>

      <Box mt={2}>
        <TableContainer component={Paper} elevation={5}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>Registration Number</TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>Brand</TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>Model</TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>MFG Year</TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>Color</TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>Fuel Type</TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>VIN Number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {vehicleData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                <TableRowStyled key={`${row.registrationNumber}-${index}`}>
                  <TableCell>{row.registrationNumber}</TableCell>
                  <TableCell>{row.make}</TableCell>
                  <TableCell>{row.model}</TableCell>
                  <TableCell>{row.yearOfManufacturing}</TableCell>
                  <TableCell>{row.color}</TableCell>
                  <TableCell>{row.fuelType}</TableCell>
                  <TableCell>{row.vinNumber}</TableCell>
                </TableRowStyled>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={vehicleData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={changePage}
            onRowsPerPageChange={changeRowsPerPage}
          />
        </TableContainer>
      </Box>
    </Container>
  );
};

export default TotalVehicles;
