import React from 'react';
import {
    InputLabel,
    FormControl,
    Input
} from '@mui/material';

export default function CustomInput({
    id,
    label,
    type,
    startAdornment,
    endAdornment,
    register,
    onChange,
    value
}) {
    return (
      <FormControl className="m-4 w-40">
        <InputLabel htmlFor={id}>{label}</InputLabel>
        <Input required
          id={id}
          type={type}
          startAdornment={startAdornment}
          endAdornment={endAdornment}
          {...register(id)}
          onChange={onChange}
          value={value}
        />
      </FormControl>
    );
}