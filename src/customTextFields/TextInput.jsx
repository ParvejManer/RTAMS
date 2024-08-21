import React from 'react';
import {  TextField, } from '@mui/material';
import { useField } from 'formik';

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <TextField
        {...field}
        {...props}
        label={label}
        placeholder={label}
        // autoComplete='off'
        InputLabelProps={{shrink: true}}
        error={meta.touched && Boolean(meta.error)}
        helperText={meta.touched && meta.error}
        fullWidth
      />
    </div>
  );
};

export default TextInput;
