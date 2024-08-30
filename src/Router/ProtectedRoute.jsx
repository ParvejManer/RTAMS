import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
 
  const token=localStorage.getItem('token');
  return token ? <Outlet/>:<Navigate to='/signin'/>
}
 
export default ProtectedRoute;