import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@mui/material";
import { useField } from 'formik';

const SelectInput = ({ List, label, name, isObjectList = false, ...props }) => {
    const [field, meta, helpers] = useField(name);

    // The list I get which will be the form of array 
    const list = Array.isArray(List) ? List : [];

    return (
        <FormControl fullWidth error={meta.touched && !!meta.error}>
            <InputLabel id={`${name}-label`}>
                {meta.touched && meta.error ? meta.error : label}
            </InputLabel>
            <Select
                {...field}
                {...props}
                labelId={`${name}-label`}
                id={`${name}-select`}
                label={label}
                value={field.value || ""}
                onChange={(e) => {
                    helpers.setValue(e.target.value);
                }}
                MenuProps={{
                    PaperProps: {
                        style: {
                            maxHeight: 200,
                            overflowY: 'auto',
                        },
                    },
                }}
            >
                {list.map((item, index) => (
                    <MenuItem
                        key={isObjectList ? item.fuelType : index} 
                        value={isObjectList ? item.fuelType : item} 
                    >
                        {isObjectList ? item.fuelType : item} 
                    </MenuItem>
                ))}
            </Select>
            {meta.touched && meta.error ? (
                <FormHelperText>{meta.error}</FormHelperText>
            ) : null}
        </FormControl>
    );
};

export default SelectInput;
