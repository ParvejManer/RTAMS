import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserRegistrationForm from '../components/UserRegistrationForm';

const UserRegistrationPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (userData) => {
    // Save user data to localStorage or send to backend
    // localStorage.setItem('user', JSON.stringify(userData));
    navigate('/add-vehicle');
  };

  return (
    <div>
      <h2>User Registration</h2>
      <UserRegistrationForm onSubmit={handleSubmit} />
    </div>
  );
};

export default UserRegistrationPage;
