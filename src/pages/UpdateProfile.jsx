import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import axios from '../api/axios';

const UpdateProfile = ({ open, onClose, userData, onUpdate }) => {
  const handleSubmit = async (values, actions) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put('/users', values, {
        headers: { Authorization: `Bearer ${token}` }
      });
      onUpdate(response.data);
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Update Profile</DialogTitle>
      <Formik
        initialValues={userData}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <DialogContent>
              <Field as={TextField} name="firstName" label="First Name" fullWidth margin="dense" />
              <Field as={TextField} name="middleName" label="Middle Name" fullWidth margin="dense" />
              <Field as={TextField} name="lastName" label="Last Name" fullWidth margin="dense" />
              <Field as={TextField} name="streetName" label="Street Name" fullWidth margin="dense" />
              <Field as={TextField} name="city" label="City" fullWidth margin="dense" />
              <Field as={TextField} name="state" label="State" fullWidth margin="dense" />
              <Field as={TextField} name="pincode" label="Pincode" fullWidth margin="dense" />
              <Field as={TextField} name="contactNo" label="Contact No" fullWidth margin="dense" />
              <Field as={TextField} name="email" label="Email" fullWidth margin="dense" />
              <Field as={TextField} name="aadharNo" label="Aadhar No" fullWidth margin="dense" />
            </DialogContent>
            <DialogActions>
              <Button onClick={onClose} color="secondary">Cancel</Button>
              <Button type="submit" color="primary" disabled={isSubmitting}>
                {isSubmitting ? "Saving..." : "Save Changes"}
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

export default UpdateProfile;