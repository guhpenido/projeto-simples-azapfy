import React from 'react';
import { TextField } from '@mui/material';
import { Controller } from "react-hook-form";
import { NumericFormat } from 'react-number-format';
import { InputAdornment } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export function InputText({
  label,
  name,
  control,
}) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          className="m-4 w-60"
          onChange={(e) => {
            field.onChange(e);
          }}
        />
      )}
    />
  );
}

export function InputNumber({
  control,
  name,
  label,
}) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true }}
      render={({ field: { onChange, value, ...field } }) => (
        <NumericFormat
          {...field}
          value={value ?? ''}
          onValueChange={({ floatValue }) => {
            onChange(floatValue ?? 0);
          }}
          thousandSeparator='.'
          decimalSeparator=','
          customInput={TextField}
          label={label}
          className="m-4 w-80"
          InputProps={{
            endAdornment: <InputAdornment position="end">uni</InputAdornment>,
          }}
        />
      )}
    />
  );
}

export function InputCurrency({
  control,
  name,
  label,
}) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true }}
      render={({ field: { onChange, value, ...field } }) => (
        <NumericFormat
          {...field}
          value={value ?? ''}
          onValueChange={({ floatValue }) => {
            onChange(floatValue ?? 0);
          }}
          thousandSeparator='.'
          decimalSeparator=','
          decimalScale={2}
          fixedDecimalScale={true}
          customInput={TextField}
          label={label}
          className="m-4 w-80"
          InputProps={{
            startAdornment: <InputAdornment position="start">R$</InputAdornment>,
          }}
        />
      )}
    />
  );
}

export function InputDate({
  control,
  name,
  label,
}) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, ...field } }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            {...field}
            label={label}
            value={value}
            onChange={(date) => {
              onChange(date);
            }}
            format="DD/MM/YYYY"
          />
        </LocalizationProvider>
      )}
    />
  );
}