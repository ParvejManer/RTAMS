import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Grid } from '@mui/material';
import { Formik, Form } from 'formik';
import axios from '../api/axios';
import TextInput from '../customTextFields/TextInput';

const UpdateProfile = ({ open, onClose, userData, onUpdate }) => {
    const handleSubmit = async (values, actions) => {
        console.log("Clicked")
        try {
            const token = localStorage.getItem('token');
            const response = await axios.put(`/users/${userData.id}`, values, {
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
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <DialogTitle sx={{alignSelf:'center', fontSize:'30px', fontWeight:'bold'}}>Update Profile</DialogTitle>
            <Formik
                initialValues={{
                    firstName: userData?.firstName || "",
                    middleName: userData?.middleName || "",
                    lastName: userData?.lastName || "",
                    streetName: userData?.streetName || "",
                    city: userData?.city || "",
                    state1: userData?.state1,
                    pincode: userData?.pincode || "",
                    mobileNumber: userData?.mobileNumber || "",
                    email: userData?.email || "",
                    aadharNumber: userData?.aadharNumber || "",
                }}
                onSubmit={handleSubmit}
                enableReinitialize
            >
                {({ isSubmitting }) => (
                    <Form>
                        <DialogContent>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={4}>
                                    <TextInput label="First Name" name="firstName" margin="normal" fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextInput label="Middle Name" name="middleName" margin="normal" fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextInput label="Last Name" name="lastName" margin="normal" fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextInput label="Street Name" name="streetName" margin="normal" fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextInput label="City" name="city" margin="normal" fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextInput label="State" name="state1" margin="normal" fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextInput label="Pincode" name="pincode" margin="normal" fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextInput label="Mobile Number" name="mobileNumber" margin="normal" fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextInput label="Email" name="email" margin="normal" fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextInput label="Aadhar Number" name="aadharNumber" margin="normal" fullWidth />
                                </Grid>
                            </Grid>
                        </DialogContent>
                        <DialogActions>
                            <Button variant='contained' onClick={onClose} sx={{
                                backgroundColor: '#cccccc',
                                '&:hover': {
                                    backgroundColor: '#b3b3b3',
                                },
                                color: '#000000',
                                '&:disabled': {
                                    backgroundColor: '#e0e0e0',
                                    color: '#9e9e9e',
                                }
                            }}>Cancel</Button>
                            <Button variant='contained' type="submit" disabled={isSubmitting}
                                sx={{
                                    backgroundColor: "#e8702a",
                                    color: "#fff",
                                    "&:hover": { backgroundColor: "#d45f1c" },
                                }}>
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