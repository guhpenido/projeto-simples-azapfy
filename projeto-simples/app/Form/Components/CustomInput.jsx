import React from 'react';
import { TextField } from '@mui/material';
import { Controller, useFormContext } from "react-hook-form";
import { NumericFormat } from 'react-number-format';

export function InputText({
  id,
  label,
  startAdornment,
  endAdornment,
  name,
  render,
  register,
}) {
  const { control } = useFormContext();

  return (
    <Controller
      id={id}
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          className="m-4 w-80"
          {...field}
          label={label}
          InputProps={{
            startAdornment: startAdornment,
            endAdornment: endAdornment,
          }}
          {...register(name)}
        />
      )}
    />
  );
}

export function InputNumber({
  id,
  label,
  startAdornment,
  endAdornment,
  name,
  thousandSeparator,
  decimalSeparator,
  register,
  control,
}) {
  const {  setValue } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, ...field } }) => (
        <NumericFormat
          {...field}
          value={value ?? ''}
          onValueChange={({ floatValue }) => {
            onChange(floatValue ?? 0); 
            setValue(name, floatValue ?? 0);
          }}
          thousandSeparator={thousandSeparator}
          decimalSeparator={decimalSeparator}
          customInput={TextField}
          label={label}
          className="m-4 w-80"
          InputProps={{
            startAdornment: startAdornment,
            endAdornment: endAdornment,
          }}
          {...register(name)}
        />
      )}
    />
  );
}
