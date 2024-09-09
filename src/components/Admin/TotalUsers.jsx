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


const TotalUsers = () => {
  const [userData, setUserData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const navigate = useNavigate();


//   useEffect(() => {
//     if (!localStorage.getItem('token')) {
//       navigate('/signin');
//     }
//   }, [navigate]);

  useEffect(() => {
    
    axios.get('/users')
      .then((response) => {
        setUserData(response.data);
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
          Registered Users.
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          View all the registered users on the system.
        </Typography>  
      </Box>

      <Box mt={2}>
        <TableContainer component={Paper} elevation={5}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>User Id</TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>User Name</TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>Address</TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>Pincode</TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>Mobile Number</TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                <TableRowStyled key={`${row.id}-${index}`}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{`${row.firstName} ${row.middleName ? row.middleName : ""} ${row.lastName}`}</TableCell>
                  <TableCell>{`${row.streetName}, ${row.city}, ${row.state1}`}</TableCell>
                  <TableCell>{row.pincode}</TableCell>
                  <TableCell>{row.mobileNumber}</TableCell>
                  <TableCell>{row.email}</TableCell>
                </TableRowStyled>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={userData.length}
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

export default TotalUsers;
