import { TextField } from '@mui/material'
import { Field, useField } from 'formik'
import React from 'react'

const TextInput = ({label,...props}) => {
  const [meta,field,helper]=useField(props);

  return (
    <TextField {...props} {...meta}
      error = {field.error && field.touched}
      label = {field.error && field.touched ? `${field.error}` : `${label}`}
    />
  )
}

export default TextInput
