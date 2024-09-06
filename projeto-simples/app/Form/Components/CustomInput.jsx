import React from 'react';
import {
  InputLabel,
  FormControl,
  Input,
  TextField,
} from '@mui/material';
import { Controller, useFormContext } from "react-hook-form";

export default function CustomInput({
  id,
  label,
  startAdornment,
  endAdornment,
  name,
}) {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        id={id}
        name={name}
        control={control}
        render={({ field }) => <TextField className="m-4 w-80" {...field} label={label} endAdornment={endAdornment} startAdornment={startAdornment} />}
      />
    </>
  );
}