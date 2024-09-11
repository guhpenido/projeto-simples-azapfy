import React from "react";
import { Box, InputAdornment, FormControl, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Controller, useFormContext } from "react-hook-form";
import { NumericFormat } from 'react-number-format';

function ProductDetailsForm({ setValue }) {
    const { control } = useFormContext();
    
    return (
        <>
            <Box className="flex flex-row flex-wrap">
                <Controller
                    name='quantidade'
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, value, ...field } }) => (
                        <NumericFormat
                            {...field}
                            value={value ?? ''}
                            onValueChange={({ floatValue }) => {
                                onChange(floatValue ?? 0);
                                setValue('quantidade', floatValue ?? 0);
                            }}
                            thousandSeparator='.'
                            decimalSeparator=','
                            customInput={TextField}
                            label={"Quantidade"}
                            className="m-4 w-80"
                            InputProps={{
                                endAdornment: <InputAdornment position="end">uni</InputAdornment>,
                            }}
                        />
                    )}
                />
                <Controller
                    name='valorUnitario'
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, value, ...field } }) => (
                        <NumericFormat
                            {...field}
                            value={value ?? ''}
                            onValueChange={({ floatValue }) => {
                                onChange(floatValue ?? 0);
                                setValue('valorUnitario', floatValue ?? 0);
                            }}
                            thousandSeparator='.'
                            decimalSeparator=','
                            decimalScale={2}
                            fixedDecimalScale={true}
                            customInput={TextField}
                            label={"Valor Unitário"}
                            className="m-4 w-80"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">R$</InputAdornment>
                            }}
                        />
                    )}
                />
                <Controller
                    name='peso'
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, value, ...field } }) => (
                        <NumericFormat
                            {...field}
                            value={value ?? ''}
                            onValueChange={({ floatValue }) => {
                                onChange(floatValue ?? 0);
                                setValue('peso', floatValue ?? 0);
                            }}
                            thousandSeparator='.'
                            decimalSeparator=','
                            customInput={TextField}
                            label={"Peso"}
                            className="m-4 w-80"
                            InputProps={{
                                endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                            }}
                        />
                    )}
                />
                <Controller
                    name='volume'
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, value, ...field } }) => (
                        <NumericFormat
                            {...field}
                            value={value ?? ''}
                            onValueChange={({ floatValue }) => {
                                onChange(floatValue ?? 0);
                                setValue('volume', floatValue ?? 0);
                            }}
                            thousandSeparator='.'
                            decimalSeparator=','
                            customInput={TextField}
                            label={"Volume"}
                            className="m-4 w-80"
                            InputProps={{
                                endAdornment: <InputAdornment position="end">uni</InputAdornment>,
                            }}
                        />
                    )}
                />
                <Controller
                    name='valor'
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, value, ...field } }) => (
                        <NumericFormat
                            {...field}
                            value={value ?? ''}
                            onValueChange={({ floatValue }) => {
                                onChange(floatValue ?? 0);
                                setValue('valor', floatValue ?? 0);
                            }}
                            thousandSeparator='.'
                            decimalSeparator=','
                            decimalScale={2}
                            fixedDecimalScale={true}
                            customInput={TextField}
                            label={"Valor"}
                            className="m-4 w-80"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">R$</InputAdornment>
                            }}
                        />
                    )}
                />
            </Box>

            <Box className="flex flex-row flex-wrap">
                <Controller
                    name="desc"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Descrição"
                            className="m-4 w-60"
                            onChange={(e) => {
                                field.onChange(e);
                                setValue("desc", e.target.value);
                            }}
                        />
                    )}
                />
                <FormControl className="m-4 w-60">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Controller
                            name="prazoMin"
                            control={control}
                            render={({ field: { onChange, value, ...field } }) => (
                                <DatePicker
                                    {...field}
                                    label="Prazo Mínimo"
                                    value={value}
                                    onChange={(date) => {
                                        onChange(date);
                                        setValue('prazoMin', date);
                                    }}
                                    format="DD/MM/YYYY"
                                />
                            )}
                        />
                    </LocalizationProvider>
                </FormControl>
                <FormControl className="m-4 w-60">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Controller
                            name="prazoMax"
                            control={control}
                            render={({ field: { onChange, value, ...field } }) => (
                                <DatePicker
                                    {...field}
                                    label="Prazo Máximo"
                                    value={value}
                                    onChange={(date) => {
                                        onChange(date);
                                        setValue('prazoMax', date);
                                    }}
                                    format="DD/MM/YYYY"
                                />
                            )}
                        />
                    </LocalizationProvider>
                </FormControl>
            </Box>
        </>
    );
}

export default ProductDetailsForm;
