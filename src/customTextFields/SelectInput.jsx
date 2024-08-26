import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@mui/material";
import { useField } from 'formik';

const SelectInput = ({ List, label, name, isObjectList = false, ...props }) => {
    const [field, meta, helpers] = useField(name);

    // Ensure that List is an array
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
                        key={isObjectList ? item.fuelType : index} // Use a unique key for each item
                        value={isObjectList ? item.fuelType : item} // Use item.fuelType for objects, or item for primitive values
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
